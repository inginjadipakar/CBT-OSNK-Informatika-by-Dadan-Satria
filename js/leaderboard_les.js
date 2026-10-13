// Modul Leaderboard Peserta Les — Firebase Firestore Backend
// Koleksi: "leaderboard_les"
// Fitur: Realtime onSnapshot, Ranking berdasarkan Total Benar (target 60) & Sesi Tuntas terendah, LocalStorage fallback

const LeaderboardLesManager = {
  COLLECTION: "leaderboard_les",
  STORAGE_KEY: "les_cbt_lb_cache",
  _unsubscribe: null,

  // Helper untuk ID dokumen unik: nama + kelas dibersihkan
  _makeDocId(name, className) {
    const raw = `${name}_${className}`.toLowerCase();
    return raw.replace(/[^a-z0-9_]/g, "_").slice(0, 80);
  },

  // 1. Submit Skor Sesi ke Firestore
  async submitScore(entry) {
    const docId = this._makeDocId(entry.name, entry.className);
    const correct = Number(entry.correctCount) || 0;
    const totalQ = Number(entry.totalQuestions) || 60;
    const sessionNum = Number(entry.sessionNumber) || 1;
    const isCompleted = correct >= totalQ;

    const record = {
      name: entry.name.trim(),
      className: entry.className.trim(),
      correctCount: correct,
      totalQuestions: totalQ,
      wrongCount: Math.max(0, totalQ - correct),
      sessionNumber: sessionNum,
      isCompleted: isCompleted,
      accuracy: Math.round((correct / totalQ) * 100),
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
      if (window.db) {
        await window.db.collection(this.COLLECTION).doc(docId).set(record, { merge: true });
        console.log("✅ Skor Les berhasil disimpan ke Firebase:", entry.name, `${correct}/${totalQ}`, `Sesi ${sessionNum}`);
      } else {
        throw new Error("window.db Firestore tidak tersedia");
      }
    } catch (err) {
      console.warn("⚠️ Gagal simpan ke Firebase Les, simpan ke cache:", err.message);
      this._saveToCache(record);
    }

    return await this.getLeaderboard();
  },

  // 2. Fetch Sekali Leaderboard
  async getLeaderboard() {
    try {
      if (!window.db) throw new Error("Firestore offline");
      const snap = await window.db
        .collection(this.COLLECTION)
        .orderBy("correctCount", "desc")
        .orderBy("sessionNumber", "asc")
        .get();

      const list = snap.docs.map((doc, idx) => ({
        ...doc.data(),
        rank: idx + 1
      }));

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
      return list;
    } catch (err) {
      console.warn("⚠️ Ambil dari cache lokal les:", err.message);
      return this._loadFromCache();
    }
  },

  // 3. Realtime Listener
  listenLeaderboard(callback) {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }

    try {
      if (!window.db) {
        if (callback) callback(this._loadFromCache());
        return;
      }

      this._unsubscribe = window.db
        .collection(this.COLLECTION)
        .orderBy("correctCount", "desc")
        .orderBy("sessionNumber", "asc")
        .onSnapshot(
          snap => {
            const list = snap.docs.map((doc, idx) => ({
              ...doc.data(),
              rank: idx + 1
            }));
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
            if (callback) callback(list);
          },
          err => {
            console.warn("⚠️ Realtime listener error:", err.message);
            const cached = this._loadFromCache();
            if (callback) callback(cached);
          }
        );

      console.log("🔴 Realtime leaderboard les aktif");
    } catch (err) {
      console.warn("⚠️ Gagal start listener les:", err.message);
      if (callback) callback(this._loadFromCache());
    }
  },

  // 4. Render Tabel Leaderboard
  renderTable(list, currentStudentName, targetTbodyId) {
    const tbody = document.getElementById(targetTbodyId);
    if (!tbody) return;

    if (!list || list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">
            Belum ada data peserta les. Jadilah yang pertama menuntaskan 60 soal!
          </td>
        </tr>`;
      return;
    }

    const rows = list.map((item, idx) => {
      const isCurrent = currentStudentName && item.name.toLowerCase() === currentStudentName.toLowerCase();
      const rowClass = isCurrent ? "lb-row-current" : "";

      let medal = `#${idx + 1}`;
      if (idx === 0) medal = "🥇";
      else if (idx === 1) medal = "🥈";
      else if (idx === 2) medal = "🥉";

      const badgeStatus = item.isCompleted
        ? `<span class="badge-tag" style="background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4);">Tuntas Sempurna 🌟</span>`
        : `<span class="badge-tag" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4);">Remedial (${item.wrongCount || 0} Soal)</span>`;

      return `
        <tr class="${rowClass}">
          <td style="text-align: center; font-weight: 700; font-size: 1rem;">${medal}</td>
          <td>
            <div style="font-weight: 600; color: ${isCurrent ? 'var(--accent)' : 'var(--text-main)'};">
              ${this._escapeHtml(item.name)}
              ${isCurrent ? '<span style="font-size:0.75rem; color:var(--accent); margin-left:6px;">(Anda)</span>' : ''}
            </div>
            <div style="font-size: 0.78rem; color: var(--text-dim);">${this._escapeHtml(item.className || "-")}</div>
          </td>
          <td style="text-align: center; font-weight: 700; color: #10b981;">
            ${item.correctCount || 0} / ${item.totalQuestions || 60}
          </td>
          <td style="text-align: center;">
            <span style="font-weight: 600; color: var(--primary);">Sesi ${item.sessionNumber || 1}</span>
          </td>
          <td style="text-align: center;">
            ${badgeStatus}
          </td>
          <td style="text-align: center; font-size: 0.78rem; color: var(--text-dim);">
            ${item.time || "-"}
          </td>
        </tr>
      `;
    }).join("");

    tbody.innerHTML = rows;
  },

  // Helper Stats
  getStats(list) {
    if (!list || list.length === 0) {
      return { total: 0, completedCount: 0, topScore: 0, avgScore: 0 };
    }
    const completedCount = list.filter(item => item.isCompleted).length;
    const topScore = Math.max(...list.map(i => i.correctCount || 0));
    const avgScore = list.reduce((acc, i) => acc + (i.correctCount || 0), 0) / list.length;

    return {
      total: list.length,
      completedCount,
      topScore,
      avgScore
    };
  },

  _saveToCache(record) {
    const list = this._loadFromCache();
    const existingIdx = list.findIndex(
      i => i.name.toLowerCase() === record.name.toLowerCase() && i.className.toLowerCase() === record.className.toLowerCase()
    );
    if (existingIdx >= 0) {
      list[existingIdx] = { ...list[existingIdx], ...record };
    } else {
      list.push(record);
    }
    list.sort((a, b) => (b.correctCount || 0) - (a.correctCount || 0) || (a.sessionNumber || 1) - (b.sessionNumber || 1));
    list.forEach((item, idx) => (item.rank = idx + 1));
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
  },

  _loadFromCache() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  _escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};
