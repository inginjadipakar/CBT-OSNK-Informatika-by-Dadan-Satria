// Vercel Serverless Function: /api/leaderboard
// Tidak ada data fiktif. Hanya menyimpan data peserta nyata yang telah submit.

let memoryLeaderboard = [];

module.exports = async (req, res) => {
  // Set CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    try {
      const { name, className, round1, round2, totalScore, violations } = req.body || {};

      if (!name || !className || totalScore === undefined) {
        return res.status(400).json({ error: "Data peserta tidak lengkap." });
      }

      const cleanName = String(name).trim().slice(0, 50);
      const cleanClass = String(className).trim().slice(0, 30);
      const scoreNum = Math.min(100, Math.round(Number(totalScore) * 10) / 10);

      const existingIndex = memoryLeaderboard.findIndex(
        item => item.name.toLowerCase() === cleanName.toLowerCase() && item.className.toLowerCase() === cleanClass.toLowerCase()
      );

      const entry = {
        name: cleanName,
        className: cleanClass,
        round1: Number(round1) || 0,
        round2: Number(round2) || 0,
        totalScore: scoreNum,
        violations: Number(violations) || 0,
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
      };

      if (existingIndex >= 0) {
        memoryLeaderboard[existingIndex] = entry;
      } else {
        memoryLeaderboard.push(entry);
      }

      // Urutkan nilai tertinggi (descending)
      memoryLeaderboard.sort((a, b) => b.totalScore - a.totalScore);
      memoryLeaderboard = memoryLeaderboard.map((item, idx) => ({ ...item, rank: idx + 1 }));

      return res.status(201).json({
        success: true,
        message: "Skor berhasil dicatat di leaderboard resmi!",
        data: entry,
        leaderboard: memoryLeaderboard
      });
    } catch (err) {
      return res.status(500).json({ error: "Gagal memproses data ujian: " + err.message });
    }
  }

  // GET Request: Ambil daftar leaderboard
  memoryLeaderboard.sort((a, b) => b.totalScore - a.totalScore);
  const ranked = memoryLeaderboard.map((item, index) => ({
    ...item,
    rank: index + 1
  }));

  return res.status(200).json({
    success: true,
    totalParticipants: ranked.length,
    leaderboard: ranked
  });
};
