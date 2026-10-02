// Modul Proteksi Integritas Akademik & Anti-Curang Klien (W3C Page Visibility & Clipboard)

class AntiCheatGuard {
  constructor(options = {}) {
    this.maxViolations = options.maxViolations || 3;
    this.onViolation = options.onViolation || null;
    this.onMaxViolationsExceeded = options.onMaxViolationsExceeded || null;
    this.violations = 0;
    this.isActive = false;
    this.lastBlurTime = 0;
  }

  start() {
    this.isActive = true;
    this.violations = 0;
    this.bindEvents();
  }

  stop() {
    this.isActive = false;
    this.unbindEvents();
  }

  bindEvents() {
    // 1. Blokir Klik Kanan (Context Menu)
    this._handleContextMenu = (e) => {
      if (!this.isActive) return;
      e.preventDefault();
      this.showToast("Klik kanan dinonaktifkan demi integritas ujian.");
      return false;
    };
    document.addEventListener("contextmenu", this._handleContextMenu);

    // 2. Blokir Copy, Cut, Paste
    this._handleCopy = (e) => {
      if (!this.isActive) return;
      e.preventDefault();
      this.showToast("Menyalin teks dinonaktifkan.");
      return false;
    };
    this._handleCut = (e) => {
      if (!this.isActive) return;
      e.preventDefault();
      return false;
    };
    this._handlePaste = (e) => {
      if (!this.isActive) return;
      e.preventDefault();
      return false;
    };

    document.addEventListener("copy", this._handleCopy);
    document.addEventListener("cut", this._handleCut);
    document.addEventListener("paste", this._handlePaste);

    // 3. Blokir Shortcut Keyboard (F12, Inspect, Ctrl+U, Print, dll)
    this._handleKeyDown = (e) => {
      if (!this.isActive) return;

      // F12
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        this.recordViolation("Percobaan membuka Developer Tools (F12)");
        return false;
      }

      // Ctrl + Shift + I/J/C
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) {
        e.preventDefault();
        this.recordViolation("Percobaan Inspect Element (Ctrl+Shift+I/J/C)");
        return false;
      }

      // Ctrl + U (View Source)
      if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        this.recordViolation("Percobaan melihat Source Code (Ctrl+U)");
        return false;
      }

      // Ctrl + S (Save Page) & Ctrl + P (Print)
      if (e.ctrlKey && (e.key === "s" || e.key === "S" || e.key === "p" || e.key === "P")) {
        e.preventDefault();
        return false;
      }

      // Ctrl + C / Ctrl + V
      if (e.ctrlKey && (e.key === "c" || e.key === "C" || e.key === "v" || e.key === "V" || e.key === "x" || e.key === "X")) {
        e.preventDefault();
        this.showToast("Shortcut clipboard dinonaktifkan.");
        return false;
      }
    };
    document.addEventListener("keydown", this._handleKeyDown);

    // 4. Deteksi Pindah Tab (W3C Page Visibility API) & Window Blur
    this._handleVisibilityChange = () => {
      if (!this.isActive) return;
      if (document.hidden) {
        this.recordViolation("Meninggalkan tab / berpindah ke aplikasi lain");
      }
    };
    document.addEventListener("visibilitychange", this._handleVisibilityChange);

    this._handleWindowBlur = () => {
      if (!this.isActive) return;
      const now = Date.now();
      // Debounce blur dalam rentang 1.5 detik agar tidak terhitung ganda dengan visibilitychange
      if (now - this.lastBlurTime > 1500) {
        this.lastBlurTime = now;
        this.recordViolation("Jendela ujian kehilangan fokus");
      }
    };
    window.addEventListener("blur", this._handleWindowBlur);
  }

  unbindEvents() {
    if (this._handleContextMenu) document.removeEventListener("contextmenu", this._handleContextMenu);
    if (this._handleCopy) document.removeEventListener("copy", this._handleCopy);
    if (this._handleCut) document.removeEventListener("cut", this._handleCut);
    if (this._handlePaste) document.removeEventListener("paste", this._handlePaste);
    if (this._handleKeyDown) document.removeEventListener("keydown", this._handleKeyDown);
    if (this._handleVisibilityChange) document.removeEventListener("visibilitychange", this._handleVisibilityChange);
    if (this._handleWindowBlur) window.removeEventListener("blur", this._handleWindowBlur);
  }

  recordViolation(reason) {
    if (!this.isActive) return;
    this.violations++;
    console.warn(`[AntiCheat] Pelanggaran #${this.violations}: ${reason}`);

    if (this.onViolation) {
      this.onViolation(this.violations, this.maxViolations, reason);
    }

    if (this.violations >= this.maxViolations) {
      if (this.onMaxViolationsExceeded) {
        this.onMaxViolationsExceeded(this.violations);
      }
    }
  }

  requestFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

  showToast(msg) {
    const toast = document.getElementById("anticheat-toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }
}
