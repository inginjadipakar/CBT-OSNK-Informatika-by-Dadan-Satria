// Mesin CBT Khusus Peserta Les — Bab 1: Eksponen & Logaritma Fase E
// Fitur Unik:
// 1. Tiap soal memiliki Langkah Pengerjaan (Guided Steps) dengan isian angka/hasil.
// 2. Opsi Pilihan Ganda (A-E) WAJIB TERKUNCI sampai seluruh langkah terisi.
// 3. Sesi Remedial Berkelanjutan (Iterative Mastery): Sesi terus berlanjut
//    sampai siswa benar semua (60/60 tuntas)!
// 4. Tiap sesi selesai otomatis submit & menampilkan Ranking Leaderboard Realtime.

class ExamEngineLes {
  constructor() {
    this.student = { name: "", className: "" };
    this.sessionNumber = 1;
    this.allQuestions = LES_QUESTIONS || [];
    this.activeQuestionIds = [];
    this.currentActiveIndex = 0;

    // Data input siswa
    // stepInputs: { [qId]: { [blankGlobalIndex]: value } }
    this.stepInputs = {};
    // selectedOptions: { [qId]: optionIndex (0-4) }
    this.selectedOptions = {};
    // doubtStatus: { [qId]: boolean }
    this.doubtStatus = {};

    // Tracking remedial
    this.masterCompletedQIds = new Set(); // Soal yang sudah pernah dijawab benar
    this.masterWrongQIds = new Set();     // Soal yang masih salah
    this.sessionHistory = [];

    // Timer
    this.startTime = null;
    this.timerInterval = null;
    this.secondsElapsed = 0;

    this.STORAGE_KEY = "LES_CBT_STATE";
  }

  init() {
    this.bindEvents();
    this.checkSavedState();
  }

  // --- STATE STORAGE ---
  saveState() {
    try {
      const state = {
        student: this.student,
        sessionNumber: this.sessionNumber,
        activeQuestionIds: this.activeQuestionIds,
        currentActiveIndex: this.currentActiveIndex,
        stepInputs: this.stepInputs,
        selectedOptions: this.selectedOptions,
        doubtStatus: this.doubtStatus,
        masterCompletedQIds: Array.from(this.masterCompletedQIds),
        masterWrongQIds: Array.from(this.masterWrongQIds),
        sessionHistory: this.sessionHistory,
        secondsElapsed: this.secondsElapsed
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Gagal menyimpan state les:", e);
    }
  }

  loadState() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  clearState() {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  checkSavedState() {
    const saved = this.loadState();
    if (saved && saved.student && saved.student.name && saved.activeQuestionIds && saved.activeQuestionIds.length > 0) {
      this.student = saved.student;
      this.sessionNumber = saved.sessionNumber || 1;
      this.activeQuestionIds = saved.activeQuestionIds;
      this.currentActiveIndex = Math.min(saved.currentActiveIndex || 0, this.activeQuestionIds.length - 1);
      this.stepInputs = saved.stepInputs || {};
      this.selectedOptions = saved.selectedOptions || {};
      this.doubtStatus = saved.doubtStatus || {};
      this.masterCompletedQIds = new Set(saved.masterCompletedQIds || []);
      this.masterWrongQIds = new Set(saved.masterWrongQIds || []);
      this.sessionHistory = saved.sessionHistory || [];
      this.secondsElapsed = saved.secondsElapsed || 0;

      // Update UI Header
      this.updateProfileBadge();
      this.showScreen("screen-exam");
      this.renderCurrentQuestion();
      this.startTimer();
      this.showToast(`Melanjutkan Sesi ${this.sessionNumber}: ${this.student.name}`, "info");
    }
  }

  // --- BIND EVENT LISTENERS ---
  bindEvents() {
    // Tombol Mulai di Layar Registrasi
    const btnStart = document.getElementById("btn-start-les");
    if (btnStart) {
      btnStart.addEventListener("click", () => this.handleStartRegistration());
    }

    // Navigasi Ujian
    const btnPrev = document.getElementById("btn-prev-q");
    if (btnPrev) {
      btnPrev.addEventListener("click", () => this.navigateQuestion(-1));
    }

    const btnNext = document.getElementById("btn-next-q");
    if (btnNext) {
      btnNext.addEventListener("click", () => this.navigateQuestion(1));
    }

    const btnDoubt = document.getElementById("btn-doubt-q");
    if (btnDoubt) {
      btnDoubt.addEventListener("click", () => this.toggleDoubt());
    }

    const btnFinish = document.getElementById("btn-finish-session");
    if (btnFinish) {
      btnFinish.addEventListener("click", () => this.promptFinishSession());
    }

    // Modal Leaderboard Nav
    const btnNavLB = document.getElementById("btn-nav-leaderboard");
    if (btnNavLB) {
      btnNavLB.addEventListener("click", () => this.openLeaderboardModal());
    }

    const btnCloseLB = document.getElementById("btn-close-leaderboard");
    if (btnCloseLB) {
      btnCloseLB.addEventListener("click", () => this.closeLeaderboardModal());
    }

    // Tombol di Layar Hasil: Lanjut Remedial
    const btnStartRemedial = document.getElementById("btn-start-remedial");
    if (btnStartRemedial) {
      btnStartRemedial.addEventListener("click", () => this.startNextRemedialSession());
    }

    // Tombol di Layar Hasil: Lihat Leaderboard
    const btnResultLB = document.getElementById("btn-result-leaderboard");
    if (btnResultLB) {
      btnResultLB.addEventListener("click", () => this.openLeaderboardModal());
    }

    // Tombol Selesai Ujian Baru / Reset
    const btnRestart = document.getElementById("btn-restart-exam");
    if (btnRestart) {
      btnRestart.addEventListener("click", () => {
        if (confirm("Mulai sesi baru dari awal? Data sesi saat ini akan diarsipkan.")) {
          this.clearState();
          window.location.reload();
        }
      });
    }

    // Close modal saat klik backdrop
    const modalLB = document.getElementById("leaderboard-modal");
    if (modalLB) {
      modalLB.addEventListener("click", (e) => {
        if (e.target === modalLB) this.closeLeaderboardModal();
      });
    }
  }

  // --- REGISTRASI PESERTA ---
  handleStartRegistration() {
    const inputName = document.getElementById("input-name");
    const inputClass = document.getElementById("input-class");

    const name = inputName ? inputName.value.trim() : "";
    const className = inputClass ? inputClass.value.trim() : "";

    if (!name || !className) {
      this.showToast("Mohon lengkapi Nama dan Kelas/Kelompok Les!", "warning");
      return;
    }

    this.student = { name, className };
    this.sessionNumber = 1;
    this.masterCompletedQIds.clear();
    this.masterWrongQIds.clear();
    this.stepInputs = {};
    this.selectedOptions = {};
    this.doubtStatus = {};
    this.sessionHistory = [];
    this.secondsElapsed = 0;

    // Sesi 1: Semua 60 soal
    this.activeQuestionIds = this.allQuestions.map(q => q.id);
    this.currentActiveIndex = 0;

    this.updateProfileBadge();
    this.saveState();

    this.showScreen("screen-exam");
    this.renderCurrentQuestion();
    this.startTimer();

    this.showToast(`Selamat datang ${name}! Sesi 1 (60 Soal) dimulai.`, "success");
  }

  updateProfileBadge() {
    const badge = document.getElementById("user-profile-badge");
    const nameEl = document.getElementById("header-user-name");
    const classEl = document.getElementById("header-user-class");
    const avatarEl = document.getElementById("header-avatar-initial");

    if (badge && nameEl && classEl) {
      badge.classList.remove("hidden");
      nameEl.innerText = this.student.name;
      classEl.innerText = this.student.className;
      if (avatarEl) avatarEl.innerText = this.student.name.charAt(0).toUpperCase();
    }
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    const timerEl = document.getElementById("exam-timer-text");

    const updateDisplay = () => {
      this.secondsElapsed++;
      const m = Math.floor(this.secondsElapsed / 60).toString().padStart(2, "0");
      const s = (this.secondsElapsed % 60).toString().padStart(2, "0");
      if (timerEl) timerEl.innerText = `${m}:${s}`;
    };

    this.timerInterval = setInterval(() => {
      updateDisplay();
      if (this.secondsElapsed % 10 === 0) this.saveState();
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  // --- RENDER SOAL ---
  renderCurrentQuestion() {
    if (!this.activeQuestionIds || this.activeQuestionIds.length === 0) return;

    const qId = this.activeQuestionIds[this.currentActiveIndex];
    const qData = this.allQuestions.find(q => q.id === qId);
    if (!qData) return;

    // 1. Header Info Soal
    const qNumEl = document.getElementById("current-q-num");
    const totalQEl = document.getElementById("total-q-num");
    const catBadge = document.getElementById("q-category-badge");
    const sessionIndicator = document.getElementById("session-indicator-badge");

    if (qNumEl) qNumEl.innerText = this.currentActiveIndex + 1;
    if (totalQEl) totalQEl.innerText = this.activeQuestionIds.length;
    if (catBadge) catBadge.innerText = qData.category;

    if (sessionIndicator) {
      if (this.sessionNumber === 1) {
        sessionIndicator.innerHTML = `🌟 <strong>Sesi Utama</strong> (60 Soal)`;
      } else {
        sessionIndicator.innerHTML = `🔁 <strong>Sesi Remedial ${this.sessionNumber}</strong> (${this.activeQuestionIds.length} Soal)`;
      }
    }

    // 2. Pertanyaan
    const qTextEl = document.getElementById("q-text-content");
    if (qTextEl) {
      qTextEl.innerHTML = `
        <div style="font-size:0.85rem; color:var(--text-dim); margin-bottom:4px;">
          Nomor Asli Modul: <strong>Soal ${qData.number}</strong>
        </div>
        <div>${qData.question}</div>
      `;
    }

    // 3. Render Guided Steps (Langkah Pengerjaan)
    this.renderSteps(qData);

    // 4. Render Pilihan Ganda (A-E)
    this.renderOptions(qData);

    // 5. Update Status Kunci Opsi
    this.updateLockStatus(qData);

    // 6. Update Tombol Ragu-ragu
    this.updateDoubtButton(qId);

    // 7. Update Navigasi Grid Soal
    this.renderNavigationGrid();

    // 8. MathJax / KaTeX Render
    this.renderMath();
  }

  renderSteps(qData) {
    const stepsContainer = document.getElementById("steps-card-container");
    if (!stepsContainer) return;

    const qId = qData.id;
    if (!this.stepInputs[qId]) {
      this.stepInputs[qId] = {};
    }

    let stepsHtml = `
      <div class="steps-header">
        <div class="steps-title">
          <span>📝 Langkah Pengerjaan</span>
          <span style="font-size:0.75rem; color:var(--text-dim); font-weight:normal;">(Wajib diisi sebelum memilih opsi)</span>
        </div>
        <div id="steps-progress-badge" class="steps-progress-badge">
          0 / ${qData.totalBlanks} Terisi
        </div>
      </div>
      <div class="step-list">
    `;

    qData.steps.forEach(step => {
      // Ganti {{BLANK_X}} dengan inline input
      let rowContent = step.template;
      step.blanks.forEach(b => {
        const val = this.stepInputs[qId][b.globalIndex] || "";
        const filledClass = val.trim() !== "" ? "filled" : "";
        const inputTag = `
          <input 
            type="text" 
            class="step-blank-input ${filledClass}" 
            data-qid="${qId}" 
            data-blank="${b.globalIndex}" 
            value="${this._escapeHtml(val)}" 
            placeholder="..."
            autocomplete="off"
            spellcheck="false"
          />
        `;
        rowContent = rowContent.replace(`{{BLANK_${b.globalIndex}}}`, inputTag);
      });

      stepsHtml += `
        <div class="step-row">
          <div class="step-num-bubble">${step.stepNumber}</div>
          <div class="step-content">${rowContent}</div>
        </div>
      `;
    });

    stepsHtml += `</div>`;
    stepsContainer.innerHTML = stepsHtml;

    // Pasang listener input pada setiap input blank
    const inputs = stepsContainer.querySelectorAll(".step-blank-input");
    inputs.forEach(inp => {
      inp.addEventListener("input", (e) => {
        const blankIdx = e.target.getAttribute("data-blank");
        const val = e.target.value;
        this.handleBlankInput(qId, blankIdx, val);
      });

      // Navigasi enter ke blank berikutnya
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          const nextInp = e.target.closest(".steps-container").querySelector(`.step-blank-input[data-blank="${Number(inp.getAttribute("data-blank")) + 1}"]`);
          if (nextInp) nextInp.focus();
        }
      });
    });

    this.updateStepsProgressBadge(qData);
  }

  handleBlankInput(qId, blankIndex, value) {
    if (!this.stepInputs[qId]) this.stepInputs[qId] = {};
    this.stepInputs[qId][blankIndex] = value.trim();

    const inp = document.querySelector(`.step-blank-input[data-qid="${qId}"][data-blank="${blankIndex}"]`);
    if (inp) {
      if (value.trim() !== "") {
        inp.classList.add("filled");
      } else {
        inp.classList.remove("filled");
      }
    }

    const qData = this.allQuestions.find(q => q.id === qId);
    if (qData) {
      this.updateStepsProgressBadge(qData);
      this.updateLockStatus(qData);
    }

    this.renderNavigationGrid();
    this.saveState();
  }

  updateStepsProgressBadge(qData) {
    const qId = qData.id;
    const userInputs = this.stepInputs[qId] || {};
    let filledCount = 0;

    for (let i = 0; i < qData.totalBlanks; i++) {
      if (userInputs[i] && userInputs[i].trim() !== "") {
        filledCount++;
      }
    }

    const badge = document.getElementById("steps-progress-badge");
    if (badge) {
      badge.innerText = `${filledCount} / ${qData.totalBlanks} Terisi`;
      if (filledCount === qData.totalBlanks && qData.totalBlanks > 0) {
        badge.style.background = "rgba(16, 185, 129, 0.2)";
        badge.style.color = "#34d399";
        badge.style.borderColor = "rgba(16, 185, 129, 0.4)";
      } else {
        badge.style.background = "rgba(59, 130, 246, 0.15)";
        badge.style.color = "#60a5fa";
        badge.style.borderColor = "rgba(59, 130, 246, 0.3)";
      }
    }

    return filledCount === qData.totalBlanks && qData.totalBlanks > 0;
  }

  isQuestionStepsCompleted(qData) {
    const qId = qData.id;
    const userInputs = this.stepInputs[qId] || {};
    for (let i = 0; i < qData.totalBlanks; i++) {
      if (!userInputs[i] || userInputs[i].trim() === "") {
        return false;
      }
    }
    return true;
  }

  renderOptions(qData) {
    const container = document.getElementById("options-list-container");
    if (!container) return;

    const qId = qData.id;
    const selected = this.selectedOptions[qId];
    const letters = ["A", "B", "C", "D", "E"];

    let optionsHtml = "";
    qData.options.forEach((optText, idx) => {
      const isSelected = selected === idx;
      optionsHtml += `
        <div class="q-opt-card ${isSelected ? 'selected' : ''}" data-opt-idx="${idx}">
          <div class="opt-indicator">${letters[idx]}</div>
          <div class="opt-label">${optText}</div>
        </div>
      `;
    });

    container.innerHTML = optionsHtml;

    // Klik event pada card opsi
    const optCards = container.querySelectorAll(".q-opt-card");
    optCards.forEach(card => {
      card.addEventListener("click", () => {
        const optIdx = parseInt(card.getAttribute("data-opt-idx"), 10);
        this.handleOptionClick(qData, optIdx);
      });
    });
  }

  updateLockStatus(qData) {
    const isUnlocked = this.isQuestionStepsCompleted(qData);
    const wrapper = document.getElementById("options-wrapper");
    const banner = document.getElementById("lock-status-banner");

    if (wrapper) {
      if (isUnlocked) {
        wrapper.classList.remove("is-locked");
      } else {
        wrapper.classList.add("is-locked");
      }
    }

    if (banner) {
      if (isUnlocked) {
        banner.className = "lock-banner unlocked";
        banner.innerHTML = `
          <span>🔓</span>
          <span><strong>Langkah Terisi Lengkap!</strong> Opsi pilihan ganda terbuka. Silakan tentukan jawaban Anda.</span>
        `;
      } else {
        banner.className = "lock-banner locked";
        banner.innerHTML = `
          <span>🔒</span>
          <span><strong>Pilihan Ganda Terkunci!</strong> Lengkapi semua isian pada kolom Langkah Pengerjaan di atas terlebih dahulu.</span>
        `;
      }
    }
  }

  handleOptionClick(qData, optIdx) {
    // Pastikan langkah sudah lengkap diisi
    if (!this.isQuestionStepsCompleted(qData)) {
      this.triggerLockShake();
      this.showToast("Wajib mengisi seluruh angka/hasil pada Langkah Pengerjaan terlebih dahulu!", "warning");
      return;
    }

    const qId = qData.id;
    this.selectedOptions[qId] = optIdx;

    // Update UI pilihan opsi
    const optCards = document.querySelectorAll("#options-list-container .q-opt-card");
    optCards.forEach(c => {
      const idx = parseInt(c.getAttribute("data-opt-idx"), 10);
      if (idx === optIdx) {
        c.classList.add("selected");
      } else {
        c.classList.remove("selected");
      }
    });

    this.renderNavigationGrid();
    this.saveState();
  }

  triggerLockShake() {
    const banner = document.getElementById("lock-status-banner");
    const stepsBox = document.getElementById("steps-card-container");
    if (banner) {
      banner.classList.add("shake-active");
      setTimeout(() => banner.classList.remove("shake-active"), 450);
    }
    if (stepsBox) {
      stepsBox.classList.add("shake-active");
      setTimeout(() => stepsBox.classList.remove("shake-active"), 450);
    }
  }

  // --- NAVIGASI ANTAR SOAL ---
  navigateQuestion(delta) {
    const newIdx = this.currentActiveIndex + delta;
    if (newIdx >= 0 && newIdx < this.activeQuestionIds.length) {
      this.currentActiveIndex = newIdx;
      this.renderCurrentQuestion();
      this.saveState();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.activeQuestionIds.length) {
      this.currentActiveIndex = index;
      this.renderCurrentQuestion();
      this.saveState();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  toggleDoubt() {
    const qId = this.activeQuestionIds[this.currentActiveIndex];
    this.doubtStatus[qId] = !this.doubtStatus[qId];
    this.updateDoubtButton(qId);
    this.renderNavigationGrid();
    this.saveState();
  }

  updateDoubtButton(qId) {
    const btn = document.getElementById("btn-doubt-q");
    if (!btn) return;
    if (this.doubtStatus[qId]) {
      btn.classList.add("btn-doubt-active");
      btn.innerText = "★ Ditandai Ragu-ragu";
    } else {
      btn.classList.remove("btn-doubt-active");
      btn.innerText = "☆ Tandai Ragu-ragu";
    }
  }

  // --- NAVIGATION GRID ---
  renderNavigationGrid() {
    const grid = document.getElementById("question-nav-grid");
    if (!grid) return;

    let gridHtml = "";
    this.activeQuestionIds.forEach((qId, idx) => {
      const qData = this.allQuestions.find(q => q.id === qId);
      const isCurrent = idx === this.currentActiveIndex;
      const isStepsDone = qData ? this.isQuestionStepsCompleted(qData) : false;
      const isOptionPicked = this.selectedOptions[qId] !== undefined;
      const isDoubt = !!this.doubtStatus[qId];

      let statusClass = "";
      if (isCurrent) statusClass += " current-active";
      if (isDoubt) {
        statusClass += " doubtful";
      } else if (isStepsDone && isOptionPicked) {
        statusClass += " completed-both";
      } else if (isStepsDone || isOptionPicked) {
        statusClass += " partially-filled";
      }

      gridHtml += `
        <button 
          type="button" 
          class="q-grid-btn ${statusClass}" 
          data-grid-idx="${idx}"
          title="Soal ${idx + 1}"
        >
          ${idx + 1}
        </button>
      `;
    });

    grid.innerHTML = gridHtml;

    // Pasang click listener
    grid.querySelectorAll(".q-grid-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-grid-idx"), 10);
        this.jumpToQuestion(idx);
      });
    });

    // Update Ringkasan Nav Grid
    const answeredCount = Object.keys(this.selectedOptions).filter(
      id => this.activeQuestionIds.includes(id) && this.selectedOptions[id] !== undefined
    ).length;

    const navSummary = document.getElementById("nav-grid-summary");
    if (navSummary) {
      navSummary.innerText = `${answeredCount} / ${this.activeQuestionIds.length} Terjawab`;
    }
  }

  // --- SELESAIKAN SESI (EVALUASI & REMEDIAL LOOP) ---
  promptFinishSession() {
    const unAnswered = this.activeQuestionIds.filter(
      id => this.selectedOptions[id] === undefined
    );

    let confirmMsg = `Anda akan menyelesaikan Sesi ${this.sessionNumber}.\n`;
    if (unAnswered.length > 0) {
      confirmMsg += `⚠️ Terdapat ${unAnswered.length} soal yang belum Anda pilih jawabannya!\nSoal yang kosong akan otomatis terhitung salah.\n\n`;
    }
    confirmMsg += `Yakin ingin mengakhiri sesi dan melihat peringkat?`;

    if (confirm(confirmMsg)) {
      this.evaluateAndFinishSession();
    }
  }

  async evaluateAndFinishSession() {
    this.stopTimer();

    let sessionCorrect = 0;
    let sessionWrong = 0;
    const currentWrongQIds = [];

    // Evaluasi jawaban soal-soal di sesi aktif ini
    this.activeQuestionIds.forEach(qId => {
      const qData = this.allQuestions.find(q => q.id === qId);
      if (!qData) return;

      const userChoice = this.selectedOptions[qId];
      const isCorrect = userChoice === qData.correct;

      if (isCorrect) {
        sessionCorrect++;
        this.masterCompletedQIds.add(qId);
        this.masterWrongQIds.delete(qId);
      } else {
        sessionWrong++;
        currentWrongQIds.push(qId);
        this.masterWrongQIds.add(qId);
        this.masterCompletedQIds.delete(qId);
      }
    });

    const totalMasterCorrect = this.masterCompletedQIds.size;
    const isMasteryAchieved = totalMasterCorrect === 60;

    // Catat histori sesi
    const sessionRecord = {
      sessionNumber: this.sessionNumber,
      totalQuestionsInSession: this.activeQuestionIds.length,
      correctInSession: sessionCorrect,
      wrongInSession: sessionWrong,
      wrongQIds: [...currentWrongQIds],
      masterCompletedTotal: totalMasterCorrect,
      timestamp: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
    };
    this.sessionHistory.push(sessionRecord);

    // SUBMIT KE FIREBASE FIRESTORE & AMBIL LEADERBOARD SNAPSHOT
    try {
      this.showToast("Menyimpan hasil ke papan peringkat...", "info");
      await LeaderboardLesManager.submitScore({
        name: this.student.name,
        className: this.student.className,
        correctCount: totalMasterCorrect,
        totalQuestions: 60,
        sessionNumber: this.sessionNumber
      });
    } catch (e) {
      console.warn("Error submitting score to Firestore:", e);
    }

    this.saveState();

    // Tampilkan Layar Hasil Sesi
    this.renderResultScreen(sessionRecord, isMasteryAchieved);
    this.showScreen("screen-result");

    // Otomatis buka modal peringkat segera setelah sesi selesai
    setTimeout(() => {
      this.openLeaderboardModal();
    }, 700);
  }

  renderResultScreen(sessionRecord, isMasteryAchieved) {
    const titleEl = document.getElementById("result-session-title");
    const descEl = document.getElementById("result-session-desc");
    const statCorrectEl = document.getElementById("stat-correct-count");
    const statWrongEl = document.getElementById("stat-wrong-count");
    const statTotalMasterEl = document.getElementById("stat-master-total");
    const statAccuracyEl = document.getElementById("stat-accuracy");

    if (titleEl) {
      titleEl.innerText = isMasteryAchieved
        ? `🏆 TUNTAS SEMPURNA! SEMUA 60 SOAL BENAR!`
        : `Sesi ${this.sessionNumber} Selesai — Evaluasi & Peringkat`;
    }

    if (descEl) {
      descEl.innerText = isMasteryAchieved
        ? `Selamat ${this.student.name}! Anda berhasil menuntaskan seluruh 60 soal Bab 1: Eksponen & Logaritma tanpa ada yang salah.`
        : `Hasil evaluasi Sesi ${this.sessionNumber} telah dicatat. Soal yang belum tepat dapat Anda perbaiki di sesi remedial berikutnya.`;
    }

    if (statCorrectEl) statCorrectEl.innerText = sessionRecord.correctInSession;
    if (statWrongEl) statWrongEl.innerText = sessionRecord.wrongInSession;
    if (statTotalMasterEl) statTotalMasterEl.innerText = `${sessionRecord.masterCompletedTotal} / 60`;
    if (statAccuracyEl) {
      const pct = Math.round((sessionRecord.masterCompletedTotal / 60) * 100);
      statAccuracyEl.innerText = `${pct}%`;
    }

    // Area Remedial Next Step
    const remedialArea = document.getElementById("remedial-action-area");
    const celebrationArea = document.getElementById("celebration-action-area");
    const wrongListContainer = document.getElementById("wrong-questions-list");

    if (isMasteryAchieved) {
      if (remedialArea) remedialArea.classList.add("hidden");
      if (celebrationArea) celebrationArea.classList.remove("hidden");
    } else {
      if (remedialArea) remedialArea.classList.remove("hidden");
      if (celebrationArea) celebrationArea.classList.add("hidden");

      // Tampilkan daftar nomor soal yang perlu diremidi
      if (wrongListContainer) {
        const wrongNumbers = sessionRecord.wrongQIds.map(id => {
          const q = this.allQuestions.find(item => item.id === id);
          return q ? `Soal ${q.number}` : id;
        });

        wrongListContainer.innerHTML = wrongNumbers.map(n => `
          <span class="badge-rem-target">${n}</span>
        `).join("");
      }

      // Update teks tombol remedial
      const btnRemedial = document.getElementById("btn-start-remedial");
      if (btnRemedial) {
        btnRemedial.innerHTML = `
          Mulai Remedial Sesi ${this.sessionNumber + 1} (${sessionRecord.wrongInSession} Soal Tersisa) &rarr;
        `;
      }
    }
  }

  // --- MEMULAI SESI REMEDIAL BERIKUTNYA ---
  startNextRemedialSession() {
    if (this.masterWrongQIds.size === 0) {
      this.showToast("Semua soal sudah benar! Tidak ada soal untuk diremidi.", "success");
      return;
    }

    this.sessionNumber++;
    // Soal yang dikerjakan HANYA yang masih salah
    this.activeQuestionIds = Array.from(this.masterWrongQIds);
    this.currentActiveIndex = 0;

    // Reset jawaban pilihan ganda untuk soal yang diremidi agar siswa berpikir ulang
    this.activeQuestionIds.forEach(qId => {
      delete this.selectedOptions[qId];
      this.doubtStatus[qId] = false;
    });

    this.saveState();
    this.showScreen("screen-exam");
    this.renderCurrentQuestion();
    this.startTimer();

    this.showToast(`Memulai Sesi Remedial ${this.sessionNumber}: ${this.activeQuestionIds.length} soal yang perlu diperbaiki.`, "info");
  }

  // --- MODAL LEADERBOARD ---
  openLeaderboardModal() {
    const modal = document.getElementById("leaderboard-modal");
    if (!modal) return;

    modal.classList.add("active");
    LeaderboardLesManager.listenLeaderboard((list) => {
      const stats = LeaderboardLesManager.getStats(list);

      const totalEl = document.getElementById("modal-stat-total");
      const topEl = document.getElementById("modal-stat-top");
      const completedEl = document.getElementById("modal-stat-completed");

      if (totalEl) totalEl.innerText = stats.total;
      if (topEl) topEl.innerText = `${stats.topScore}/60`;
      if (completedEl) completedEl.innerText = stats.completedCount;

      LeaderboardLesManager.renderTable(list, this.student.name, "leaderboard-modal-tbody");
    });
  }

  closeLeaderboardModal() {
    const modal = document.getElementById("leaderboard-modal");
    if (modal) modal.classList.remove("active");
  }

  // --- HELPERS ---
  showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");
  }

  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    let bg = "rgba(15, 23, 42, 0.95)";
    let border = "rgba(59, 130, 246, 0.5)";
    let text = "#93c5fd";

    if (type === "warning") {
      border = "rgba(245, 158, 11, 0.5)";
      text = "#fde68a";
    } else if (type === "success") {
      border = "rgba(16, 185, 129, 0.5)";
      text = "#a7f3d0";
    }

    toast.style.cssText = `
      background:${bg};
      border:1.5px solid ${border};
      color:${text};
      padding:12px 20px;
      border-radius:10px;
      font-size:0.88rem;
      font-weight:600;
      box-shadow:0 8px 30px rgba(0,0,0,0.5);
      backdrop-filter:blur(10px);
      transition:all 0.3s ease;
      max-width:380px;
    `;
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  renderMath() {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(document.getElementById("screen-exam"), {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn("KaTeX error:", e);
      }
    }
  }

  _escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Inisialisasi global saat DOM siap
window.examEngineLes = new ExamEngineLes();
document.addEventListener("DOMContentLoaded", () => {
  window.examEngineLes.init();
});
