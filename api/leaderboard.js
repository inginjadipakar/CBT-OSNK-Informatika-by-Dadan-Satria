// Vercel Serverless Function: /api/leaderboard
// Mendukung penyimpanan persisten global multi-device via:
// 1. Vercel KV / Upstash Redis REST API (jika KV_REST_API_URL atau UPSTASH_REDIS_REST_URL disetel)
// 2. Google Sheets Web App Proxy (jika GOOGLE_SHEET_URL disetel)
// 3. In-memory fallback (lokal dev)

let memoryLeaderboard = [];

const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || "";

// Helper untuk membaca dari Upstash Redis / Vercel KV
async function fetchFromKV() {
  if (!KV_URL || !KV_TOKEN) return null;
  try {
    const res = await fetch(`${KV_URL}/get/osnk_cbt_leaderboard`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` }
    });
    if (res.ok) {
      const json = await res.json();
      if (json && json.result) {
        const parsed = typeof json.result === "string" ? JSON.parse(json.result) : json.result;
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch (err) {
    console.warn("Gagal membaca dari Vercel KV:", err.message);
  }
  return null;
}

// Helper untuk menyimpan ke Upstash Redis / Vercel KV
async function saveToKV(list) {
  if (!KV_URL || !KV_TOKEN) return false;
  try {
    const res = await fetch(`${KV_URL}/set/osnk_cbt_leaderboard`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(JSON.stringify(list))
    });
    return res.ok;
  } catch (err) {
    console.warn("Gagal menyimpan ke Vercel KV:", err.message);
    return false;
  }
}

// Helper untuk membaca dari Google Sheets
async function fetchFromGoogleSheets() {
  if (!GOOGLE_SHEET_URL) return null;
  try {
    const res = await fetch(GOOGLE_SHEET_URL, { method: "GET" });
    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.leaderboard)) {
        return json.leaderboard;
      }
    }
  } catch (err) {
    console.warn("Gagal fetch dari Google Sheets:", err.message);
  }
  return null;
}

module.exports = async (req, res) => {
  // Set CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Ambil list leaderboard saat ini dari persistent storage
  let currentList = await fetchFromKV();
  if (!currentList) {
    currentList = await fetchFromGoogleSheets();
  }
  if (!currentList) {
    currentList = memoryLeaderboard;
  }

  if (req.method === "POST") {
    try {
      const { name, className, round1, round2, totalScore, violations } = req.body || {};

      if (!name || !className || totalScore === undefined) {
        return res.status(400).json({ error: "Data peserta tidak lengkap." });
      }

      const cleanName = String(name).trim().slice(0, 50);
      const cleanClass = String(className).trim().slice(0, 40);
      const scoreNum = Math.min(100, Math.round(Number(totalScore) * 10) / 10);

      const existingIndex = currentList.findIndex(
        item => item.name.toLowerCase().trim() === cleanName.toLowerCase().trim() && 
                item.className.toLowerCase().trim() === cleanClass.toLowerCase().trim()
      );

      const entry = {
        name: cleanName,
        className: cleanClass,
        round1: Number(round1) || 0,
        round2: Number(round2) || 0,
        totalScore: scoreNum,
        violations: Number(violations) || 0,
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" })
      };

      if (existingIndex >= 0) {
        currentList[existingIndex] = entry;
      } else {
        currentList.push(entry);
      }

      // Urutkan nilai tertinggi (descending)
      currentList.sort((a, b) => b.totalScore - a.totalScore);
      currentList = currentList.map((item, idx) => ({ ...item, rank: idx + 1 }));

      // Simpan ke Persistent Storage
      await saveToKV(currentList);
      memoryLeaderboard = currentList;

      // Jika ada webhook Google Sheet, teruskan juga secara async
      if (GOOGLE_SHEET_URL) {
        fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry)
        }).catch(err => console.warn("Google Sheet sync error:", err.message));
      }

      return res.status(201).json({
        success: true,
        message: "Skor berhasil dicatat di leaderboard resmi!",
        data: entry,
        leaderboard: currentList
      });
    } catch (err) {
      return res.status(500).json({ error: "Gagal memproses data ujian: " + err.message });
    }
  }

  // GET Request: Ambil daftar leaderboard
  currentList.sort((a, b) => b.totalScore - a.totalScore);
  const ranked = currentList.map((item, index) => ({
    ...item,
    rank: index + 1
  }));

  return res.status(200).json({
    success: true,
    totalParticipants: ranked.length,
    leaderboard: ranked
  });
};
