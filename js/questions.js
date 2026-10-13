// Soal-soal OSNK Informatika — Bab I Dasar Pemrograman C++
// Seluruh soal wajib mengacu pada:
// "Bab I Dasar Pemrograman Modul Persiapan OSN Informatika" (MAN Purworejo)
// Topik: Struktur Dasar C++, Tipe Data, Variabel, Operator, Percabangan,
//        Perulangan, Fungsi (termasuk Rekursif), Gerbang Logika,
//        Kombinasi, Permutasi, Himpunan

const OSNK_QUESTIONS = [

  // ======== STRUKTUR DASAR C++ ========

  {
    id: "q01",
    category: "Struktur Dasar C++",
    question: "Dalam bahasa pemrograman C++, bagian yang biasanya digunakan untuk menyertakan file header standar yang diperlukan program disebut...",
    options: [
      "Fungsi main",
      "Header",
      "Statement",
      "Komentar",
      "Namespace"
    ],
    correct: 1
  },
  {
    id: "q02",
    category: "Struktur Dasar C++",
    question: "Setiap program C++ harus memiliki fungsi yang akan dieksekusi pertama kali saat program dijalankan. Fungsi tersebut adalah...",
    options: [
      "fungsi print()",
      "fungsi start()",
      "fungsi main()",
      "fungsi begin()",
      "fungsi run()"
    ],
    correct: 2
  },
  {
    id: "q03",
    category: "Struktur Dasar C++",
    question: "Dalam C++, simbol yang digunakan untuk komentar satu baris adalah...",
    options: [
      "/* ... */",
      "# ...",
      "<!-- ... -->",
      "// ...",
      "** ..."
    ],
    correct: 3
  },
  {
    id: "q04",
    category: "Struktur Dasar C++",
    question: "Simbol yang digunakan untuk komentar lebih dari satu baris dalam C++ adalah...",
    options: [
      "// ... //",
      "/* ... */",
      "# ... #",
      "<!-- ... -->",
      "** ... **"
    ],
    correct: 1
  },
  {
    id: "q05",
    category: "Struktur Dasar C++",
    question: "Fungsi adalah blok kode yang dapat dipanggil dari tempat lain dalam program dan dapat menerima argumen serta mengembalikan nilai. Pernyataan ini merujuk pada komponen struktur dasar C++ yang bernama...",
    options: [
      "Header",
      "Statement",
      "Variabel",
      "Fungsi",
      "Komentar"
    ],
    correct: 3
  },

  // ======== TIPE DATA ========

  {
    id: "q06",
    category: "Tipe Data C++",
    question: "Tipe data yang digunakan untuk menyimpan angka bulat dalam C++ ditulis dengan keyword...",
    options: [
      "float",
      "double",
      "bool",
      "char",
      "int"
    ],
    correct: 4
  },
  {
    id: "q07",
    category: "Tipe Data C++",
    question: "Tipe data float dalam C++ digunakan untuk menyimpan...",
    options: [
      "Angka bulat",
      "Angka pecahan",
      "Nilai true atau false",
      "Satu karakter",
      "Kumpulan karakter"
    ],
    correct: 1
  },
  {
    id: "q08",
    category: "Tipe Data C++",
    question: "Tipe data yang berisi nilai true atau false dalam C++ ditulis dengan keyword...",
    options: [
      "int",
      "float",
      "char",
      "bool",
      "string"
    ],
    correct: 3
  },
  {
    id: "q09",
    category: "Tipe Data C++",
    question: "Tipe data char dalam C++ digunakan untuk menyimpan...",
    options: [
      "Angka desimal",
      "Kumpulan karakter",
      "1 karakter",
      "Nilai boolean",
      "Angka bulat"
    ],
    correct: 2
  },
  {
    id: "q10",
    category: "Tipe Data C++",
    question: "Perhatikan deklarasi array berikut:\nstring NamaSiswa[6] = {\"andi\", \"agus\", \"budi\", \"bayu\", \"caca\", \"cucu\"};\nData \"bayu\" berada pada index ke berapa?",
    code: "string NamaSiswa[6] = {\"andi\", \"agus\", \"budi\", \"bayu\", \"caca\", \"cucu\"};",
    options: [
      "Index ke-0",
      "Index ke-1",
      "Index ke-2",
      "Index ke-3",
      "Index ke-4"
    ],
    correct: 3
  },
  {
    id: "q11",
    category: "Tipe Data C++",
    question: "Tipe data non-primitive yang digunakan untuk kumpulan karakter dalam C++ adalah...",
    options: [
      "int",
      "bool",
      "char",
      "float",
      "string"
    ],
    correct: 4
  },
  {
    id: "q12",
    category: "Tipe Data C++",
    question: "Dalam C++, cara penulisan tipe data array adalah...",
    options: [
      "nama_variabel<tipe_data>[ukuran]",
      "tipe_data nama_variabel[ukuran]",
      "array nama_variabel tipe_data[ukuran]",
      "[ukuran] tipe_data nama_variabel",
      "tipe_data[ukuran] nama_variabel"
    ],
    correct: 1
  },

  // ======== VARIABEL ========

  {
    id: "q13",
    category: "Variabel C++",
    question: "Berdasarkan aturan penamaan variabel dalam C++, karakter pertama dari nama variabel hanya boleh berupa...",
    options: [
      "Angka",
      "Simbol khusus seperti @",
      "Huruf dan underscore (_)",
      "Angka dan huruf",
      "Semua karakter ASCII"
    ],
    correct: 2
  },
  {
    id: "q14",
    category: "Variabel C++",
    question: "Dalam C++, variabel tidak boleh menggunakan kata-kata yang merupakan keyword. Manakah berikut ini yang merupakan contoh keyword yang tidak boleh dipakai sebagai nama variabel?",
    options: [
      "nilai, skor, angka",
      "int, for, while",
      "nama, kelas, alamat",
      "jumlah, total, hasil",
      "data, input, output"
    ],
    correct: 1
  },
  {
    id: "q15",
    category: "Variabel C++",
    question: "Untuk mendeklarasikan variabel konstanta (yang nilainya selalu tetap) dalam C++, digunakan keyword...",
    options: [
      "static",
      "final",
      "constant",
      "const",
      "fixed"
    ],
    correct: 3
  },

  // ======== OPERATOR ========

  {
    id: "q16",
    category: "Operator C++",
    question: "Operator % (persen) dalam C++ disebut operator modulo yang berfungsi untuk...",
    options: [
      "Pembagian biasa",
      "Perkalian",
      "Sisa hasil bagi",
      "Pangkat",
      "Persentase"
    ],
    correct: 2
  },
  {
    id: "q17",
    category: "Operator C++",
    question: "Jika a = 7, berapakah hasil dari a += 3 dalam C++?",
    code: "int a = 7;\na += 3;\ncout << a;",
    options: [
      "7",
      "3",
      "73",
      "10",
      "4"
    ],
    correct: 3
  },
  {
    id: "q18",
    category: "Operator C++",
    question: "Operator && dalam C++ disebut operator...",
    options: [
      "Or",
      "Not",
      "And",
      "Xor",
      "Nand"
    ],
    correct: 2
  },
  {
    id: "q19",
    category: "Operator C++",
    question: "Hasil dari ekspresi: true && false dalam C++ adalah...",
    options: [
      "true",
      "false",
      "null",
      "1",
      "undefined"
    ],
    correct: 1
  },
  {
    id: "q20",
    category: "Operator C++",
    question: "Hasil dari ekspresi: true || false dalam C++ adalah...",
    options: [
      "false",
      "null",
      "0",
      "true",
      "undefined"
    ],
    correct: 3
  },
  {
    id: "q21",
    category: "Operator C++",
    question: "Hasil dari ekspresi: !false dalam C++ adalah...",
    options: [
      "false",
      "null",
      "true",
      "0",
      "error"
    ],
    correct: 2
  },
  {
    id: "q22",
    category: "Operator C++",
    question: "Operator a++ dalam C++ (increment) artinya...",
    options: [
      "a dikali 2",
      "a dikurangi 1",
      "a dibagi 2",
      "a ditambah 1",
      "a pangkat 2"
    ],
    correct: 3
  },

  // ======== PERCABANGAN ========

  {
    id: "q23",
    category: "Percabangan C++",
    question: "Struktur percabangan yang digunakan untuk menjalankan sebuah blok kode jika kondisi tertentu terpenuhi (tanpa alternatif) adalah...",
    options: [
      "switch",
      "if else",
      "if else if",
      "if",
      "while"
    ],
    correct: 3
  },
  {
    id: "q24",
    category: "Percabangan C++",
    question: "Struktur IF ELSE digunakan untuk...",
    options: [
      "Menjalankan blok kode tanpa kondisi",
      "Menjalankan blok kode jika kondisi terpenuhi, dan blok kode lain jika tidak terpenuhi",
      "Mengulang blok kode selama kondisi terpenuhi",
      "Mendeklarasikan fungsi",
      "Memeriksa lebih dari dua kondisi sekaligus"
    ],
    correct: 1
  },
  {
    id: "q25",
    category: "Percabangan C++",
    question: "Perhatikan kode berikut. Jika variabel nilai = 85, output yang ditampilkan adalah...",
    code: "if (nilai >= 90) {\n  cout << \"Grade A\";\n} else if (nilai >= 80) {\n  cout << \"Grade B\";\n} else if (nilai >= 70) {\n  cout << \"Grade C\";\n} else {\n  cout << \"Grade D\";\n}",
    options: [
      "Grade A",
      "Grade B",
      "Grade C",
      "Grade D",
      "Tidak ada output"
    ],
    correct: 1
  },
  {
    id: "q26",
    category: "Percabangan C++",
    question: "Struktur SWITCH digunakan untuk...",
    options: [
      "Mengulang blok kode selama kondisi terpenuhi",
      "Membuat fungsi baru",
      "Mengecek nilai sebuah variabel dan menjalankan blok kode sesuai nilainya",
      "Mendeklarasikan tipe data baru",
      "Menginisialisasi array"
    ],
    correct: 2
  },
  {
    id: "q27",
    category: "Percabangan C++",
    question: "Dalam struktur SWITCH, keyword yang digunakan untuk mengakhiri setiap case agar tidak jatuh ke case berikutnya adalah...",
    options: [
      "end",
      "stop",
      "exit",
      "return",
      "break"
    ],
    correct: 4
  },
  {
    id: "q28",
    category: "Percabangan C++",
    question: "Dalam struktur SWITCH, jika tidak ada case yang cocok dengan nilai variabel, blok kode yang dijalankan adalah...",
    options: [
      "case pertama",
      "case terakhir",
      "default",
      "Program berhenti",
      "Tidak ada blok yang dijalankan"
    ],
    correct: 2
  },

  // ======== PERULANGAN ========

  {
    id: "q29",
    category: "Perulangan C++",
    question: "Perulangan FOR digunakan ketika...",
    options: [
      "Jumlah iterasi tidak diketahui",
      "Kondisi harus dicek dulu sebelum eksekusi",
      "Blok kode harus dijalankan minimal satu kali",
      "Jumlah iterasi sudah diketahui sebelumnya",
      "Tidak ada kondisi apapun"
    ],
    correct: 3
  },
  {
    id: "q30",
    category: "Perulangan C++",
    question: "Perhatikan kode perulangan FOR berikut. Berapa kali perulangan ini dijalankan?",
    code: "for (int r = 0; r < 5; r++) {\n  cout << r << endl;\n}",
    options: [
      "4 kali",
      "5 kali",
      "6 kali",
      "0 kali",
      "Infinite loop"
    ],
    correct: 1
  },
  {
    id: "q31",
    category: "Perulangan C++",
    question: "Perbedaan utama perulangan DO-WHILE dengan WHILE adalah...",
    options: [
      "DO-WHILE menggunakan kondisi di awal",
      "DO-WHILE tidak memiliki kondisi",
      "DO-WHILE selalu dijalankan minimal satu kali meskipun kondisi tidak terpenuhi",
      "DO-WHILE hanya untuk perulangan dengan jumlah iterasi tetap",
      "DO-WHILE tidak bisa digunakan dengan increment"
    ],
    correct: 2
  },
  {
    id: "q32",
    category: "Perulangan C++",
    question: "Perulangan WHILE digunakan ketika...",
    options: [
      "Jumlah iterasi sudah pasti diketahui",
      "Blok kode harus dieksekusi setidaknya sekali",
      "Jumlah iterasi tidak diketahui sebelumnya dan terus berlangsung selama kondisi terpenuhi",
      "Perlu mendeklarasikan variabel baru",
      "Tidak ada kondisi untuk berhenti"
    ],
    correct: 2
  },
  {
    id: "q33",
    category: "Perulangan C++",
    question: "Infinite loop (perulangan tak terbatas) dalam while loop dapat terjadi jika...",
    options: [
      "Kondisi while selalu bernilai false",
      "Tidak ada statement dalam blok while",
      "Tidak ada perubahan nilai variabel yang digunakan dalam kondisi",
      "Variabel counter bertipe float",
      "Menggunakan operator -- bukan ++"
    ],
    correct: 2
  },

  // ======== FUNGSI ========

  {
    id: "q34",
    category: "Fungsi C++",
    question: "Fungsi yang sudah disediakan oleh bahasa C++ dan dapat digunakan tanpa perlu mendefinisikan ulang disebut...",
    options: [
      "Fungsi Pengguna",
      "Fungsi Rekursif",
      "Fungsi Standar (Built-in Function)",
      "Fungsi Anonim",
      "Fungsi Void"
    ],
    correct: 2
  },
  {
    id: "q35",
    category: "Fungsi C++",
    question: "Parameter dalam sebuah fungsi C++ adalah...",
    options: [
      "Nilai yang diberikan ke fungsi saat dipanggil",
      "Variabel yang didefinisikan dalam header fungsi untuk menerima input dari pemanggil",
      "Nilai yang dikembalikan oleh fungsi",
      "Nama fungsi itu sendiri",
      "Tipe data yang dikembalikan fungsi"
    ],
    correct: 1
  },
  {
    id: "q36",
    category: "Fungsi C++",
    question: "Argumen dalam sebuah fungsi C++ adalah...",
    options: [
      "Variabel yang didefinisikan dalam header fungsi",
      "Tipe data kembalian fungsi",
      "Nilai yang diberikan ke fungsi saat dipanggil",
      "Nama fungsi",
      "Kondisi berhenti rekursi"
    ],
    correct: 2
  },
  {
    id: "q37",
    category: "Fungsi C++",
    question: "Perintah return dalam C++ digunakan untuk...",
    options: [
      "Memulai perulangan",
      "Mendeklarasikan variabel baru",
      "Mengembalikan nilai dari fungsi dan mengakhiri eksekusi fungsi tersebut",
      "Membuat percabangan",
      "Menyertakan header file"
    ],
    correct: 2
  },
  {
    id: "q38",
    category: "Fungsi C++",
    question: "Fungsi REKURSIF adalah fungsi yang...",
    options: [
      "Tidak memiliki nilai kembalian",
      "Dipanggil dari fungsi main saja",
      "Memanggil dirinya sendiri secara berulang hingga kondisi berhenti terpenuhi",
      "Memiliki lebih dari satu parameter",
      "Tidak bisa menerima argumen"
    ],
    correct: 2
  },
  {
    id: "q39",
    category: "Fungsi C++",
    question: "Dalam fungsi rekursif, kondisi yang menentukan kapan rekursi dihentikan disebut...",
    options: [
      "Kondisi increment",
      "Kondisi loop",
      "Kondisi basis",
      "Kondisi switch",
      "Kondisi return void"
    ],
    correct: 2
  },
  {
    id: "q40",
    category: "Fungsi C++",
    question: "Nilai dari factorial(4) menggunakan definisi rekursif n! = n × (n-1)! dengan basis 0! = 1 adalah...",
    options: [
      "8",
      "12",
      "16",
      "24",
      "120"
    ],
    correct: 3
  },

  // ======== GERBANG LOGIKA ========

  {
    id: "q41",
    category: "Gerbang Logika",
    question: "Berdasarkan tabel kebenaran gerbang AND, output akan bernilai 1 (TRUE) hanya jika...",
    options: [
      "Salah satu input bernilai 1",
      "Semua input bernilai 0",
      "Kedua input bernilai 1",
      "Salah satu input bernilai 0",
      "Input A dan B berbeda"
    ],
    correct: 2
  },
  {
    id: "q42",
    category: "Gerbang Logika",
    question: "Berdasarkan tabel kebenaran gerbang OR, output bernilai 0 (FALSE) hanya jika...",
    options: [
      "Kedua input bernilai 1",
      "Salah satu input bernilai 1",
      "Kedua input bernilai 0",
      "Input A bernilai 1 dan B bernilai 0",
      "Input A bernilai 0 dan B bernilai 1"
    ],
    correct: 2
  },
  {
    id: "q43",
    category: "Gerbang Logika",
    question: "Perhatikan operasi logika berikut:\nP = ((not A) and B) or (((not C) or D) and E)\nQ = ((not A) or B) and (((not C) and (not D)) or (not E))\nR = P and Q\nJika A=True, B=True, C=True, D=True, E=False, berapakah nilai P, Q, dan R?",
    options: [
      "P=True, Q=True, R=True",
      "P=False, Q=True, R=True",
      "P=False, Q=True, R=False",
      "P=False, Q=False, R=False",
      "P=True, Q=False, R=False"
    ],
    correct: 2
  },
  {
    id: "q44",
    category: "Gerbang Logika",
    question: "Perhatikan operasi logika berikut:\nP = (A and B) or (C and (not D))\nQ = (A or C) and (B or (not D))\nR = P and Q\nJika A=True, B=False, C=True, D=False, berapakah nilai P, Q, dan R?",
    options: [
      "P=False, Q=True, R=False",
      "P=True, Q=False, R=False",
      "P=False, Q=False, R=False",
      "P=True, Q=True, R=True",
      "P=True, Q=True, R=False"
    ],
    correct: 3
  },
  {
    id: "q45",
    category: "Gerbang Logika",
    question: "Pak Dengklek mempunyai tiga variabel boolean P, Q, dan R. Ia ingin membuat operasi logika yang mengembalikan nilai TRUE jika dan hanya jika minimal DUA variabel bernilai TRUE. Operasi logika mana yang memenuhi?",
    options: [
      "(P or Q or R) and (not P or not Q or not R)",
      "(not (P or Q)) or (not (Q or R)) or (not (R or P))",
      "(not (P and Q)) and (not (Q and R)) and (not (R and P))",
      "(P and Q) or (Q and R) or (R and P)",
      "(P or Q) and (Q or R) and (R or P)"
    ],
    correct: 3
  },
  {
    id: "q46",
    category: "Gerbang Logika",
    question: "Berdasarkan tabel kebenaran gerbang XOR, output bernilai 1 (TRUE) jika...",
    options: [
      "Kedua input bernilai 1",
      "Kedua input bernilai 0",
      "Kedua input bernilai sama",
      "Kedua input berbeda (salah satu 0, lainnya 1)",
      "Salah satu input bernilai 0"
    ],
    correct: 3
  },

  // ======== KOMBINASI ========

  {
    id: "q47",
    category: "Kombinasi",
    question: "Kombinasi nCr digunakan untuk menghitung banyaknya cara memilih r objek dari n objek yang tersedia, dengan...",
    options: [
      "Memperhatikan urutan pemilihan",
      "Tidak memperhatikan urutan pemilihan",
      "Memperhatikan posisi masing-masing objek",
      "Menggunakan perulangan",
      "Mengurutkan objek dari kecil ke besar"
    ],
    correct: 1
  },
  {
    id: "q48",
    category: "Kombinasi",
    question: "Terdapat 5 anak (A, B, C, D, E) yang akan dipilih 3 anak untuk mengikuti kompetisi. Berapa banyak cara yang mungkin?",
    options: [
      "5",
      "10",
      "15",
      "20",
      "60"
    ],
    correct: 1
  },

  // ======== PERMUTASI ========

  {
    id: "q49",
    category: "Permutasi",
    question: "Perbedaan utama antara Permutasi dan Kombinasi adalah...",
    options: [
      "Permutasi tidak menggunakan faktorial, Kombinasi menggunakan faktorial",
      "Permutasi memperhatikan urutan, Kombinasi tidak memperhatikan urutan",
      "Permutasi untuk benda tak sejenis, Kombinasi untuk benda sejenis",
      "Permutasi selalu menghasilkan nilai lebih kecil dari Kombinasi",
      "Permutasi menggunakan rumus nCr, Kombinasi menggunakan nPr"
    ],
    correct: 1
  },
  {
    id: "q50",
    category: "Permutasi",
    question: "Anda memiliki 5 buku berbeda dan ingin mengatur 3 di antaranya dalam urutan tertentu di rak buku. Berapa banyak cara yang mungkin? (Gunakan rumus nPr = n! / (n-r)!)",
    options: [
      "10",
      "20",
      "30",
      "60",
      "120"
    ],
    correct: 3
  }

];
