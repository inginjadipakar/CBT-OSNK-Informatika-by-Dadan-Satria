// Bank 50 Soal Latihan OSNK Informatika (Pemrograman C++)
// Diperkaya materi Modul OSN Informatika Bab 1 & Modul C++ SMA Dadan Satria

const OSNK_QUESTIONS = [
  {
    "id": 1,
    "category": "Sintaksis & Fast I/O",
    "question": "Perhatikan potongan kode C++ berikut. Manakah pernyataan yang paling tepat mengenai fungsi dari baris `ios_base::sync_with_stdio(false);`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // ...\n    return 0;\n}",
    "options": [
      "Memutus sinkronisasi antara stream C++ (cin/cout) dengan stream standar C (scanf/printf) untuk mempercepat proses I/O",
      "Mengubah urutan input dari descending menjadi ascending secara otomatis",
      "Mengaktifkan alokasi memori dinamis otomatis untuk seluruh variabel tipe integer",
      "Mencegah terjadinya integer overflow pada variabel signed int 32-bit",
      "Menutup seluruh file buffer sebelum program dieksekusi oleh compiler"
    ],
    "correct": 0,
    "explanation": "`ios_base::sync_with_stdio(false)` menonaktifkan sinkronisasi antara iostream C++ dan stdio C, sehingga operasi input/output C++ berjalan jauh lebih cepat dalam batasan waktu ujian pemrograman."
  },
  {
    "id": 2,
    "category": "Aturan Identifier Variabel",
    "question": "Berdasarkan aturan baku sintaksis C++, manakah di antara pilihan berikut yang merupakan nama variabel (identifier) yang TIDAK SAH (menyebabkan kompilasi error)?",
    "code": "// Deklarasi variabel:\n// Manakah identifier yang melanggar aturan C++?",
    "options": [
      "_jumlahNilai",
      "total_skor2",
      "3buku",
      "NamaSiswa",
      "nilaiAkhir"
    ],
    "correct": 2,
    "explanation": "Dalam aturan penamaan identifier C++, nama variabel TIDAK BOLEH diawali oleh angka (digit). Nama variabel seperti 3buku melanggar aturan sintaksis dan memicu kompilasi error. Identifier hanya boleh diawali huruf atau garis bawah (_)."
  },
  {
    "id": 3,
    "category": "Tipe Data & Overflow",
    "question": "Apakah output dari potongan program C++ berikut pada sistem 32-bit/64-bit standar?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 2147483647;\n    a = a + 1;\n    cout << a;\n    return 0;\n}",
    "options": [
      "2147483648",
      "0",
      "-2147483648",
      "Kompilasi Error",
      "Runtime Error: Overflow Exception"
    ],
    "correct": 2,
    "explanation": "2147483647 adalah nilai maksimum signed integer 32-bit ($2^{31} - 1$). Menambahkan 1 menyebabkan wraparound (overflow) ke nilai negatif terkecil yaitu $-2147483648$ (representasi Two's Complement)."
  },
  {
    "id": 4,
    "category": "Konstanta & Variabel Read-Only",
    "question": "Perhatikan potongan kode C++ berikut. Apakah yang terjadi saat kode tersebut dikompilasi?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14;\n    PI = 3.14159;\n    cout << PI;\n    return 0;\n}",
    "options": [
      "Mencetak 3.14",
      "Mencetak 3.14159",
      "Kompilasi error: assignment of read-only variable",
      "Mencetak 3",
      "Runtime error: Segmentation Fault"
    ],
    "correct": 2,
    "explanation": "Keyword const menjadikan variabel berstatus read-only (nilainya mutlak). Mencoba menugaskan nilai baru (PI = 3.14159;) pada variabel konstanta akan langsung menghasilkan kompilasi error: assignment of read-only variable."
  },
  {
    "id": 5,
    "category": "Operator Aritmatika & Modulo",
    "question": "Berapakah hasil dari evaluasi ekspresi berikut pada C++?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = -19 % 4;\n    cout << x;\n    return 0;\n}",
    "options": [
      "1",
      "-3",
      "3",
      "-1",
      "Kompilasi error karena modulus negatif tidak terdefinisi"
    ],
    "correct": 1,
    "explanation": "Dalam standar C++11 ke atas, tanda dari hasil operasi modulus `%` selalu mengikuti tanda dari operan pertama (kiri). $19 = 4 \\times 4 + 3$, sehingga $-19 = 4 \\times (-4) - 3$. Hasilnya adalah -3."
  },
  {
    "id": 6,
    "category": "Operator Bitwise",
    "question": "Berapakah output dari kode C++ berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 29; // 0001 1101\n    int b = 15; // 0000 1111\n    cout << (a & b) << \" \" << (a ^ b);\n    return 0;\n}",
    "options": [
      "15 14",
      "13 18",
      "13 16",
      "29 15",
      "14 19"
    ],
    "correct": 1,
    "explanation": "29 = 11101 biner, 15 = 01111 biner. Operasi AND: 11101 & 01111 = 01101 (13 desimal). Operasi XOR: 11101 ^ 01111 = 10010 (18 desimal)."
  },
  {
    "id": 7,
    "category": "Operator Bitwise Shift",
    "question": "Perhatikan kode berikut. Berapakah nilai yang dicetak?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 6;\n    int y = (x << 3) + (x >> 1);\n    cout << y;\n    return 0;\n}",
    "options": [
      "48",
      "27",
      "54",
      "51",
      "33"
    ],
    "correct": 3,
    "explanation": "Left shift `x << 3` ekuivalen dengan $6 \\times 2^3 = 6 \\times 8 = 48$. Right shift `x >> 1` ekuivalen dengan $\\lfloor 6 / 2^1 \\rfloor = 3$. Maka $48 + 3 = 51$."
  },
  {
    "id": 8,
    "category": "Trik Bitwise",
    "question": "Ekspresi `(n & (n - 1)) == 0` pada bilangan bulat positif `n` bernilai true jika dan hanya jika:",
    "code": "bool cek(int n) {\n    return (n > 0) && ((n & (n - 1)) == 0);\n}",
    "options": [
      "n merupakan bilangan pangkat dua (power of two)",
      "n adalah kelipatan bilangan 4",
      "n adalah bilangan prima",
      "n adalah bilangan ganjil",
      "n adalah bilangan kuadrat sempurna"
    ],
    "correct": 0,
    "explanation": "Bilangan pangkat dua ($2^k$) hanya memiliki satu bit 1 di posisi tertinggi (misal 8 = 1000b). Maka $n-1$ akan membalik seluruh bit di bawahnya (7 = 0111b). Operasi AND keduanya menghasilkan 0 jika dan hanya jika n adalah perpangkatan 2."
  },
  {
    "id": 9,
    "category": "Operator Logika & Short-Circuit",
    "question": "Berapakah nilai yang dicetak pada variabel `b` di akhir program?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    if (a < 5 && ++b > 20) {\n        a += 5;\n    }\n    cout << b;\n    return 0;\n}",
    "options": [
      "25",
      "21",
      "20",
      "10",
      "Kompilasi error"
    ],
    "correct": 2,
    "explanation": "Karena `a < 5` (10 < 5) bernilai false, C++ menerapkan short-circuit evaluation. Bagian kanan (`++b > 20`) tidak dieksekusi sama sekali, sehingga nilai `b` tetap 20."
  },
  {
    "id": 10,
    "category": "Operator Increment & Decrement",
    "question": "Berapakah output dari kode C++ berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int y = x++ + ++x;\n    cout << x << \" \" << y;\n    return 0;\n}",
    "options": [
      "7 14",
      "7 11",
      "6 12",
      "7 12",
      "6 11"
    ],
    "correct": 3,
    "explanation": "Evaluasi: `x++` mengembalikan nilai lama 5 (lalu x naik jadi 6). Kemudian `++x` menaikkan x menjadi 7 dan mengembalikan 7. Penjumlahan $5 + 7 = 12$, dan nilai akhir x adalah 7."
  },
  {
    "id": 11,
    "category": "Operator Ternary",
    "question": "Berapakah nilai dari `val` setelah baris berikut dijalankan?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 8, b = 12, c = 5;\n    int val = (a > b) ? a : (b > c ? (c > a ? c : a) : b);\n    cout << val;\n    return 0;\n}",
    "options": [
      "8",
      "12",
      "5",
      "0",
      "1"
    ],
    "correct": 0,
    "explanation": "`a > b` (8 > 12) bernilai false. Masuk ke bagian else: `b > c` (12 > 5) bernilai true. Masuk ke nested: `c > a` (5 > 8) bernilai false, sehingga mengembalikan `a` yang bernilai 8."
  },
  {
    "id": 12,
    "category": "Operator Bitwise NOT",
    "question": "Berapakah nilai dari ekspresi `~x` jika `int x = 12;` pada representasi signed Two's Complement?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 12;\n    cout << ~x;\n    return 0;\n}",
    "options": [
      "-12",
      "-13",
      "13",
      "-11",
      "0"
    ],
    "correct": 1,
    "explanation": "Rumus matematis bitwise NOT pada signed integer adalah `~x = -(x + 1)`. Untuk $x = 12$, hasilnya adalah $-(12 + 1) = -13$."
  },
  {
    "id": 13,
    "category": "Percabangan Switch Case Fallthrough",
    "question": "Perhatikan kode program berikut dengan cermat. Berapakah outputnya?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int k = 2;\n    int ans = 10;\n    switch(k) {\n        case 1: ans += 5;\n        case 2: ans += 10;\n        case 3: ans += 15;\n        default: ans += 20;\n    }\n    cout << ans;\n    return 0;\n}",
    "options": [
      "20",
      "35",
      "55",
      "45",
      "10"
    ],
    "correct": 2,
    "explanation": "Karena tidak ada pernyataan `break;`, eksekusi kode mengalami 'fallthrough' dari case 2: ans += 10 (20), lanjut ke case 3: ans += 15 (35), lanjut ke default: ans += 20 (55). Nilai akhir adalah 55."
  },
  {
    "id": 14,
    "category": "Percabangan Nested If",
    "question": "Berapakah nilai akhir dari variabel `total`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 25, total = 0;\n    if (a < 20)\n        if (b < 20)\n            total += 1;\n        else\n            total += 2;\n    else\n        total += 3;\n    cout << total;\n    return 0;\n}",
    "options": [
      "0",
      "1",
      "Kompilasi error karena tanda kurung kurawal tidak lengkap",
      "3",
      "2"
    ],
    "correct": 4,
    "explanation": "Aturan dangling-else: `else` berpasangan dengan `if` terdekat yang belum memiliki else. `a < 20` (15 < 20) bernilai true. Pada `if (b < 20)` bernilai false (25 < 20 salah), sehingga masuk ke `else` miliknya: `total += 2`."
  },
  {
    "id": 15,
    "category": "Kondisional & Tipe Boolean",
    "question": "Berapakah output dari kode berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int p = 0;\n    if (p = 5) {\n        cout << \"Benar: \" << p;\n    } else {\n        cout << \"Salah: \" << p;\n    }\n    return 0;\n}",
    "options": [
      "Salah: 0",
      "Benar: 5",
      "Benar: 0",
      "Salah: 5",
      "Kompilasi error karena assignment dalam if"
    ],
    "correct": 1,
    "explanation": "Ekspresi `p = 5` menggunakan operator assignment `=`, bukan perbandingan `==`. Ekspresi ini memberikan nilai 5 ke p dan bernilai 5. Di C++, setiap integer non-nol bernilai true, sehingga mencetak 'Benar: 5'."
  },
  {
    "id": 16,
    "category": "Percabangan & Karakter ASCII",
    "question": "Berapakah output yang dihasilkan oleh program berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch = 'F';\n    if (ch >= 'A' && ch <= 'Z') {\n        ch = ch + 32;\n    }\n    cout << ch;\n    return 0;\n}",
    "options": [
      "F",
      "f",
      "38",
      "Kompilasi error",
      "G"
    ],
    "correct": 1,
    "explanation": "Selisih kode ASCII huruf kecil dan huruf besar adalah 32 ('a' = 97, 'A' = 65). Menambahkan 32 pada 'F' (70) menghasilkan nilai ASCII 102 yang merupakan karakter 'f'."
  },
  {
    "id": 17,
    "category": "Kondisional & Logika Boolean",
    "question": "Diberikan `bool p = true, q = false, r = true;`. Berapakah hasil dari `!(p || q) && (r || !q)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    bool p = true, q = false, r = true;\n    bool hasil = !(p || q) && (r || !q);\n    cout << boolalpha << hasil;\n    return 0;\n}",
    "options": [
      "false",
      "true",
      "1",
      "0",
      "Undefined"
    ],
    "correct": 0,
    "explanation": "`p || q` = true || false = true. Maka `!(p || q)` bernilai false. Karena operan kiri dari `&&` bernilai false, seluruh ekspresi bernilai false."
  },
  {
    "id": 18,
    "category": "Fungsi: Parameter vs Argumen",
    "question": "Diberikan definisi fungsi int pangkat_dua(int n) dan pemanggilannya pangkat_dua(5);. Manakah pernyataan terminologi yang paling tepat menurut konsep fungsi C++?",
    "code": "int pangkat_dua(int n) {\n    return n * n;\n}\n\nint main() {\n    int hasil = pangkat_dua(5);\n    return 0;\n}",
    "options": [
      "n adalah argumen aktual, sedangkan 5 adalah parameter formal",
      "Baik n maupun 5 keduanya disebut sebagai parameter formal",
      "n adalah parameter formal, sedangkan 5 adalah argumen aktual",
      "n dan 5 keduanya bertindak sebagai variabel global",
      "5 adalah parameter formal, sedangkan n adalah return type"
    ],
    "correct": 2,
    "explanation": "Parameter formal adalah variabel yang dideklarasikan pada bagian header fungsi (int n), sedangkan argumen aktual adalah nilai konkret atau variabel yang dilewatkan saat fungsi tersebut dipanggil (5)."
  },
  {
    "id": 19,
    "category": "Perulangan & Nested Loops",
    "question": "Berapakah nilai akhir dari variabel `hitung` setelah loop selesai dieksekusi?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int hitung = 0;\n    for (int i = 1; i <= 5; i++) {\n        for (int j = i; j <= 5; j++) {\n            hitung++;\n        }\n    }\n    cout << hitung;\n    return 0;\n}",
    "options": [
      "10",
      "25",
      "15",
      "20",
      "30"
    ],
    "correct": 2,
    "explanation": "Saat i = 1, j berjalan 5 kali. Saat i = 2, j berjalan 4 kali. Saat i = 3, 3 kali; i = 4, 2 kali; i = 5, 1 kali. Total = 5 + 4 + 3 + 2 + 1 = 15."
  },
  {
    "id": 20,
    "category": "Perulangan & Break/Continue",
    "question": "Berapakah nilai yang dicetak oleh program C++ berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) continue;\n        if (i > 7) break;\n        sum += i;\n    }\n    cout << sum;\n    return 0;\n}",
    "options": [
      "12",
      "9",
      "25",
      "15",
      "16"
    ],
    "correct": 4,
    "explanation": "Loop memeriksa angka ganjil (karena genap di-continue). i = 1 (sum = 1), i = 3 (sum = 1 + 3 = 4), i = 5 (sum = 4 + 5 = 9), i = 7 (sum = 9 + 7 = 16). Saat i = 9, kondisi `i > 7` terpenuhi sehingga loop di-break. Nilai sum = 16."
  },
  {
    "id": 21,
    "category": "Perulangan While & Tracing",
    "question": "Berapa kali kata 'OSNK' akan dicetak oleh perulangan berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 64;\n    while (x > 1) {\n        cout << \"OSNK \";\n        x >>= 1;\n    }\n    return 0;\n}",
    "options": [
      "5 kali",
      "6 kali",
      "7 kali",
      "8 kali",
      "Infinite loop"
    ],
    "correct": 1,
    "explanation": "Operasi `x >>= 1` membagi x dengan 2 setiap iterasi. Nilai x: 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1 (berhenti). Kata 'OSNK' dicetak saat x = 64, 32, 16, 8, 4, 2, yaitu tepat 6 kali."
  },
  {
    "id": 22,
    "category": "Perulangan Do-While",
    "question": "Berapakah output dari kode program berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    do {\n        a += 5;\n    } while (a < 10);\n    cout << a;\n    return 0;\n}",
    "options": [
      "15",
      "10",
      "20",
      "Kompilasi error",
      "Infinite loop"
    ],
    "correct": 0,
    "explanation": "Perulangan `do-while` selalu mengeksekusi tubuh loop minimal satu kali sebelum mengecek kondisi. Variabel `a` bertambah menjadi 15. Lalu kondisi `15 < 10` bernilai false sehingga perulangan berhenti. Nilai `a` adalah 15."
  },
  {
    "id": 23,
    "category": "Perulangan Semicolon Trap",
    "question": "Perhatikan kode berikut. Berapakah nilai `s` yang dicetak?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int s = 0;\n    for (int i = 1; i <= 5; i++);\n    {\n        s += 10;\n    }\n    cout << s;\n    return 0;\n}",
    "options": [
      "50",
      "15",
      "0",
      "10",
      "Kompilasi error karena ada titik koma setelah for"
    ],
    "correct": 3,
    "explanation": "Perhatikan tanda titik koma `;` tepat di akhir baris `for`. Ini adalah empty loop body. Loop `for` selesai berjalan tanpa aksi apapun. Blok `{ s += 10; }` dieksekusi secara independen tepat satu kali. Nilai `s` adalah 10."
  },
  {
    "id": 24,
    "category": "Perulangan & Pola Deret",
    "question": "Berapakah output dari perulangan berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int res = 0;\n    for (int i = 1; i <= 4; i++) {\n        for (int j = 1; j <= i; j++) {\n            res += j;\n        }\n    }\n    cout << res;\n    return 0;\n}",
    "options": [
      "10",
      "30",
      "15",
      "25",
      "20"
    ],
    "correct": 4,
    "explanation": "i=1: j=1 -> 1. i=2: j=1+2 -> 3. i=3: j=1+2+3 -> 6. i=4: j=1+2+3+4 -> 10. Total keseluruhan = 1 + 3 + 6 + 10 = 20."
  },
  {
    "id": 25,
    "category": "Perulangan Multi-Variabel",
    "question": "Berapakah nilai `i * j` saat loop berikut selesai?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i, j;\n    for (i = 0, j = 10; i < j; i += 2, j -= 3) {\n        // loop body kosong\n    }\n    cout << (i * j);\n    return 0;\n}",
    "options": [
      "16",
      "20",
      "12",
      "24",
      "0"
    ],
    "correct": 0,
    "explanation": "Awal: i=0, j=10 (0 < 10). Iterasi 1: i=2, j=7 (2 < 7). Iterasi 2: i=4, j=4 (4 < 4 adalah false, loop berhenti). Saat keluar loop, i=4 dan j=4. Hasil perkalian $4 \\times 4 = 16$."
  },
  {
    "id": 26,
    "category": "Perulangan Kompleks",
    "question": "Berapakah nilai yang dihasilkan oleh program berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 1;\n    for (int i = 1; i <= 3; i++) {\n        val = (val * 3) - 2;\n    }\n    cout << val;\n    return 0;\n}",
    "options": [
      "7",
      "1",
      "19",
      "3",
      "5"
    ],
    "correct": 1,
    "explanation": "Awal: val = 1. i = 1: (1 * 3) - 2 = 1. i = 2: (1 * 3) - 2 = 1. i = 3: (1 * 3) - 2 = 1. Nilai val tidak pernah berubah dari 1."
  },
  {
    "id": 27,
    "category": "Array 1D & Indeks",
    "question": "Diberikan deklarasi array berikut. Berapakah nilai `arr[3]`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[6] = {2, 4, 6};\n    cout << arr[3] << \" \" << arr[5];\n    return 0;\n}",
    "options": [
      "Nilai acak (garbage value)",
      "0 0",
      "Kompilasi error karena inisialisasi tidak lengkap",
      "6 6",
      "1 1"
    ],
    "correct": 1,
    "explanation": "Dalam standar C++, jika sebuah array diinisialisasi sebagian dengan daftar kurung kurawal `{...}`, semua elemen yang tidak disebutkan secara eksplisit akan diisi secara otomatis dengan nilai nol (zero-initialized)."
  },
  {
    "id": 28,
    "category": "Array & Pointer Arithmetic",
    "question": "Berapakah output dari program manipulasi array dan pointer berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 24, 36, 48, 60};\n    int *p = arr + 2;\n    cout << *(p + 1) - *(p - 1);\n    return 0;\n}",
    "options": [
      "24",
      "12",
      "36",
      "48",
      "0"
    ],
    "correct": 0,
    "explanation": "`arr + 2` menunjuk ke elemen indeks ke-2 yaitu 36. Maka `*(p + 1)` menunjuk ke elemen indeks ke-3 (48), dan `*(p - 1)` menunjuk ke elemen indeks ke-1 (24). Selisihnya adalah $48 - 24 = 24$."
  },
  {
    "id": 29,
    "category": "Array 2D & Diagonal Matriks",
    "question": "Berapakah nilai yang dicetak oleh program matriks berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int M[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    int diag = 0;\n    for (int i = 0; i < 3; i++) {\n        diag += M[i][2 - i];\n    }\n    cout << diag;\n    return 0;\n}",
    "options": [
      "14",
      "12",
      "18",
      "15",
      "9"
    ],
    "correct": 3,
    "explanation": "Indeks `M[i][2 - i]` menjumlahkan diagonal sekunder matriks: M[0][2] = 3, M[1][1] = 5, M[2][0] = 7. Total penjumlahan = $3 + 5 + 7 = 15$."
  },
  {
    "id": 30,
    "category": "Array & Algoritma Reverse",
    "question": "Perhatikan algoritma pembalikan array berikut. Apakah isi array setelah program berjalan?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[5] = {10, 20, 30, 40, 50};\n    for (int i = 0; i < 2; i++) {\n        int temp = a[i];\n        a[i] = a[4 - i];\n        a[4 - i] = temp;\n    }\n    cout << a[1] << \" \" << a[3];\n    return 0;\n}",
    "options": [
      "10 50",
      "20 40",
      "50 10",
      "30 30",
      "40 20"
    ],
    "correct": 4,
    "explanation": "Saat i = 0, a[0] (10) ditukar dengan a[4] (50). Saat i = 1, a[1] (20) ditukar dengan a[3] (40). Maka array menjadi `{50, 40, 30, 20, 10}`. `a[1]` bernilai 40 dan `a[3]` bernilai 20."
  },
  {
    "id": 31,
    "category": "Array 2D Flattening",
    "question": "Berapakah nilai yang dicetak oleh program berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int grid[2][4] = {\n        {2, 4, 6, 8},\n        {1, 3, 5, 7}\n    };\n    int sum = 0;\n    for (int r = 0; r < 2; r++) {\n        for (int c = 0; c < 4; c++) {\n            if (grid[r][c] % 3 == 0) {\n                sum += grid[r][c];\n            }\n        }\n    }\n    cout << sum;\n    return 0;\n}",
    "options": [
      "15",
      "14",
      "6",
      "12",
      "9"
    ],
    "correct": 4,
    "explanation": "Elemen yang habis dibagi 3 adalah 6 (pada baris 0 kolom 2) dan 3 (pada baris 1 kolom 1). Jumlah total adalah $6 + 3 = 9$."
  },
  {
    "id": 32,
    "category": "Array & Prefix Sum",
    "question": "Diberikan array `pref` yang merupakan prefix sum dari array `A`. Jika `pref = {0, 3, 8, 15, 21}`, berapakah nilai `A[3]` (indeks berbasis 1)?",
    "code": "// pref[k] = A[1] + A[2] + ... + A[k]\n// pref[0] = 0, pref[1] = 3, pref[2] = 8, pref[3] = 15, pref[4] = 21",
    "options": [
      "5",
      "8",
      "7",
      "6",
      "15"
    ],
    "correct": 2,
    "explanation": "Pada konsep prefix sum, $A[k] = pref[k] - pref[k - 1]$. Maka $A[3] = pref[3] - pref[2] = 15 - 8 = 7$."
  },
  {
    "id": 33,
    "category": "String C++ & Karakter",
    "question": "Berapakah output dari kode manipulasi string C++ berikut?",
    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"OSNK2026\";\n    string sub = str.substr(2, 3);\n    cout << sub;\n    return 0;\n}",
    "options": [
      "NK2",
      "NK",
      "SNK",
      "K20",
      "OSN"
    ],
    "correct": 0,
    "explanation": "Fungsi `str.substr(pos, len)` mengambil substring mulai dari indeks `pos` sebanyak `len` karakter. Indeks ke-2 adalah 'N' (0: 'O', 1: 'S', 2: 'N'). Mengambil 3 karakter: 'N', 'K', '2' -> 'NK2'."
  },
  {
    "id": 34,
    "category": "Fungsi: Pass by Reference",
    "question": "Perhatikan kode berikut. Berapakah output yang dicetak oleh fungsi main?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid swapMod(int &a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 15, y = 30;\n    swapMod(x, y);\n    cout << x << \" \" << y;\n    return 0;\n}",
    "options": [
      "30 30",
      "15 30",
      "30 15",
      "15 15",
      "Kompilasi error"
    ],
    "correct": 0,
    "explanation": "Parameter `a` dilewatkan secara reference (`&a`), sedangkan `b` secara value (`int b`). Nilai `x` berubah mengikuti `a` yang diisi nilai 30. Namun variabel `y` tidak terpengaruh karena `b` hanyalah salinan lokal. Hasilnya adalah '30 30'."
  },
  {
    "id": 35,
    "category": "Fungsi Default Parameter",
    "question": "Berapakah nilai yang dihasilkan dari pemanggilan `hitung(4)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint hitung(int x, int y = 3, int z = 2) {\n    return x * y + z;\n}\n\nint main() {\n    cout << hitung(4);\n    return 0;\n}",
    "options": [
      "8",
      "24",
      "12",
      "14",
      "Kompilasi error karena kurang argumen"
    ],
    "correct": 3,
    "explanation": "Hanya argumen pertama `x` yang disediakan bernilai 4. Parameter `y` dan `z` menggunakan default value masing-masing 3 dan 2. Maka perhitungannya adalah $4 \\times 3 + 2 = 14$."
  },
  {
    "id": 36,
    "category": "Fungsi & Static Variable",
    "question": "Berapakah output dari kode program berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid test() {\n    static int count = 1;\n    cout << count << \" \";\n    count *= 2;\n}\n\nint main() {\n    test();\n    test();\n    test();\n    return 0;\n}",
    "options": [
      "Kompilasi error",
      "1 1 1",
      "1 2 3",
      "2 4 8",
      "1 2 4"
    ],
    "correct": 4,
    "explanation": "Variabel lokal `static` hanya diinisialisasi satu kali sepanjang umur program dan mempertahankan nilainya di antara setiap pemanggilan fungsi. Panggilan 1: cetak 1, count jadi 2. Panggilan 2: cetak 2, count jadi 4. Panggilan 3: cetak 4, count jadi 8."
  },
  {
    "id": 37,
    "category": "Fungsi Overloading",
    "question": "Manakah dari pasangan fungsi berikut yang menyebabkan AMBIGUITAS (kompilasi error) pada pemanggilan `f(5)`?",
    "code": "// Pasangan 1:\nvoid f(int x);\nvoid f(double x);\n\n// Pasangan 2:\nvoid f(int x, int y = 10);\nvoid f(int x);",
    "options": [
      "Tidak ada yang ambigu",
      "Hanya Pasangan 1",
      "Kedua-duanya ambigu",
      "Hanya Pasangan 2",
      "Kompilasi error pada deklarasi sebelum dipanggil"
    ],
    "correct": 3,
    "explanation": "Pada Pasangan 2, pemanggilan `f(5)` cocok dengan `void f(int)` dan juga cocok dengan `void f(int, int = 10)` karena argumen kedua memiliki nilai default. Compiler tidak dapat menentukan fungsi mana yang harus dipanggil (ambiguous call error)."
  },
  {
    "id": 38,
    "category": "Fungsi Rekursi: Tracing Sederhana",
    "question": "Berapakah nilai yang dikembalikan oleh fungsi `mystery(4)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint mystery(int n) {\n    if (n <= 1) return 1;\n    return n * mystery(n - 1);\n}\n\nint main() {\n    cout << mystery(4);\n    return 0;\n}",
    "options": [
      "12",
      "16",
      "10",
      "24",
      "4"
    ],
    "correct": 3,
    "explanation": "Ini adalah implementasi faktorial $n!$. Untuk $n = 4$: $4 \\times 3 \\times 2 \\times 1 = 24$."
  },
  {
    "id": 39,
    "category": "Fungsi Rekursi: Deret Geometri",
    "question": "Berapakah hasil dari pemanggilan fungsi `foo(3, 2)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint foo(int a, int b) {\n    if (b == 0) return 1;\n    return a * foo(a, b - 1);\n}\n\nint main() {\n    cout << foo(3, 2);\n    return 0;\n}",
    "options": [
      "6",
      "9",
      "8",
      "27",
      "1"
    ],
    "correct": 1,
    "explanation": "Fungsi ini menghitung perpangkatan $a^b$. Untuk $a = 3$ dan $b = 2$: $foo(3, 2) = 3 \\times foo(3, 1) = 3 \\times (3 \\times foo(3, 0)) = 3 \\times 3 \\times 1 = 9$."
  },
  {
    "id": 40,
    "category": "Fungsi Rekursi: Algoritma Euclid (FPB/GCD)",
    "question": "Berapakah nilai yang dikembalikan oleh fungsi `gcd(48, 18)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    cout << gcd(48, 18);\n    return 0;\n}",
    "options": [
      "3",
      "12",
      "6",
      "2",
      "9"
    ],
    "correct": 2,
    "explanation": "Langkah algoritma Euclid: gcd(48, 18) -> gcd(18, 48 % 18 = 12) -> gcd(12, 18 % 12 = 6) -> gcd(6, 12 % 6 = 0) -> kembali ke base case yaitu 6."
  },
  {
    "id": 41,
    "category": "Rekursi Cabang Ganda",
    "question": "Berapakah output dari kode program rekursi berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint g(int n) {\n    if (n <= 2) return n;\n    return g(n - 1) + 2 * g(n - 2);\n}\n\nint main() {\n    cout << g(4);\n    return 0;\n}",
    "options": [
      "7",
      "10",
      "11",
      "14",
      "8"
    ],
    "correct": 4,
    "explanation": "Base case: g(1) = 1, g(2) = 2. Evaluasi: g(3) = g(2) + 2*g(1) = 2 + 2 = 4. g(4) = g(3) + 2*g(2) = 4 + 2*2 = 4 + 4 = 8. Jawaban yang benar adalah 8."
  },
  {
    "id": 42,
    "category": "Rekursi & Side Effect Output",
    "question": "Perhatikan urutan pencetakan angka pada fungsi rekursif berikut. Apakah outputnya?",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid cetak(int n) {\n    if (n == 0) return;\n    cout << n << \" \";\n    cetak(n - 1);\n    cout << n << \" \";\n}\n\nint main() {\n    cetak(3);\n    return 0;\n}",
    "options": [
      "1 2 3 3 2 1",
      "3 2 1 3 2 1",
      "3 2 1 1 2 3",
      "3 3 2 2 1 1",
      "3 2 1 0 1 2 3"
    ],
    "correct": 2,
    "explanation": "Saat fungsi turun: mencetak 3, lalu 2, lalu 1. Saat mencapai base case (n=0), fungsi kembali (unwinding stack) dan mengeksekusi baris kedua: mencetak 1, lalu 2, lalu 3. Urutannya adalah '3 2 1 1 2 3'."
  },
  {
    "id": 43,
    "category": "Rekursi Penjumlahan Digit",
    "question": "Berapakah output dari fungsi berikut saat dipanggil `sumDigits(2026)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint sumDigits(int n) {\n    if (n == 0) return 0;\n    return (n % 10) + sumDigits(n / 10);\n}\n\nint main() {\n    cout << sumDigits(2026);\n    return 0;\n}",
    "options": [
      "10",
      "12",
      "8",
      "6",
      "4"
    ],
    "correct": 0,
    "explanation": "Fungsi menjumlahkan setiap digit angka: $6 + 2 + 0 + 2 = 10$."
  },
  {
    "id": 44,
    "category": "Rekursi Ackermann Dasar",
    "question": "Berapakah nilai yang dihasilkan oleh `ack(1, 2)`?",
    "code": "#include <iostream>\nusing namespace std;\n\nint ack(int m, int n) {\n    if (m == 0) return n + 1;\n    if (m > 0 && n == 0) return ack(m - 1, 1);\n    return ack(m - 1, ack(m, n - 1));\n}\n\nint main() {\n    cout << ack(1, 2);\n    return 0;\n}",
    "options": [
      "5",
      "3",
      "4",
      "2",
      "Stack Overflow"
    ],
    "correct": 2,
    "explanation": "ack(1, 2) = ack(0, ack(1, 1)). ack(1, 1) = ack(0, ack(1, 0)). ack(1, 0) = ack(0, 1) = 2. Maka ack(1, 1) = ack(0, 2) = 3. Maka ack(1, 2) = ack(0, 3) = 4."
  },
  {
    "id": 45,
    "category": "Kompleksitas Waktu (Big-O)",
    "question": "Manakah notasi Big-O yang paling tepat menggambarkan kompleksitas waktu algoritma berikut?",
    "code": "void proses(int n) {\n    int total = 0;\n    for (int i = 1; i <= n; i *= 2) {\n        for (int j = 1; j <= n; j++) {\n            total++;\n        }\n    }\n}",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(log n)",
      "O(n log n)",
      "O(2^n)"
    ],
    "correct": 3,
    "explanation": "Loop luar berjalan sebanyak $\\log_2 n$ kali karena variabel `i` dikalikan 2 setiap iterasi. Loop dalam berjalan sebanyak $n$ kali untuk setiap iterasi luar. Total operasi adalah $O(n \\log n)$."
  },
  {
    "id": 46,
    "category": "Kompleksitas Ruang & Stack",
    "question": "Sebuah fungsi rekursif `void f(int n) { if (n == 0) return; f(n - 1); }` dipanggil dengan `f(100000)`. Apakah yang paling mungkin terjadi jika batasan memori stack terbatas?",
    "options": [
      "Program menghasilkan output 0",
      "Time Limit Exceeded",
      "Stack Overflow (Segmentation Fault / Runtime Error)",
      "Memory Leak di heap memori",
      "Compiler menolak melakukan kompilasi"
    ],
    "correct": 2,
    "explanation": "Setiap pemanggilan rekursif menambahkan satu frame ke call stack. Dengan kedalaman $100.000$ frame tanpa optimasi tail-call, memori stack akan habis dan memicu Stack Overflow (Segmentation Fault)."
  },
  {
    "id": 47,
    "category": "Logika Algoritma & Binary Search",
    "question": "Pada array terurut berukuran 100 elemen, berapakah jumlah perbandingan MAKSIMAL yang dilakukan oleh algoritma Binary Search untuk mencari suatu nilai?",
    "code": "// Ukuran N = 100\n// Berapa perbandingan terburuk (worst-case)?",
    "options": [
      "100 kali",
      "10 kali",
      "50 kali",
      "7 kali",
      "14 kali"
    ],
    "correct": 3,
    "explanation": "Jumlah perbandingan maksimal pada binary search adalah $\\lceil \\log_2(N + 1) \\rceil$. Untuk $N = 100$: $2^6 = 64 < 100 < 2^7 = 128$. Maka maksimal 7 perbandingan."
  },
  {
    "id": 48,
    "category": "Tracing & Rekursi Array",
    "question": "Berapakah output dari kode program rekursi array berikut?",
    "code": "#include <iostream>\nusing namespace std;\n\nint cari(int arr[], int n) {\n    if (n == 1) return arr[0];\n    int sub = cari(arr, n - 1);\n    return (arr[n - 1] > sub) ? arr[n - 1] : sub;\n}\n\nint main() {\n    int data[5] = {34, 12, 89, 55, 23};\n    cout << cari(data, 5);\n    return 0;\n}",
    "options": [
      "23",
      "34",
      "12",
      "55",
      "89"
    ],
    "correct": 4,
    "explanation": "Fungsi ini secara rekursif mencari elemen maksimum di dalam array. Elemen terbesar dari himpunan `{34, 12, 89, 55, 23}` adalah 89."
  },
  {
    "id": 49,
    "category": "Bitwise XOR Invariance",
    "question": "Diberikan array yang berisi pasangan bilangan dan hanya ada SATU bilangan tunggal yang tidak memiliki pasangan: `{7, 3, 5, 3, 7}`. Manakah operasi yang paling efisien menemukan bilangan tunggal tersebut dalam waktu $O(N)$ dan memori $O(1)$?",
    "options": [
      "Mengonversi seluruh elemen menjadi string",
      "Mengurutkan array terlebih dahulu lalu memindai elemen bertetangga",
      "Menggunakan nested loop dua tingkat untuk menghitung frekuensi",
      "Mengalikan seluruh elemen array lalu membaginya dengan jumlah total",
      "Melakukan operasi XOR (^) pada seluruh elemen array secara berurutan"
    ],
    "correct": 4,
    "explanation": "Sifat XOR: $x \\oplus x = 0$ dan $x \\oplus 0 = x$. Jika seluruh elemen di-XOR, semua elemen berpasangan akan saling meniadakan menjadi 0, menyisakan tepat satu bilangan tunggal tersebut ($7 \\oplus 3 \\oplus 5 \\oplus 3 \\oplus 7 = 5$)."
  },
  {
    "id": 50,
    "category": "Analisis Program Utuh OSNK",
    "question": "Perhatikan program C++ lengkap berikut. Berapakah nilai yang dicetak?",
    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int ans = 0;\n    for (int i = 1; i <= 5; i++) {\n        for (int j = 1; j <= 5; j++) {\n            if ((i + j) % 2 == 0) {\n                ans += (i * j);\n            }\n        }\n    }\n    cout << ans;\n    return 0;\n}",
    "options": [
      "150",
      "125",
      "225",
      "100",
      "117"
    ],
    "correct": 4,
    "explanation": "Kondisi (i + j) genap terjadi ketika (i, j) keduanya ganjil atau keduanya genap. Pasangan ganjil {1, 3, 5}: jumlah perkalian = (1+3+5) × (1+3+5) = 9 × 9 = 81. Pasangan genap {2, 4}: jumlah perkalian = (2+4) × (2+4) = 6 × 6 = 36. Total ans = 81 + 36 = 117."
  }
];
