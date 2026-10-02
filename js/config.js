// Konfigurasi Global Sistem Ujian OSNK Informatika C++
const APP_CONFIG = {
  // Informasi Aplikasi
  APP_TITLE: "OSNK CBT INFORMATIKA",
  SUBTITLE: "Simulasi Olimpiade Sains Nasional Tingkat Kota/Kabupaten (C++)",
  
  // Pengaturan Waktu
  READING_TIME_SECONDS: 15 * 60, // 15 menit waktu membaca materi (900 detik)
  QUESTION_TIME_SECONDS: 3 * 60,  // 3 menit waktu per butir soal (180 detik)
  
  // Pengaturan Bobot Nilai & Soal
  TOTAL_QUESTIONS: 50,
  ROUND_1_POINT: 2.0,  // 50 soal x 2.0 poin = 100 poin maksimal di Ronde 1
  ROUND_2_POINT: 1.0,  // Kesempatan Kedua: 50% dari bobot normal (1.0 poin per soal benar)
  MAX_SCORE: 100.0,
  
  // Integritas & Anti-Cheat
  MAX_VIOLATIONS: 3,   // Maksimal pelanggaran (tab-switch/blur) sebelum auto-submit
  ENABLE_FULLSCREEN: true,
  ENABLE_BLUR_DETECTION: true,
  ENABLE_CLIPBOARD_BLOCK: true,
  ENABLE_SHORTCUT_BLOCK: true,

  // Integrasi Backend
  // Jika di-deploy di Vercel, akan otomatis memanggil endpoint internal /api/leaderboard
  // Jika ingin terhubung ke Google Sheets, isi GOOGLE_SHEETS_WEBHOOK_URL
  API_URL: window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1")
    ? "/api/leaderboard" 
    : "/api/leaderboard",
  GOOGLE_SHEETS_WEBHOOK_URL: "" // Opsional: URL Google Apps Script Web App
};
