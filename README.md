# CBT Latihan OSNK Informatika (C++)
Aplikasi Computer-Based Test (CBT) berbasis web statis modern untuk latihan simulasi OSNK (Olimpiade Sains Nasional Tingkat Kota/Kabupaten) bidang Informatika (Pemrograman C++).

Dirancang khusus untuk siap di-deploy secara instan ke **Vercel** tanpa konfigurasi server/database yang rumit.

---

## 🌟 Fitur Utama & Alur Sistem

1. **Input Identitas Sederhana (Zero-Auth):**
   * Peserta hanya memasukkan **Nama Lengkap** dan **Kelas / Asal Sekolah** di awal tanpa login akun/password.
2. **Sesi Membaca Materi C++ (15 Menit):**
   * Disertai timer countdown 15:00.
   * Merangkum 10 topik esensial C++ OSNK (Fast I/O, Integer Overflow, Bitwise, Nested Loops, Array, Rekursi, Kompleksitas).
   * **Penguncian Permanen:** Setelah 15 menit habis atau peserta menekan tombol mulai, materi langsung dikunci dan dihapus dari DOM.
3. **Ujian Utama (50 Soal OSNK):**
   * 50 soal pilihan ganda standar OSNK Informatika C++.
   * **Batas Waktu per Soal:** Setiap soal memiliki timer countdown **3 menit** (180 detik).
   * Bobot nilai Ronde 1: 2.0 poin per butir benar (Maksimal 100).
4. **Mekanisme Kesempatan Kedua (Ronde Remedial):**
   * Soal-soal yang dijawab salah/kosong di Ronde 1 secara otomatis dikumpulkan.
   * Peserta mendapat kesempatan kedua untuk memperbaiki soal-soal salah tersebut dengan bobot **50% (1.0 poin per soal benar)**.
5. **Proteksi Integritas Akademik (Anti-Cheat):**
   * Blokir klik kanan, copy, cut, paste.
   * Blokir shortcut keyboard inspeksi (F12, Ctrl+U, Ctrl+Shift+I).
   * Pelacak perpindahan tab (`visibilitychange` & `blur`) dengan peringatan pop-up maksimal 3 kali sebelum auto-submit.
   * Dukungan mode Fullscreen otomatis.
6. **Leaderboard & Transparansi Ranking:**
   * Peserta langsung melihat Skor Ronde 1, Poin Kesempatan Kedua, Nilai Akhir (Skala 100), dan Posisi Peringkat.
   * Dilengkapi fitur pencarian nama/kelas pada tabel peringkat.

---

## 🚀 Panduan Deploy ke Vercel

### Metode 1: Menggunakan Vercel CLI (Paling Cepat)
1. Buka terminal di folder proyek ini (`amanatulummah`).
2. Jalankan perintah:
   ```bash
   npx vercel
   ```
3. Ikuti instruksi di terminal (tekan `Enter` untuk default).
4. Web langsung live dan memiliki URL publik Vercel!

### Metode 2: Melalui Dashboard GitHub + Vercel
1. Buat repository baru di GitHub Anda (misal `cbt-osnk-informatika`).
2. Push folder ini ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi sistem CBT OSNK Informatika"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com), klik **"Add New Project"** lalu pilih repositori tersebut.
4. Klik **Deploy** (Vercel akan otomatis mengenali file `vercel.json` dan folder `api/`).

---

## 💻 Menjalankan di Lokal (Testing)

Anda bisa langsung membuka file `index.html` di browser, atau menggunakan server lokal:
```bash
npx serve .
# Buka http://localhost:3000 di browser
```

---

## 📚 Dokumen Studi Literatur
Landasan ilmiah resmi (jurnal, teori kognitif, evaluasi parsial 50%, standar W3C) dapat dibaca selengkapnya pada file [`STUDI_LITERATUR.md`](STUDI_LITERATUR.md).
