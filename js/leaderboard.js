// Modul Leaderboard — Firebase Firestore Backend
// Fitur: Global multi-device, Realtime update via onSnapshot, Offline persistence

const LeaderboardManager = {

  COLLECTION: "leaderboard",        // Nama koleksi Firestore
  STORAGE_KEY: "osnk_cbt_lb_cache", // Cache lokal fallback
  _unsubscribe: null,                // Handle untuk berhenti listen realtime

  // ─────────────────────────────────────────────────────────
  // 1. SUBMIT SKOR KE FIRESTORE
  //    - Gunakan nama+kelas sebagai document ID unik
  //    - Update jika sudah ada (tidak duplikat), tambah jika baru
  // ─────────────────────────────────────────────────────────
  async submitScore(entry) {
    const docId = this._makeDocId(entry.name, entry.className);
    const record = {
      name: entry.name,
      className: entry.className,
      round1: Number(entry.round1) || 0,
      round2: Number(entry.round2) || 0,
      totalScore: Number(entry.totalScore) || 0,
      violations: Number(entry.violations) || 0,
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
      // setMerge: update field jika doc sudah ada, buat baru jika belum
      await window.db.collection(this.COLLECTION).doc(docId).set(record, { merge: true });
      console.log("✅ Skor berhasil disimpan ke Firebase:", entry.name, entry.totalScore);
    } catch (err) {
      console.warn("⚠️ Gagal simpan ke Firebase, pakai cache lokal:", err.message);
      // Fallback: simpan ke localStorage
      this._saveToCache(record);
    }

    // Kembalikan snapshot terbaru dari Firestore
    return await this.getLeaderboard();
  },

  // ─────────────────────────────────────────────────────────
  // 2. AMBIL DATA LEADERBOARD (one-time fetch)
  // ─────────────────────────────────────────────────────────
  async getLeaderboard() {
    try {
      const snap = await window.db
        .collection(this.COLLECTION)
        .orderBy("totalScore", "desc")
        .get();

      const list = snap.docs.map((doc, idx) => ({
        ...doc.data(),
        rank: idx + 1
      }));

      // Update cache lokal
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
      return list;
    } catch (err) {
      console.warn("⚠️ Gagal ambil dari Firebase, pakai cache lokal:", err.message);
      return this._loadFromCache();
    }
  },

  // ─────────────────────────────────────────────────────────
  // 3. REALTIME LISTENER (onSnapshot)
  //    callback(rankedList) dipanggil setiap ada perubahan data
  // ─────────────────────────────────────────────────────────
  listenLeaderboard(callback) {
    // Hentikan listener lama jika ada
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }

    try {
      this._unsubscribe = window.db
        .collection(this.COLLECTION)
        .orderBy("totalScore", "desc")
        .onSnapshot(snap => {
          const list = snap.docs.map((doc, idx) => ({
            ...doc.data(),
            rank: idx + 1
          }));
          // Update cache lokal
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
          if (callback) callback(list);
        }, err => {
          console.warn("⚠️ Realtime listener error:", err.message);
          // Coba fallback ke cache
          const cached = this._loadFromCache();
          if (callback) callback(cached);
        });

      console.log("🔴 Realtime leaderboard listener aktif");
    } catch (err) {
      console.warn("⚠️ Gagal start listener:", err.message);
    }
  },

  // Hentikan realtime listener
  stopListening() {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
      console.log("⏹️ Realtime listener dihentikan");
    }
  },

  // ─────────────────────────────────────────────────────────
  // 4. HELPER — Cache localStorage
  // ─────────────────────────────────────────────────────────
  _makeDocId(name, className) {
    // Buat document ID dari nama+kelas (lowercase, replace spasi dgn _)
    const safe = (str) => (str || "").toLowerCase().trim().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
    return `${safe(name)}__${safe(className)}`;
  },

  _saveToCache(record) {
    try {
      let list = this._loadFromCache();
      const idx = list.findIndex(i =>
        i.name && i.name.toLowerCase().trim() === (record.name || "").toLowerCase().trim() &&
        i.className && i.className.toLowerCase().trim() === (record.className || "").toLowerCase().trim()
      );
      if (idx >= 0) list[idx] = record;
      else list.push(record);
      list.sort((a, b) => b.totalScore - a.totalScore);
      const ranked = list.map((item, i) => ({ ...item, rank: i + 1 }));
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ranked));
    } catch (e) {}
  },

  _loadFromCache() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {}
    return [];
  },

  // ─────────────────────────────────────────────────────────
  // 5. STATISTIK
  // ─────────────────────────────────────────────────────────
  getStats(list) {
    if (!list || list.length === 0) {
      return { total: 0, topScore: 0, avgScore: 0 };
    }
    const scores = list.map(item => Number(item.totalScore) || 0);
    const topScore = Math.max(...scores);
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    return {
      total: list.length,
      topScore: Math.round(topScore * 10) / 10,
      avgScore: Math.round(avgScore * 10) / 10
    };
  },

  // ─────────────────────────────────────────────────────────
  // 6. RENDER TABEL LEADERBOARD
  // ─────────────────────────────────────────────────────────
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
      const isCurrent = currentUserName &&
        item.name && item.name.toLowerCase().trim() === currentUserName.toLowerCase().trim();
      const tr = document.createElement("tr");
      if (isCurrent) tr.className = "current-user-row";

      let rankBadge = `<span class="rank-num">${item.rank}</span>`;
      if (item.rank === 1) rankBadge = `<span class="trophy gold">🥇 1</span>`;
      else if (item.rank === 2) rankBadge = `<span class="trophy silver">🥈 2</span>`;
      else if (item.rank === 3) rankBadge = `<span class="trophy bronze">🥉 3</span>`;

      tr.innerHTML = `
        <td>${rankBadge}</td>
        <td>
          <strong>${item.name || "-"}</strong>
          ${isCurrent ? '<span class="badge-you">Anda</span>' : ''}
        </td>
        <td><span class="badge-class">${item.className || "-"}</span></td>
        <td class="text-center">${Number(item.round1 || 0).toFixed(1)}</td>
        <td class="text-center">${Number(item.round2 || 0).toFixed(1)}</td>
        <td class="text-center font-bold highlight-score">${Number(item.totalScore || 0).toFixed(1)}</td>
        <td class="text-center text-muted">${item.time || "-"}</td>
      `;
      tbody.appendChild(tr);
    });
  },

  // ─────────────────────────────────────────────────────────
  // 7. UPDATE BADGE PERINGKAT DI NAVBAR (tanpa buka modal)
  // ─────────────────────────────────────────────────────────
  async updateHomeLeaderboardBadge() {
    try {
      const list = await this.getLeaderboard();
      const stats = this.getStats(list);
      const badge = document.getElementById("lb-participant-count");
      if (badge) badge.innerText = `${stats.total} Peserta`;
    } catch (e) {}
  }
};
