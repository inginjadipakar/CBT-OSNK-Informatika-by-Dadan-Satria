// Modul Pengelolaan Leaderboard & Sinkronisasi Skor
// 100% Data Peserta Nyata (Tanpa Data Fiktif)

const LeaderboardManager = {
  // Tidak ada data fiktif
  DEFAULT_DATA: [],

  STORAGE_KEY: "osnk_cbt_leaderboard_real_v2",

  // Ambil data leaderboard dari Google Sheets, Serverless /api/leaderboard, atau local storage
  async getLeaderboard() {
    // 1. Coba fetch dari Google Sheets jika diatur (sinkronisasi multi-device paling mudah)
    if (APP_CONFIG.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        const sheetRes = await fetch(APP_CONFIG.GOOGLE_SHEETS_WEBHOOK_URL, { method: "GET" });
        if (sheetRes.ok) {
          const sheetJson = await sheetRes.json();
          if (sheetJson && Array.isArray(sheetJson.leaderboard)) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sheetJson.leaderboard));
            return sheetJson.leaderboard;
          }
        }
      } catch (sheetErr) {
        console.warn("Sinkronisasi Google Sheets gagal, mencoba endpoint serverless:", sheetErr.message);
      }
    }

    // 2. Coba fetch dari API Serverless /api/leaderboard
    try {
      const res = await fetch(APP_CONFIG.API_URL, { method: "GET" });
      if (res.ok) {
        const json = await res.json();
        if (json && Array.isArray(json.leaderboard) && json.leaderboard.length > 0) {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(json.leaderboard));
          return json.leaderboard;
        }
      }
    } catch (e) {
      console.warn("Menggunakan penyimpanan lokal untuk leaderboard:", e.message);
    }

    // 3. Fallback ke localStorage di perangkat ini
    const local = localStorage.getItem(this.STORAGE_KEY);
    if (local) {
      try {
        const parsed = JSON.parse(local);
        if (Array.isArray(parsed)) return parsed;
      } catch (err) {}
    }

    return [];
  },

  // Simpan nilai peserta yang baru selesai ujian
  async submitScore(entry) {
    let savedList = await this.getLeaderboard();

    // 1. POST ke Google Sheets jika URL diisi
    if (APP_CONFIG.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        const sheetRes = await fetch(APP_CONFIG.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry)
        });
        if (sheetRes.ok) {
          try {
            const sheetJson = await sheetRes.json();
            if (sheetJson && Array.isArray(sheetJson.leaderboard)) {
              savedList = sheetJson.leaderboard;
            }
          } catch (e) {}
        }
      } catch (sheetErr) {
        // Fallback kirim no-cors jika browser memblokir preflight
        try {
          fetch(APP_CONFIG.GOOGLE_SHEETS_WEBHOOK_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(entry)
          });
        } catch (e) {}
      }
    }

    // 2. POST ke API Serverless jika tersedia
    try {
      const res = await fetch(APP_CONFIG.API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry)
      });
      if (res.ok) {
        const json = await res.json();
        if (json && Array.isArray(json.leaderboard)) {
          savedList = json.leaderboard;
        }
      }
    } catch (err) {
      console.warn("Gagal POST ke API, menyimpan secara lokal:", err.message);
    }

    // 3. Pastikan data peserta masuk ke list (update jika sudah ada atau push jika baru)
    const existingIndex = savedList.findIndex(item => 
      item.name && item.name.toLowerCase().trim() === entry.name.toLowerCase().trim() &&
      item.className && item.className.toLowerCase().trim() === entry.className.toLowerCase().trim()
    );

    const newRecord = {
      name: entry.name,
      className: entry.className,
      round1: entry.round1,
      round2: entry.round2,
      totalScore: entry.totalScore,
      violations: entry.violations || 0,
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
    };

    if (existingIndex >= 0) {
      savedList[existingIndex] = newRecord;
    } else {
      savedList.push(newRecord);
    }

    // Urutkan nilai tertinggi (descending)
    savedList.sort((a, b) => b.totalScore - a.totalScore);
    const ranked = savedList.map((item, idx) => ({ ...item, rank: idx + 1 }));

    // Simpan ke localStorage
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ranked));

    return ranked;
  },

  // Hitung ringkasan statistik dari daftar peserta
  getStats(list) {
    if (!list || list.length === 0) {
      return { total: 0, topScore: 0, avgScore: 0 };
    }
    const total = list.length;
    const scores = list.map(item => Number(item.totalScore) || 0);
    const topScore = Math.max(...scores);
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    const avgScore = total > 0 ? (sum / total) : 0;
    return {
      total,
      topScore: Math.round(topScore * 10) / 10,
      avgScore: Math.round(avgScore * 10) / 10
    };
  },

  // Render tabel leaderboard ke DOM
  renderTable(list, currentUserName, tbodyId = "leaderboard-tbody") {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    tbody.innerHTML = "";

    if (!list || list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center" style="padding: 3rem 1rem; color: var(--text-muted);">
            <div style="font-size: 2rem; margin-bottom: 8px;">📊</div>
            <strong style="color: white; font-size: 1rem;">Belum ada data peserta yang terdaftar</strong>
            <p style="font-size: 0.85rem; margin-top: 4px;">Data peringkat akan muncul secara otomatis setelah peserta menyelesaikan ujian.</p>
          </td>
        </tr>
      `;
      return;
    }

    list.forEach(item => {
      const isCurrent = currentUserName && item.name.toLowerCase().trim() === currentUserName.toLowerCase().trim();
      const tr = document.createElement("tr");
      if (isCurrent) tr.className = "current-user-row";

      // Trophy badge untuk top 3
      let rankBadge = `<span class="rank-num">${item.rank}</span>`;
      if (item.rank === 1) rankBadge = `<span class="trophy gold">🥇 1</span>`;
      else if (item.rank === 2) rankBadge = `<span class="trophy silver">🥈 2</span>`;
      else if (item.rank === 3) rankBadge = `<span class="trophy bronze">🥉 3</span>`;

      tr.innerHTML = `
        <td>${rankBadge}</td>
        <td>
          <strong>${item.name}</strong>
          ${isCurrent ? '<span class="badge-you">Anda</span>' : ''}
        </td>
        <td><span class="badge-class">${item.className}</span></td>
        <td class="text-center">${Number(item.round1).toFixed(1)}</td>
        <td class="text-center">${Number(item.round2).toFixed(1)}</td>
        <td class="text-center font-bold highlight-score">${Number(item.totalScore).toFixed(1)}</td>
        <td class="text-center text-muted">${item.time || "-"}</td>
      `;
      tbody.appendChild(tr);
    });
  }
};
