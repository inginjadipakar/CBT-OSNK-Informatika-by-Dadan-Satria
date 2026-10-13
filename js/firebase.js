// Firebase Initialization — CBT AmanatulUmmah
// Menggunakan Firebase Firestore untuk leaderboard global multi-device + realtime

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC2fJ1XH8Y7409eIqmqyYNS9j4Ocng5SPE",
  authDomain: "cbt-amanatulummah.firebaseapp.com",
  projectId: "cbt-amanatulummah",
  storageBucket: "cbt-amanatulummah.firebasestorage.app",
  messagingSenderId: "551017395724",
  appId: "1:551017395724:web:9911235c0a40804780e029",
  measurementId: "G-SRE239XPVZ"
};

// Inisialisasi Firebase (hanya sekali)
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

// Expose Firestore instance ke global scope agar bisa diakses semua modul
window.db = firebase.firestore();

// Enable offline persistence (data tersimpan lokal jika offline, sync saat online)
window.db.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if (err.code === "failed-precondition") {
    console.warn("Firebase Persistence: Multiple tabs open, persistence enabled in first tab only.");
  } else if (err.code === "unimplemented") {
    console.warn("Firebase Persistence: Browser does not support persistence.");
  }
});

console.log("✅ Firebase Firestore terhubung ke project:", FIREBASE_CONFIG.projectId);
