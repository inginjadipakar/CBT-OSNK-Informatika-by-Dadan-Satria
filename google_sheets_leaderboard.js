// ==============================================================================
// GOOGLE APPS SCRIPT: BACKEND LEADERBOARD GLOBAL UNTUK CBT OSNK INFORMATIKA
// ==============================================================================
// Panduan Pasang (1 Menit):
// 1. Buat Google Sheet baru di https://sheets.new (Beri judul: "Leaderboard CBT OSNK")
// 2. Klik menu "Extensions" (Ekstensi) -> "Apps Script"
// 3. Hapus kode bawaan, lalu COPY-PASTE SELURUH KODE DI BAWAH INI
// 4. Klik tombol "Deploy" (Terapkan) di kanan atas -> "New deployment" (Penerapan Baru)
// 5. Pilih tipe: "Web app" (Aplikasi Web)
// 6. Atur:
//    - Description: "Leaderboard API CBT"
//    - Execute as: "Me" (Saya)
//    - Who has access: "Anyone" (Siapa saja / Siapa pun)  <-- PENTING!
// 7. Klik "Deploy", lalu SALIN "Web app URL" (akhiran /exec)
// 8. Tempelkan URL tersebut ke file `js/config.js` pada `GOOGLE_SHEETS_WEBHOOK_URL`!
// ==============================================================================

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var leaderboard = [];

  // Jika sheet belum ada isinya, buat header
  if (data.length <= 1 && (!data[0] || !data[0][1])) {
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      totalParticipants: 0,
      leaderboard: []
    })).setMimeType(ContentService.MimeType.JSON);
  }

  // Baca seluruh baris peserta (baris 2 ke bawah)
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    if (row[1]) { // Nama harus ada
      leaderboard.push({
        rank: Number(row[0]) || i,
        name: String(row[1]),
        className: String(row[2]),
        round1: Number(row[3]) || 0,
        round2: Number(row[4]) || 0,
        totalScore: Number(row[5]) || 0,
        violations: Number(row[6]) || 0,
        time: String(row[7]) || "-"
      });
    }
  }

  // Urutkan nilai tertinggi (descending)
  leaderboard.sort(function(a, b) {
    return Number(b.totalScore) - Number(a.totalScore);
  });

  leaderboard.forEach(function(item, idx) {
    item.rank = idx + 1;
  });

  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    totalParticipants: leaderboard.length,
    leaderboard: leaderboard
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var postData = "";
    
    if (e && e.postData && e.postData.contents) {
      postData = e.postData.contents;
    } else if (e && e.parameter) {
      postData = JSON.stringify(e.parameter);
    }
    
    var body = JSON.parse(postData);
    var name = String(body.name || "").trim().slice(0, 50);
    var className = String(body.className || "").trim().slice(0, 40);
    var round1 = Number(body.round1) || 0;
    var round2 = Number(body.round2) || 0;
    var totalScore = Number(body.totalScore) || 0;
    var violations = Number(body.violations) || 0;
    var time = body.time || Utilities.formatDate(new Date(), "Asia/Jakarta", "HH:mm");

    if (!name || !className) {
      return ContentService.createTextOutput(JSON.stringify({
        error: "Nama dan kelas tidak boleh kosong"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Buat header jika sheet masih kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Rank", 
        "Nama Lengkap Siswa", 
        "Kelas / Asal Sekolah", 
        "Ronde 1 (Maks 100)", 
        "Kesempatan 2 (50%)", 
        "Nilai Akhir", 
        "Pelanggaran", 
        "Waktu Selesai (WIB)"
      ]);
      // Format header tebal
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
    }

    var data = sheet.getDataRange().getValues();
    var foundRow = -1;

    // Cek apakah siswa dengan nama dan kelas yang sama sudah pernah submit
    for (var i = 1; i < data.length; i++) {
      if (data[i][1] && data[i][1].toString().toLowerCase().trim() === name.toLowerCase().trim() &&
          data[i][2] && data[i][2].toString().toLowerCase().trim() === className.toLowerCase().trim()) {
        foundRow = i + 1; // 1-indexed
        break;
      }
    }

    if (foundRow > 0) {
      // Update nilai peserta jika sudah ada
      sheet.getRange(foundRow, 4, 1, 5).setValues([[round1, round2, totalScore, violations, time]]);
    } else {
      // Tambah baris baru
      sheet.appendRow([sheet.getLastRow(), name, className, round1, round2, totalScore, violations, time]);
    }

    // Urutkan sheet berdasarkan Nilai Akhir (Kolom F / index 6) secara descending
    var numRows = sheet.getLastRow();
    if (numRows > 1) {
      var rangeToSort = sheet.getRange(2, 1, numRows - 1, 8);
      rangeToSort.sort({ column: 6, ascending: false });

      // Perbarui nomor peringkat (Kolom A / index 1)
      var sortedValues = sheet.getRange(2, 1, numRows - 1, 1).getValues();
      for (var k = 0; k < sortedValues.length; k++) {
        sortedValues[k][0] = k + 1;
      }
      sheet.getRange(2, 1, numRows - 1, 1).setValues(sortedValues);
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Data ujian peserta berhasil disimpan ke Google Sheets resmi!"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      error: "Gagal menyimpan ke Google Sheets: " + err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
