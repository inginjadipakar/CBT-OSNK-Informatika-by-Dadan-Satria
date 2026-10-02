// Mesin Utama Ujian OSNK Informatika (State & Lifecycle Manager)
// Dilengkapi: Custom In-App Modal, State Persistence saat Refresh, dan Sinkronisasi Leaderboard

class ExamEngine {
  constructor() {
    this.student = { name: "", className: "" };
    this.phase = "REGISTRATION"; // REGISTRATION, READING, ROUND_1, ROUND_2_INTRO, ROUND_2, RESULT
    this.completed = false;

    // Timer Reading Materi (15 Menit)
    this.readingTimeLeft = APP_CONFIG.READING_TIME_SECONDS;
    this.readingInterval = null;

    // Timer Tiap Soal (3 Menit / 180 Detik)
    this.questionTimeLeft = APP_CONFIG.QUESTION_TIME_SECONDS;
    this.questionInterval = null;

    // Data Soal & Jawaban
    this.questions = OSNK_QUESTIONS;
    this.currentQIndex = 0;
    this.round1Answers = {}; // { questionId: optionIndex }
    this.round1Doubt = {};   // { questionId: boolean }

    // Kesempatan Kedua (Ronde 2)
    this.wrongQuestions = [];
    this.round2CurrentIndex = 0;
    this.round2Answers = {};

    // Skor
    this.scoreRound1 = 0;
    this.scoreRound2 = 0;
    this.totalScore = 0;

    // Anti-Cheat Instance
    this.anticheat = new AntiCheatGuard({
      maxViolations: APP_CONFIG.MAX_VIOLATIONS,
      onViolation: (count, max, reason) => this.handleViolation(count, max, reason),
      onMaxViolationsExceeded: () => this.handleDisqualification()
    });
  }

  // --- FUNGSI ACAK SOAL ANTAR DEVICE (FISHER-YATES SHUFFLE) ---
  shuffleQuestions(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- STATE PERSISTENCE (PENYIMPANAN LOCALSTORAGE) ---
  saveState() {
    const state = {
      student: this.student,
      phase: this.phase,
      completed: this.completed,
      questionOrder: this.questions.map(q => q.id),
      readingTimeLeft: this.readingTimeLeft,
      currentQIndex: this.currentQIndex,
      round1Answers: this.round1Answers,
      round1Doubt: this.round1Doubt,
      wrongQuestions: this.wrongQuestions,
      round2CurrentIndex: this.round2CurrentIndex,
      round2Answers: this.round2Answers,
      scoreRound1: this.scoreRound1,
      scoreRound2: this.scoreRound2,
      totalScore: this.totalScore,
      violations: this.anticheat ? this.anticheat.violations : 0
    };
    try {
      localStorage.setItem("OSNK_CBT_STATE", JSON.stringify(state));
    } catch (e) {
      console.warn("Gagal menyimpan state sesi:", e);
    }
  }

  loadSavedState() {
    try {
      const raw = localStorage.getItem("OSNK_CBT_STATE");
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  init() {
    this.bindDOMEvents();

    const saved = this.loadSavedState();
    if (saved && saved.student && saved.student.name) {
      // Restore urutan soal acak khusus device ini
      if (saved.questionOrder && Array.isArray(saved.questionOrder)) {
        const ordered = saved.questionOrder
          .map(id => OSNK_QUESTIONS.find(q => q.id === id))
          .filter(Boolean);
        if (ordered.length === OSNK_QUESTIONS.length) {
          this.questions = ordered;
        }
      }

      // Restore data siswa & progress
      this.student = saved.student;
      this.phase = saved.phase || "REGISTRATION";
      this.completed = saved.completed || false;
      this.round1Answers = saved.round1Answers || {};
      this.round1Doubt = saved.round1Doubt || {};
      this.wrongQuestions = saved.wrongQuestions || [];
      this.round2Answers = saved.round2Answers || {};
      this.scoreRound1 = saved.scoreRound1 || 0;
      this.scoreRound2 = saved.scoreRound2 || 0;
      this.totalScore = saved.totalScore || 0;
      this.currentQIndex = saved.currentQIndex || 0;
      this.round2CurrentIndex = saved.round2CurrentIndex || 0;

      if (this.anticheat && saved.violations) {
        this.anticheat.violations = saved.violations;
      }

      this.updateProfileHeader();

      // Skenario A: Ujian sudah selesai secara resmi
      if (this.completed || this.phase === "RESULT") {
        this.finishExam(true); // true = restore mode
        return;
      }

      // Skenario B: Masih dalam Ronde 2
      if (this.phase === "ROUND_2") {
        this.startRound2Exam(true);
        return;
      }

      // Skenario C: Di intro Ronde 2
      if (this.phase === "ROUND_2_INTRO") {
        this.showRound2Intro();
        return;
      }

      // Skenario D: Sedang di Ronde 1
      if (this.phase === "ROUND_1") {
        this.showScreen("screen-exam");
        this.anticheat.start();
        this.renderQuestionGrid();
        this.loadQuestion(this.currentQIndex);
        return;
      }

      // Skenario E: Sedang membaca materi
      if (this.phase === "READING") {
        this.readingTimeLeft = saved.readingTimeLeft > 0 ? saved.readingTimeLeft : 60;
        this.startReadingPhase();
        return;
      }
    }

    // Auto-sync data ujian riwayat lokal yang ada di device ini ke server/sheets
    this.autoSyncLocalExamData();

    // Default: Buka layar registrasi awal
    this.showScreen("screen-registration");
    this.updateHomeLeaderboardBadge();
  }

  async autoSyncLocalExamData() {
    try {
      // 1. Cek dari OSNK_CBT_STATE
      const stateRaw = localStorage.getItem("OSNK_CBT_STATE");
      if (stateRaw) {
        const state = JSON.parse(stateRaw);
        if (state && state.student && state.student.name && (state.completed || state.phase === "RESULT" || (state.scoreRound1 > 0))) {
          await LeaderboardManager.submitScore({
            name: state.student.name,
            className: state.student.className,
            round1: state.scoreRound1 || 0,
            round2: state.scoreRound2 || 0,
            totalScore: state.totalScore || 0,
            violations: state.violations || 0
          });
        }
      }

      // 2. Cek apakah ada record di localStorage leaderboard lokal yang belum tersinkron
      const localListRaw = localStorage.getItem("osnk_cbt_leaderboard_real_v2");
      if (localListRaw) {
        const localList = JSON.parse(localListRaw);
        if (Array.isArray(localList) && localList.length > 0) {
          for (const item of localList) {
            if (item.name && item.totalScore !== undefined) {
              await LeaderboardManager.submitScore(item);
            }
          }
        }
      }
    } catch (e) {
      console.warn("Auto-sync data lokal dilewati:", e.message);
    }
  }

  updateProfileHeader() {
    if (!this.student.name) return;
    const nameEl = document.getElementById("header-user-name");
    const classEl = document.getElementById("header-user-class");
    const initialEl = document.getElementById("header-avatar-initial");
    const badge = document.getElementById("user-profile-badge");

    if (nameEl) nameEl.innerText = this.student.name;
    if (classEl) classEl.innerText = this.student.className;
    if (initialEl) initialEl.innerText = this.student.name.charAt(0).toUpperCase();
    if (badge) badge.classList.remove("hidden");
  }

  // --- MODAL POP-UP CUSTOM (PENGGANTI ALERT & CONFIRM) ---
  showConfirm(title, message, icon, onOk, onCancel) {
    const modal = document.getElementById("app-confirm-modal");
    if (!modal) {
      if (confirm(message)) onOk && onOk();
      return;
    }

    document.getElementById("confirm-modal-icon").innerText = icon || "❓";
    document.getElementById("confirm-modal-title").innerText = title || "Konfirmasi";
    document.getElementById("confirm-modal-message").innerText = message || "";

    modal.classList.add("active");

    const btnOk = document.getElementById("btn-confirm-ok");
    const btnCancel = document.getElementById("btn-confirm-cancel");

    btnOk.onclick = () => {
      modal.classList.remove("active");
      if (onOk) onOk();
    };

    btnCancel.onclick = () => {
      modal.classList.remove("active");
      if (onCancel) onCancel();
    };
  }

  showAlert(title, message, icon, onOk) {
    const modal = document.getElementById("app-alert-modal");
    if (!modal) {
      alert(message);
      if (onOk) onOk();
      return;
    }

    document.getElementById("alert-modal-icon").innerText = icon || "ℹ️";
    document.getElementById("alert-modal-title").innerText = title || "Informasi";
    document.getElementById("alert-modal-message").innerText = message || "";

    modal.classList.add("active");

    const btnOk = document.getElementById("btn-alert-ok");
    btnOk.onclick = () => {
      modal.classList.remove("active");
      if (onOk) onOk();
    };
  }

  bindDOMEvents() {
    // Tombol Registrasi Masuk
    const btnStart = document.getElementById("btn-start-registration");
    if (btnStart) {
      btnStart.addEventListener("click", () => this.handleRegistration());
    }

    // Input Enter Submit
    const inputName = document.getElementById("input-name");
    const inputClass = document.getElementById("input-class");
    [inputName, inputClass].forEach(inp => {
      if (inp) {
        inp.addEventListener("keypress", (e) => {
          if (e.key === "Enter") this.handleRegistration();
        });
      }
    });

    // Tombol Mulai Ujian dari Halaman Materi
    const btnFinishReading = document.getElementById("btn-finish-reading");
    if (btnFinishReading) {
      btnFinishReading.addEventListener("click", () => {
        this.showConfirm(
          "Kunci Materi & Mulai Ujian?",
          "Materi C++ akan dikunci permanen dan tidak dapat dibuka kembali. Yakin ingin memulai ujian sekarang?",
          "🔒",
          () => this.lockMaterialAndStartExam()
        );
      });
    }

    // Navigasi Soal Ronde 1
    const btnPrev = document.getElementById("btn-prev-q");
    const btnNext = document.getElementById("btn-next-q");
    const btnDoubt = document.getElementById("btn-doubt-q");
    const btnFinishRound1 = document.getElementById("btn-finish-round-1");

    if (btnPrev) btnPrev.addEventListener("click", () => this.prevQuestion());
    if (btnNext) btnNext.addEventListener("click", () => this.nextQuestion());
    if (btnDoubt) btnDoubt.addEventListener("click", () => this.toggleDoubt());
    if (btnFinishRound1) btnFinishRound1.addEventListener("click", () => this.confirmFinishRound1());

    // Ronde 2 Mulai
    const btnStartRound2 = document.getElementById("btn-start-round-2");
    if (btnStartRound2) {
      btnStartRound2.addEventListener("click", () => this.startRound2Exam());
    }

    // Ronde 2 Navigasi
    const btnPrevR2 = document.getElementById("btn-prev-r2");
    const btnNextR2 = document.getElementById("btn-next-r2");
    const btnFinishR2 = document.getElementById("btn-finish-round-2");
    if (btnPrevR2) btnPrevR2.addEventListener("click", () => this.prevRound2Question());
    if (btnNextR2) btnNextR2.addEventListener("click", () => this.nextRound2Question());
    if (btnFinishR2) btnFinishR2.addEventListener("click", () => this.confirmFinishRound2());

    // Search di Leaderboard Layar Hasil
    const searchInput = document.getElementById("leaderboard-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.filterLeaderboard(query);
      });
    }

    // Leaderboard Halaman Awal & Navbar
    const btnOpenHomeLb = document.getElementById("btn-open-leaderboard-home");
    if (btnOpenHomeLb) {
      btnOpenHomeLb.addEventListener("click", () => this.openHomeLeaderboardModal());
    }

    const btnNavLb = document.getElementById("btn-nav-leaderboard");
    if (btnNavLb) {
      btnNavLb.addEventListener("click", () => this.openHomeLeaderboardModal());
    }

    const btnCloseHomeLb = document.getElementById("btn-close-home-lb");
    const btnCloseHomeLbFooter = document.getElementById("btn-close-home-lb-footer");
    if (btnCloseHomeLb) btnCloseHomeLb.addEventListener("click", () => this.closeHomeLeaderboardModal());
    if (btnCloseHomeLbFooter) btnCloseHomeLbFooter.addEventListener("click", () => this.closeHomeLeaderboardModal());

    const btnRefreshHomeLb = document.getElementById("btn-refresh-home-lb");
    if (btnRefreshHomeLb) {
      btnRefreshHomeLb.addEventListener("click", () => this.openHomeLeaderboardModal());
    }

    const searchHomeLb = document.getElementById("home-leaderboard-search");
    if (searchHomeLb) {
      searchHomeLb.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.filterHomeLeaderboard(query);
      });
    }

    // Tutup modal jika klik di luar area modal box
    const homeLbModal = document.getElementById("home-leaderboard-modal");
    if (homeLbModal) {
      homeLbModal.addEventListener("click", (e) => {
        if (e.target === homeLbModal) {
          this.closeHomeLeaderboardModal();
        }
      });
    }

    // Keyboard shortcut ESC untuk menutup modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeHomeLeaderboardModal();
      }
    });
  }

  showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
      activeScreen.classList.add("active");
      window.scrollTo(0, 0);
    }

    // Sembunyikan tombol ranking di navbar saat ujian berlangsung demi integritas ujian
    const btnNavLb = document.getElementById("btn-nav-leaderboard");
    if (btnNavLb) {
      if (screenId === "screen-exam" || screenId === "screen-round2-exam" || screenId === "screen-reading") {
        btnNavLb.style.display = "none";
      } else {
        btnNavLb.style.display = "inline-flex";
      }
    }
  }

  // --- FASE 1: REGISTRASI SISWA ---
  handleRegistration() {
    const name = document.getElementById("input-name").value.trim();
    const className = document.getElementById("input-class").value.trim();

    if (!name || !className) {
      this.showAlert("Identitas Belum Lengkap", "Harap masukkan Nama Lengkap dan Kelas Anda terlebih dahulu!", "⚠️");
      return;
    }

    // Acak urutan 50 butir soal secara unik khusus untuk device / peserta ini
    this.questions = this.shuffleQuestions(OSNK_QUESTIONS);
    this.student.name = name;
    this.student.className = className;
    this.updateProfileHeader();
    this.saveState();

    this.startReadingPhase();
  }

  // --- FASE 2: MEMBACA MATERI C++ (15 MENIT) ---
  startReadingPhase() {
    this.phase = "READING";
    this.saveState();
    this.showScreen("screen-reading");
    renderMateriContent();

    this.updateReadingTimerDisplay();

    if (this.readingInterval) clearInterval(this.readingInterval);
    this.readingInterval = setInterval(() => {
      this.readingTimeLeft--;
      this.updateReadingTimerDisplay();
      this.saveState();

      if (this.readingTimeLeft <= 0) {
        clearInterval(this.readingInterval);
        this.showAlert(
          "Waktu Membaca Habis",
          "Waktu membaca materi 15 menit telah selesai. Ujian OSNK akan dimulai sekarang.",
          "⏰",
          () => this.lockMaterialAndStartExam()
        );
      }
    }, 1000);
  }

  updateReadingTimerDisplay() {
    const mins = Math.floor(this.readingTimeLeft / 60);
    const secs = this.readingTimeLeft % 60;
    const str = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    const el = document.getElementById("reading-timer-text");
    if (el) el.innerText = str;

    const progressEl = document.getElementById("reading-progress-bar");
    if (progressEl) {
      const pct = ((APP_CONFIG.READING_TIME_SECONDS - this.readingTimeLeft) / APP_CONFIG.READING_TIME_SECONDS) * 100;
      progressEl.style.width = `${pct}%`;
    }
  }

  // Mengunci materi permanen & hapus dari DOM
  lockMaterialAndStartExam() {
    if (this.readingInterval) clearInterval(this.readingInterval);

    const materiContainer = document.getElementById("screen-reading");
    if (materiContainer) {
      materiContainer.innerHTML = '<div class="locked-banner"><h3>Materi telah dikunci secara permanen sesuai regulasi ujian.</h3></div>';
    }

    this.startRound1();
  }

  // --- FASE 3: RONDE 1 (50 SOAL OSNK, 3 MENIT / SOAL) ---
  startRound1() {
    this.phase = "ROUND_1";
    this.saveState();
    this.showScreen("screen-exam");

    this.anticheat.start();
    if (APP_CONFIG.ENABLE_FULLSCREEN) {
      this.anticheat.requestFullscreen();
    }

    this.renderQuestionGrid();
    this.loadQuestion(this.currentQIndex || 0);
  }

  renderQuestionGrid() {
    const grid = document.getElementById("question-grid");
    if (!grid) return;
    grid.innerHTML = "";

    this.questions.forEach((q, index) => {
      const btn = document.createElement("button");
      btn.className = "grid-q-btn";
      btn.id = `grid-btn-${index}`;
      btn.innerText = index + 1;
      btn.addEventListener("click", () => {
        this.loadQuestion(index);
      });
      grid.appendChild(btn);
    });
  }

  loadQuestion(index) {
    if (index < 0 || index >= this.questions.length) return;
    this.currentQIndex = index;
    this.saveState();
    const q = this.questions[index];

    // Mulai Timer 3 Menit untuk Soal Ini
    this.startQuestionTimer();

    document.getElementById("current-q-num").innerText = index + 1;
    document.getElementById("total-q-num").innerText = this.questions.length;
    document.getElementById("q-category-badge").innerText = q.category;
    document.getElementById("q-text").innerText = q.question;

    const codeContainer = document.getElementById("q-code-container");
    const codeElem = document.getElementById("q-code");
    if (q.code) {
      codeElem.innerText = q.code;
      codeContainer.classList.remove("hidden");
    } else {
      codeContainer.classList.add("hidden");
    }

    const optionsList = document.getElementById("q-options-list");
    optionsList.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];

    q.options.forEach((optText, optIdx) => {
      const optBtn = document.createElement("div");
      optBtn.className = "option-item";
      if (this.round1Answers[q.id] === optIdx) {
        optBtn.classList.add("selected");
      }

      optBtn.innerHTML = `
        <span class="option-letter">${letters[optIdx]}</span>
        <span class="option-text">${optText}</span>
      `;

      optBtn.addEventListener("click", () => {
        this.selectOption(q.id, optIdx);
      });
      optionsList.appendChild(optBtn);
    });

    const doubtBtn = document.getElementById("btn-doubt-q");
    if (doubtBtn) {
      if (this.round1Doubt[q.id]) {
        doubtBtn.classList.add("active");
        doubtBtn.innerText = "★ Beri Tanda Ragu (Aktif)";
      } else {
        doubtBtn.classList.remove("active");
        doubtBtn.innerText = "☆ Tandai Ragu-Ragu";
      }
    }

    const btnPrev = document.getElementById("btn-prev-q");
    const btnNext = document.getElementById("btn-next-q");
    if (btnPrev) btnPrev.disabled = (index === 0);
    if (btnNext) btnNext.style.display = (index === this.questions.length - 1) ? "none" : "inline-flex";

    const btnFinish = document.getElementById("btn-finish-round-1");
    if (btnFinish) {
      btnFinish.style.display = (index === this.questions.length - 1) ? "inline-flex" : "none";
    }

    this.updateGridStatus();
  }

  startQuestionTimer() {
    if (this.questionInterval) clearInterval(this.questionInterval);
    this.questionTimeLeft = APP_CONFIG.QUESTION_TIME_SECONDS;
    this.updateQuestionTimerDisplay();

    this.questionInterval = setInterval(() => {
      this.questionTimeLeft--;
      this.updateQuestionTimerDisplay();

      if (this.questionTimeLeft <= 0) {
        clearInterval(this.questionInterval);
        this.handleQuestionTimeOut();
      }
    }, 1000);
  }

  updateQuestionTimerDisplay() {
    const mins = Math.floor(this.questionTimeLeft / 60);
    const secs = this.questionTimeLeft % 60;
    const str = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    const el = document.getElementById("q-timer-text");
    if (el) {
      el.innerText = str;
      if (this.questionTimeLeft <= 30) {
        el.classList.add("time-warning");
      } else {
        el.classList.remove("time-warning");
      }
    }
  }

  handleQuestionTimeOut() {
    this.anticheat.showToast("Waktu 3 menit untuk soal ini telah habis!");
    if (this.currentQIndex < this.questions.length - 1) {
      this.loadQuestion(this.currentQIndex + 1);
    } else {
      this.confirmFinishRound1();
    }
  }

  selectOption(qId, optIdx) {
    this.round1Answers[qId] = optIdx;
    this.saveState();
    this.loadQuestion(this.currentQIndex);
  }

  toggleDoubt() {
    const qId = this.questions[this.currentQIndex].id;
    this.round1Doubt[qId] = !this.round1Doubt[qId];
    this.saveState();
    this.loadQuestion(this.currentQIndex);
  }

  prevQuestion() {
    if (this.currentQIndex > 0) {
      this.loadQuestion(this.currentQIndex - 1);
    }
  }

  nextQuestion() {
    if (this.currentQIndex < this.questions.length - 1) {
      this.loadQuestion(this.currentQIndex + 1);
    }
  }

  updateGridStatus() {
    this.questions.forEach((q, idx) => {
      const btn = document.getElementById(`grid-btn-${idx}`);
      if (!btn) return;

      btn.className = "grid-q-btn";
      if (idx === this.currentQIndex) btn.classList.add("current");

      if (this.round1Doubt[q.id]) {
        btn.classList.add("doubt");
      } else if (this.round1Answers[q.id] !== undefined) {
        btn.classList.add("answered");
      }
    });

    const answeredCount = Object.keys(this.round1Answers).length;
    const elAns = document.getElementById("count-answered");
    const elRem = document.getElementById("count-remaining");
    if (elAns) elAns.innerText = answeredCount;
    if (elRem) elRem.innerText = this.questions.length - answeredCount;
  }

  confirmFinishRound1() {
    const answeredCount = Object.keys(this.round1Answers).length;
    const unanswered = this.questions.length - answeredCount;

    let msg = `Anda telah menjawab ${answeredCount} dari ${this.questions.length} soal.`;
    if (unanswered > 0) {
      msg += ` Masih ada ${unanswered} butir yang kosong.`;
    }
    msg += " Yakin ingin mengakhiri Ronde 1?";

    this.showConfirm(
      "Selesaikan Ronde 1?",
      msg,
      "📋",
      () => this.finishRound1()
    );
  }

  finishRound1() {
    if (this.questionInterval) clearInterval(this.questionInterval);

    let correctCountR1 = 0;
    this.wrongQuestions = [];

    this.questions.forEach(q => {
      const userAnswer = this.round1Answers[q.id];
      if (userAnswer === q.correct) {
        correctCountR1++;
      } else {
        this.wrongQuestions.push(q);
      }
    });

    this.scoreRound1 = correctCountR1 * APP_CONFIG.ROUND_1_POINT;
    this.saveState();

    if (this.wrongQuestions.length === 0) {
      this.totalScore = 100;
      this.completed = true;
      this.showAlert(
        "Sempurna!",
        "Luar biasa! Seluruh 50 soal dijawab benar sempurna pada Ronde 1 (Skor 100).",
        "🏆",
        () => this.finishExam()
      );
      return;
    }

    this.showRound2Intro();
  }

  showRound2Intro() {
    this.phase = "ROUND_2_INTRO";
    this.saveState();
    this.showScreen("screen-round2-intro");

    document.getElementById("r2-intro-wrong-count").innerText = this.wrongQuestions.length;
    document.getElementById("r2-intro-r1-score").innerText = this.scoreRound1.toFixed(1);
    
    const maxAdditional = this.wrongQuestions.length * APP_CONFIG.ROUND_2_POINT;
    document.getElementById("r2-intro-potential").innerText = `+${maxAdditional.toFixed(1)}`;
  }

  startRound2Exam(isRestore = false) {
    this.phase = "ROUND_2";
    if (!isRestore) {
      this.round2CurrentIndex = 0;
      this.round2Answers = {};
    }
    this.saveState();
    this.showScreen("screen-round2-exam");

    this.renderRound2Grid();
    this.loadRound2Question(this.round2CurrentIndex || 0);
  }

  renderRound2Grid() {
    const grid = document.getElementById("r2-grid");
    if (!grid) return;
    grid.innerHTML = "";

    this.wrongQuestions.forEach((q, index) => {
      const btn = document.createElement("button");
      btn.className = "grid-q-btn";
      btn.id = `r2-grid-btn-${index}`;
      btn.innerText = index + 1;
      btn.addEventListener("click", () => {
        this.loadRound2Question(index);
      });
      grid.appendChild(btn);
    });
  }

  loadRound2Question(index) {
    if (index < 0 || index >= this.wrongQuestions.length) return;
    this.round2CurrentIndex = index;
    this.saveState();
    const q = this.wrongQuestions[index];

    this.startRound2QuestionTimer();

    document.getElementById("r2-current-q-num").innerText = index + 1;
    document.getElementById("r2-total-q-num").innerText = this.wrongQuestions.length;
    document.getElementById("r2-q-category-badge").innerText = q.category;
    document.getElementById("r2-q-text").innerText = q.question;

    const codeContainer = document.getElementById("r2-q-code-container");
    const codeElem = document.getElementById("r2-q-code");
    if (q.code) {
      codeElem.innerText = q.code;
      codeContainer.classList.remove("hidden");
    } else {
      codeContainer.classList.add("hidden");
    }

    const optionsList = document.getElementById("r2-q-options-list");
    optionsList.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];

    q.options.forEach((optText, optIdx) => {
      const optBtn = document.createElement("div");
      optBtn.className = "option-item";
      if (this.round2Answers[q.id] === optIdx) {
        optBtn.classList.add("selected");
      }

      optBtn.innerHTML = `
        <span class="option-letter">${letters[optIdx]}</span>
        <span class="option-text">${optText}</span>
      `;

      optBtn.addEventListener("click", () => {
        this.round2Answers[q.id] = optIdx;
        this.saveState();
        this.loadRound2Question(this.round2CurrentIndex);
      });
      optionsList.appendChild(optBtn);
    });

    const btnPrev = document.getElementById("btn-prev-r2");
    const btnNext = document.getElementById("btn-next-r2");
    if (btnPrev) btnPrev.disabled = (index === 0);
    if (btnNext) btnNext.style.display = (index === this.wrongQuestions.length - 1) ? "none" : "inline-flex";

    const btnFinish = document.getElementById("btn-finish-round-2");
    if (btnFinish) {
      btnFinish.style.display = (index === this.wrongQuestions.length - 1) ? "inline-flex" : "none";
    }

    this.updateRound2GridStatus();
  }

  startRound2QuestionTimer() {
    if (this.questionInterval) clearInterval(this.questionInterval);
    this.questionTimeLeft = APP_CONFIG.QUESTION_TIME_SECONDS;
    this.updateRound2QuestionTimerDisplay();

    this.questionInterval = setInterval(() => {
      this.questionTimeLeft--;
      this.updateRound2QuestionTimerDisplay();

      if (this.questionTimeLeft <= 0) {
        clearInterval(this.questionInterval);
        this.handleRound2QuestionTimeOut();
      }
    }, 1000);
  }

  updateRound2QuestionTimerDisplay() {
    const mins = Math.floor(this.questionTimeLeft / 60);
    const secs = this.questionTimeLeft % 60;
    const str = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    const el = document.getElementById("r2-q-timer-text");
    if (el) el.innerText = str;
  }

  handleRound2QuestionTimeOut() {
    this.anticheat.showToast("Waktu 3 menit untuk soal remedial ini telah habis!");
    if (this.round2CurrentIndex < this.wrongQuestions.length - 1) {
      this.loadRound2Question(this.round2CurrentIndex + 1);
    } else {
      this.confirmFinishRound2();
    }
  }

  prevRound2Question() {
    if (this.round2CurrentIndex > 0) {
      this.loadRound2Question(this.round2CurrentIndex - 1);
    }
  }

  nextRound2Question() {
    if (this.round2CurrentIndex < this.wrongQuestions.length - 1) {
      this.loadRound2Question(this.round2CurrentIndex + 1);
    }
  }

  updateRound2GridStatus() {
    this.wrongQuestions.forEach((q, idx) => {
      const btn = document.getElementById(`r2-grid-btn-${idx}`);
      if (!btn) return;

      btn.className = "grid-q-btn";
      if (idx === this.round2CurrentIndex) btn.classList.add("current");
      if (this.round2Answers[q.id] !== undefined) btn.classList.add("answered");
    });
  }

  confirmFinishRound2() {
    this.showConfirm(
      "Selesaikan Ujian?",
      "Yakin ingin menyelesaikan Kesempatan Kedua dan melihat Nilai Akhir & Leaderboard?",
      "🎯",
      () => {
        if (this.questionInterval) clearInterval(this.questionInterval);

        let correctR2 = 0;
        this.wrongQuestions.forEach(q => {
          if (this.round2Answers[q.id] === q.correct) {
            correctR2++;
          }
        });

        this.scoreRound2 = correctR2 * APP_CONFIG.ROUND_2_POINT;
        this.totalScore = Math.min(100, Math.round((this.scoreRound1 + this.scoreRound2) * 10) / 10);
        this.completed = true;

        this.finishExam();
      }
    );
  }

  // --- FASE 5: HASIL AKHIR & LEADERBOARD ---
  async finishExam(isRestore = false) {
    this.phase = "RESULT";
    this.completed = true;
    this.saveState();

    this.anticheat.stop();
    if (this.questionInterval) clearInterval(this.questionInterval);
    if (this.readingInterval) clearInterval(this.readingInterval);

    this.showScreen("screen-result");

    // Tampilkan Identitas Siswa di Layar Hasil
    const nameEl = document.getElementById("res-student-name");
    const classEl = document.getElementById("res-student-class");
    const avatarEl = document.getElementById("res-avatar-large");

    if (nameEl) nameEl.innerText = this.student.name || "Peserta Ujian";
    if (classEl) classEl.innerText = this.student.className || "-";
    if (avatarEl && this.student.name) {
      avatarEl.innerText = this.student.name.charAt(0).toUpperCase();
    }

    // Tampilkan Ringkasan Nilai
    const r1El = document.getElementById("res-round-1-score");
    const r2El = document.getElementById("res-round-2-score");
    const totEl = document.getElementById("res-total-score");

    if (r1El) r1El.innerText = Number(this.scoreRound1).toFixed(1);
    if (r2El) r2El.innerText = `+${Number(this.scoreRound2).toFixed(1)}`;
    if (totEl) totEl.innerText = Number(this.totalScore).toFixed(1);

    const violationsBadge = document.getElementById("res-violations-badge");
    if (violationsBadge) {
      const v = this.anticheat ? this.anticheat.violations : 0;
      violationsBadge.innerText = `${v} Pelanggaran`;
      if (v > 0) violationsBadge.style.color = "#f87171";
    }

    // Submit / Sync ke Leaderboard
    const entry = {
      name: this.student.name,
      className: this.student.className,
      round1: this.scoreRound1,
      round2: this.scoreRound2,
      totalScore: this.totalScore,
      violations: this.anticheat ? this.anticheat.violations : 0
    };

    const leaderboard = await LeaderboardManager.submitScore(entry);
    this.currentLeaderboardData = leaderboard;

    // Tampilkan Posisi Peringkat Siswa
    const myRankItem = leaderboard.find(item => 
      item.name && item.name.toLowerCase().trim() === this.student.name.toLowerCase().trim() &&
      item.className && item.className.toLowerCase().trim() === this.student.className.toLowerCase().trim()
    );

    const rankEl = document.getElementById("res-my-rank");
    const totalPartEl = document.getElementById("res-total-participants");

    if (myRankItem && rankEl) {
      rankEl.innerText = `#${myRankItem.rank}`;
    }
    if (totalPartEl) {
      totalPartEl.innerText = `dari ${leaderboard.length} Peserta`;
    }

    LeaderboardManager.renderTable(leaderboard, this.student.name);
    this.updateHomeLeaderboardBadge(leaderboard.length);

    // Bind tombol review
    const btnOpenReview = document.getElementById("btn-open-review");
    if (btnOpenReview) {
      btnOpenReview.onclick = () => {
        this.renderReview();
        this.showScreen("screen-review");
      };
    }

    const btnBackToResult = document.getElementById("btn-back-to-result");
    if (btnBackToResult) {
      btnBackToResult.onclick = () => this.showScreen("screen-result");
    }

    // Bind filter buttons
    document.querySelectorAll(".review-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".review-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        document.querySelectorAll(".review-card").forEach(card => {
          if (filter === "all") {
            card.removeAttribute("data-hidden");
          } else if (filter === "correct") {
            card.dataset.hidden = card.dataset.result !== "correct" ? "true" : "";
            if (!card.dataset.hidden) card.removeAttribute("data-hidden");
          } else if (filter === "wrong") {
            card.dataset.hidden = card.dataset.result === "correct" ? "true" : "";
            if (!card.dataset.hidden) card.removeAttribute("data-hidden");
          }
        });
      });
    });
  }

  // --- RENDER PEMBAHASAN SOAL ---
  renderReview() {
    const container = document.getElementById("review-list");
    if (!container) return;
    container.innerHTML = "";

    const LABELS = ["A", "B", "C", "D", "E"];

    this.questions.forEach((q, idx) => {
      const correctIdx  = q.correct;
      // Gabungkan jawaban ronde 1 dan ronde 2 (ronde 2 hanya soal ulangan)
      const r1Answer  = this.round1Answers[q.id];
      const r2Answer  = this.round2Answers[q.id];
      // Jawaban final yang dihitung: r1 jika ada, kalau tidak r2
      const studentAnswer = (r1Answer !== undefined) ? r1Answer : r2Answer;
      const isSkipped = (studentAnswer === undefined || studentAnswer === null);
      const isCorrect = !isSkipped && studentAnswer === correctIdx;
      const isWrong   = !isSkipped && !isCorrect;

      let cardClass = "review-card";
      let resultKey = "wrong";
      let statusLabel = "❌ Salah";
      let statusClass = "wrong";

      if (isCorrect) {
        cardClass += " is-correct";
        resultKey = "correct";
        statusLabel = "✅ Benar";
        statusClass = "correct";
      } else if (isSkipped) {
        cardClass += " is-skipped";
        resultKey = "skipped";
        statusLabel = "⏭ Kosong";
        statusClass = "skipped";
      } else {
        cardClass += " is-wrong";
      }

      // Bangun opsi HTML
      const optionsHTML = q.options.map((opt, i) => {
        let cls = "review-option";
        let icon = "";
        if (i === correctIdx) {
          cls += " is-answer-correct";
          icon = `<span class="opt-icon">✅</span>`;
        } else if (!isSkipped && i === studentAnswer) {
          cls += " is-student-wrong";
          icon = `<span class="opt-icon">❌</span>`;
        }
        return `
          <div class="${cls}">
            <span class="opt-label">${LABELS[i]}</span>
            <span>${opt}</span>
            ${icon}
          </div>`;
      }).join("");

      // Blok kode (opsional)
      const codeHTML = q.code
        ? `<pre class="review-code-block">${q.code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`
        : "";

      const card = document.createElement("div");
      card.className = cardClass;
      card.dataset.result = resultKey;
      card.innerHTML = `
        <div class="review-card-header">
          <span class="review-q-num">Soal ${idx + 1}</span>
          <span class="review-cat-tag">${q.category}</span>
          <span class="review-status-badge ${statusClass}">${statusLabel}</span>
        </div>
        <p class="review-q-text">${q.question}</p>
        ${codeHTML}
        <div class="review-options">${optionsHTML}</div>
        <div class="review-explanation">
          <strong>💡 Pembahasan</strong>
          ${q.explanation}
        </div>`;

      container.appendChild(card);
    });
  }



  filterLeaderboard(query) {
    if (!this.currentLeaderboardData) return;
    if (!query) {
      LeaderboardManager.renderTable(this.currentLeaderboardData, this.student.name);
      return;
    }
    const filtered = this.currentLeaderboardData.filter(item => 
      (item.name && item.name.toLowerCase().includes(query)) || 
      (item.className && item.className.toLowerCase().includes(query))
    );
    LeaderboardManager.renderTable(filtered, this.student.name);
  }

  // --- MODAL LEADERBOARD HALAMAN AWAL ---
  async openHomeLeaderboardModal() {
    const modal = document.getElementById("home-leaderboard-modal");
    if (!modal) return;

    modal.classList.add("active");

    const tbody = document.getElementById("home-leaderboard-tbody");
    const countEl = document.getElementById("home-leaderboard-count");
    const searchInput = document.getElementById("home-leaderboard-search");
    if (searchInput) searchInput.value = "";

    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center" style="padding: 3rem 1rem;">
            <div class="lb-spinner"></div>
            <p style="margin-top: 12px; color: var(--accent); font-weight: 500; font-size: 0.95rem;">
              Memuat klasemen peserta resmi terkini...
            </p>
          </td>
        </tr>
      `;
    }
    if (countEl) countEl.innerText = "Mengambil data peringkat...";

    try {
      const data = await LeaderboardManager.getLeaderboard();
      this.homeLeaderboardData = Array.isArray(data) ? data : [];

      // Update statistik ringkasan
      const stats = LeaderboardManager.getStats(this.homeLeaderboardData);
      const totalEl = document.getElementById("home-stat-total");
      const topEl = document.getElementById("home-stat-top");
      const avgEl = document.getElementById("home-stat-avg");

      if (totalEl) totalEl.innerText = stats.total;
      if (topEl) topEl.innerText = stats.total > 0 ? stats.topScore.toFixed(1) : "0.0";
      if (avgEl) avgEl.innerText = stats.total > 0 ? stats.avgScore.toFixed(1) : "0.0";

      if (countEl) {
        countEl.innerText = `${this.homeLeaderboardData.length} Peserta Terdaftar`;
      }

      LeaderboardManager.renderTable(this.homeLeaderboardData, this.student ? this.student.name : "", "home-leaderboard-tbody");
      this.updateHomeLeaderboardBadge(this.homeLeaderboardData.length);
    } catch (err) {
      if (tbody) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" class="text-center" style="padding: 2.5rem 1rem; color: var(--danger);">
              <div style="font-size: 2rem; margin-bottom: 8px;">⚠️</div>
              <strong>Gagal memuat data peringkat</strong>
              <p style="font-size: 0.85rem; margin-top: 4px; color: var(--text-muted);">${err.message || "Terjadi gangguan saat menghubungi server."}</p>
            </td>
          </tr>
        `;
      }
      if (countEl) countEl.innerText = "Gagal memuat";
    }
  }

  closeHomeLeaderboardModal() {
    const modal = document.getElementById("home-leaderboard-modal");
    if (modal) {
      modal.classList.remove("active");
    }
  }

  filterHomeLeaderboard(query) {
    if (!this.homeLeaderboardData) return;
    const countEl = document.getElementById("home-leaderboard-count");

    if (!query) {
      LeaderboardManager.renderTable(this.homeLeaderboardData, this.student ? this.student.name : "", "home-leaderboard-tbody");
      if (countEl) countEl.innerText = `${this.homeLeaderboardData.length} Peserta Terdaftar`;
      return;
    }

    const filtered = this.homeLeaderboardData.filter(item => 
      (item.name && item.name.toLowerCase().includes(query)) || 
      (item.className && item.className.toLowerCase().includes(query))
    );

    LeaderboardManager.renderTable(filtered, this.student ? this.student.name : "", "home-leaderboard-tbody");
    if (countEl) {
      countEl.innerText = `Ditemukan ${filtered.length} dari ${this.homeLeaderboardData.length} peserta`;
    }
  }

  async updateHomeLeaderboardBadge(count = null) {
    const summaryEl = document.getElementById("home-ranking-summary");
    if (!summaryEl) return;

    if (count !== null) {
      if (count > 0) {
        summaryEl.innerText = `${count} siswa telah menyelesaikan simulasi. Klik untuk melihat klasemen.`;
      } else {
        summaryEl.innerText = "Belum ada peserta yang selesai. Jadilah yang pertama di leaderboard!";
      }
      return;
    }

    try {
      const data = await LeaderboardManager.getLeaderboard();
      if (Array.isArray(data) && data.length > 0) {
        summaryEl.innerText = `${data.length} siswa telah menyelesaikan simulasi. Klik untuk melihat klasemen.`;
      } else {
        summaryEl.innerText = "Belum ada peserta yang selesai. Jadilah yang pertama di leaderboard!";
      }
    } catch (e) {
      // Abaikan jika ada kendala jaringan saat init
    }
  }

  // --- ANTI-CHEAT HANDLERS ---
  handleViolation(count, max, reason) {
    const modal = document.getElementById("anticheat-modal");
    if (!modal) return;

    document.getElementById("violation-count-text").innerText = `${count} / ${max}`;
    document.getElementById("violation-reason-text").innerText = reason;
    modal.classList.add("active");

    const btnDismiss = document.getElementById("btn-dismiss-violation");
    if (btnDismiss) {
      btnDismiss.onclick = () => {
        modal.classList.remove("active");
        if (APP_CONFIG.ENABLE_FULLSCREEN) {
          this.anticheat.requestFullscreen();
        }
      };
    }
  }

  handleDisqualification() {
    this.showAlert(
      "Ujian Dihentikan",
      "PERINGATAN KERAS: Batas maksimal pelanggaran (3 kali) telah terlampaui. Ujian dihentikan dan disubmit secara otomatis demi integritas akademik.",
      "🚫",
      () => {
        const modal = document.getElementById("anticheat-modal");
        if (modal) modal.classList.remove("active");

        this.finishRound1();
        this.totalScore = this.scoreRound1;
        this.completed = true;
        this.finishExam();
      }
    );
  }
}

// Inisialisasi saat window dimuat
window.addEventListener("DOMContentLoaded", () => {
  window.examEngine = new ExamEngine();
  window.examEngine.init();
});

// Helper testing untuk pengawas/penguji mereset sesi lokal di device pengujian:
window.resetExamSession = function() {
  if (confirm("Reset sesi ujian lokal dan mulai dari awal?")) {
    localStorage.removeItem("OSNK_CBT_STATE");
    window.location.reload();
  }
};

