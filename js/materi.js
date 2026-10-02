// Modul Materi Bacaan C++ Persiapan OSNK Informatika
// Diperkaya dari:
// 1. Modul Persiapan Olimpiade Sains Nasional (OSN) Informatika - Bab I Dasar Pemrograman
// 2. Modul C++ Dasar SMA Bagian 1 - Dadan Satria
// Dibaca peserta selama 15 menit sebelum ujian, setelah itu dikunci permanen.

const MATERI_OSNK = [
  {
    id: "modul-1",
    title: "1. Pola Pikir Programmer & Alur IPO (Input - Proses - Output)",
    content: `
      <h4>Alur Berpikir Programmer</h4>
      <p>Sesuai <em>Modul C++ Dasar SMA</em>, sebelum menulis sebaris kode, seorang pemrogram harus membagi setiap masalah menjadi tiga tahapan esensial:</p>
      <ul>
        <li><strong>Input:</strong> Data yang diterima dari pengguna atau soal (melalui <code>cin</code>).</li>
        <li><strong>Proses:</strong> Operasi matematika, logika, atau algoritma untuk mengolah input.</li>
        <li><strong>Output:</strong> Hasil akhir yang ditampilkan ke layar (melalui <code>cout</code>).</li>
      </ul>
      <pre><code>// Contoh Alur IPO:
#include &lt;iostream&gt;
using namespace std;

int main() {
    int harga = 5000;  // Input/Data
    int jumlah = 3;
    int total = harga * jumlah; // Proses
    cout &lt;&lt; "Total: " &lt;&lt; total; // Output
    return 0;
}</code></pre>
    `
  },
  {
    id: "modul-2",
    title: "2. Struktur Program C++, Header & Komentar",
    content: `
      <h4>Komponen Anatomi Program C++</h4>
      <p>Berdasarkan <em>Modul Persiapan OSN Informatika</em>, program C++ memiliki bagian-bagian pokok:</p>
      <ul>
        <li><code>#include &lt;iostream&gt;</code>: Header standar untuk fungsi masukan dan keluaran stream.</li>
        <li><code>using namespace std;</code>: Memberitahu compiler untuk menggunakan seluruh entitas standar namespace.</li>
        <li><code>int main() { ... return 0; }</code>: Fungsi utama tempat eksekusi pertama kali dimulai. Nilai balik <code>0</code> menandakan program berakhir sukses tanpa error.</li>
        <li><strong>Komentar Satu Baris:</strong> Ditulis menggunakan <code>// komentar</code>.</li>
        <li><strong>Komentar Multi-Baris:</strong> Ditulis menggunakan <code>/* komentar panjang */</code>. Seluruh komentar diabaikan oleh compiler.</li>
      </ul>
      <div class="note-box">
        <strong>Fast I/O untuk Olimpiade:</strong> Untuk menghindari Time Limit Exceeded (TLE) saat membaca input puluhan ribu angka, selalu sertakan:
        <br><code>ios_base::sync_with_stdio(false); cin.tie(NULL);</code>
      </div>
    `
  },
  {
    id: "modul-3",
    title: "3. Aturan Identifier & Kata Kunci (Keyword) Terlarang",
    content: `
      <h4>Aturan Penamaan Variabel (Identifier) C++</h4>
      <p>Sangat sering diujikan pada soal teori OSNK Informatika. Aturan baku penamaan identifier:</p>
      <ol>
        <li>Hanya boleh terdiri dari huruf (a-z, A-Z), angka (0-9), dan garis bawah (<em>underscore</em> <code>_</code>).</li>
        <li><strong>TIDAK BOLEH diawali angka</strong> (contoh tidak valid: <code>1nilai</code>, <code>2data</code>; contoh valid: <code>nilai1</code>, <code>_total</code>).</li>
        <li><strong>TIDAK BOLEH mengandung spasi</strong> atau simbol khusus (seperti <code>$</code>, <code>@</code>, <code>-</code>, <code>#</code>).</li>
        <li><strong>Bersifat Case-Sensitive:</strong> Variabel <code>total</code>, <code>Total</code>, dan <code>TOTAL</code> adalah tiga variabel yang berbeda.</li>
        <li><strong>DILARANG menggunakan Reserved Keywords C++:</strong> Tidak boleh menamai variabel dengan kata kunci internal bahasa C++, antara lain: <code>int</code>, <code>float</code>, <code>double</code>, <code>for</code>, <code>while</code>, <code>if</code>, <code>else</code>, <code>return</code>, <code>const</code>, <code>switch</code>, <code>break</code>, <code>case</code>, <code>void</code>.</li>
      </ol>
    `
  },
  {
    id: "modul-4",
    title: "4. Tipe Data, Inisialisasi, & Konstanta (const)",
    content: `
      <h4>Tipe Data Primitif & Deklarasi</h4>
      <table class="materi-table">
        <thead>
          <tr>
            <th>Tipe Data</th>
            <th>Rentang / Deskripsi</th>
            <th>Contoh Deklarasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>bool</code></td>
            <td><code>true</code> (1) atau <code>false</code> (0)</td>
            <td><code>bool lulus = true;</code></td>
          </tr>
          <tr>
            <td><code>char</code></td>
            <td>Karakter tunggal (1 byte ASCII)</td>
            <td><code>char nilai = 'A';</code></td>
          </tr>
          <tr>
            <td><code>int</code></td>
            <td>Bilangan bulat 32-bit ($-2 \times 10^9$ s.d. $2 \times 10^9$)</td>
            <td><code>int umur = 17;</code></td>
          </tr>
          <tr>
            <td><code>long long</code></td>
            <td>Bilangan bulat 64-bit ($\approx \pm 9 \times 10^{18}$)</td>
            <td><code>long long besar = 10000000000LL;</code></td>
          </tr>
          <tr>
            <td><code>float</code></td>
            <td>Pecahan presisi tunggal (7 digit presisi)</td>
            <td><code>float suhu = 36.5f;</code></td>
          </tr>
          <tr>
            <td><code>double</code></td>
            <td>Pecahan presisi ganda (15 digit presisi)</td>
            <td><code>double pi = 3.14159265;</code></td>
          </tr>
          <tr>
            <td><code>string</code></td>
            <td>Kumpulan karakter teks</td>
            <td><code>string nama = "Budi";</code></td>
          </tr>
        </tbody>
      </table>
      <h4>Multiple Declaration & Konstanta</h4>
      <pre><code>// Multiple Declaration: mendeklarasikan beberapa variabel sekaligus
int panjang = 10, lebar = 5, tinggi = 2;

// Konstanta (const): Nilainya mutlak dan TIDAK DAPAT DIUBAH lagi setelah diinisialisasi
const double GRAVITASI = 9.8;
// GRAVITASI = 10.0; // ERROR: assignment of read-only variable</code></pre>
    `
  },
  {
    id: "modul-5",
    title: "5. Operator & Jebakan Pembagian Bulat (Truncation)",
    content: `
      <h4>Operator Aritmatika & Compound Assignment</h4>
      <ul>
        <li><code>+</code>, <code>-</code>, <code>*</code>: Penjumlahan, pengurangan, perkalian.</li>
        <li><code>/</code>: Pembagian.</li>
        <li><code>%</code>: Modulus (sisa bagi bilangan bulat, contoh: <code>14 % 4 = 2</code>). Bilangan genap: <code>x % 2 == 0</code>, ganjil: <code>x % 2 != 0</code>.</li>
        <li><strong>Compound Assignment:</strong> <code>x += 5</code> ekuivalen <code>x = x + 5</code>; <code>x *= 2</code> ekuivalen <code>x = x * 2</code>.</li>
      </ul>
      <div class="warn-box">
        <strong>Jebakan Pembagian Bulat (Integer Truncation):</strong>
        <br>Jika kedua operan bertipe <code>int</code>, maka hasil operasi <code>/</code> selalu membuang angka desimal di belakang koma:
        <br><code>int a = 10, b = 4; cout &lt;&lt; (a / b); // Menghasilkan 2, BUKAN 2.5!</code>
        <br>Agar menghasilkan 2.5, minimal salah satu harus dikonversi ke float/double: <code>(double)a / b</code>.
      </div>
      <h4>Pre-increment vs Post-increment</h4>
      <ul>
        <li><code>x++</code>: Nilai lama digunakan terlebih dahulu, baru kemudian nilai <code>x</code> bertambah 1.</li>
        <li><code>++x</code>: Nilai <code>x</code> bertambah 1 terlebih dahulu, baru nilai baru tersebut digunakan.</li>
      </ul>
    `
  },
  {
    id: "modul-6",
    title: "6. Jebakan Klasik: Assignment (=) vs Equality (==)",
    content: `
      <h4>Analisis Error Logika pada Kondisional</h4>
      <p>Berdasarkan bab <em>Belajar dari Error</em> pada modul C++ SMA:</p>
      <ul>
        <li><code>=</code> adalah operator <strong>penugasan (assignment)</strong>, memasukkan nilai ke variabel.</li>
        <li><code>==</code> adalah operator <strong>pembanding kesetaraan (equality)</strong>, menghasilkan nilai <code>true</code> atau <code>false</code>.</li>
      </ul>
      <pre><code>int nilai = 50;

// KESALAHAN FATAL:
if (nilai = 75) { 
    // Pernyataan di atas BUKAN membandingkan nilai == 75,
    // melainkan MENGUBAH isi nilai menjadi 75!
    // Karena 75 adalah integer non-nol, ekspresi ini SELALU BERNILAI TRUE!
    cout &lt;&lt; "Pasti Tercetak!";
}</code></pre>
    `
  },
  {
    id: "modul-7",
    title: "7. Logika Boolean & Tabel Kebenaran (AND, OR, NOT)",
    content: `
      <h4>Evaluasi Ekspresi Logika Proposisi OSN</h4>
      <p>Sesuai <em>Modul Persiapan OSN Informatika</em>, operasi logika menghubungkan kondisi-kondisi:</p>
      <ul>
        <li><code>&amp;&amp;</code> (AND): Bernilai <code>true</code> HANYA JIKA KEDUA KONDISI bernilai true.</li>
        <li><code>||</code> (OR): Bernilai <code>true</code> JIKA SALAH SATU atau KEDUA KONDISI bernilai true.</li>
        <li><code>!</code> (NOT): Membalikkan nilai logika (<code>!true = false</code>, <code>!false = true</code>).</li>
      </ul>
      <table class="materi-table">
        <thead>
          <tr>
            <th>P</th>
            <th>Q</th>
            <th>P &amp;&amp; Q</th>
            <th>P || Q</th>
            <th>!P</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>True (1)</td>
            <td>True (1)</td>
            <td>True (1)</td>
            <td>True (1)</td>
            <td>False (0)</td>
          </tr>
          <tr>
            <td>True (1)</td>
            <td>False (0)</td>
            <td>False (0)</td>
            <td>True (1)</td>
            <td>False (0)</td>
          </tr>
          <tr>
            <td>False (0)</td>
            <td>True (1)</td>
            <td>False (0)</td>
            <td>True (1)</td>
            <td>True (1)</td>
          </tr>
          <tr>
            <td>False (0)</td>
            <td>False (0)</td>
            <td>False (0)</td>
            <td>False (0)</td>
            <td>True (1)</td>
          </tr>
        </tbody>
      </table>
    `
  },
  {
    id: "modul-8",
    title: "8. Perulangan: For, While, & Do-While",
    content: `
      <h4>Perbandingan Tiga Struktur Perulangan</h4>
      <ul>
        <li><strong>FOR:</strong> Digunakan saat jumlah perulangan sudah diketahui dengan pasti sebelumnya.
          <br><code>for(int i = 0; i &lt; 5; i++) { ... }</code>
        </li>
        <li><strong>WHILE:</strong> Digunakan saat jumlah perulangan belum pasti, pengujian dilakukan di AWAL sebelum blok dijalankan. Jika kondisi awal false, tubuh loop tidak pernah dieksekusi sama sekali.
          <br><code>while(n &gt; 0) { n /= 2; }</code>
        </li>
        <li><strong>DO-WHILE:</strong> Pengujian kondisi dilakukan di AKHIR. Akibatnya tubuh perulangan PASTI DIJALANKAN MINIMAL SATU KALI.
          <br><code>do { a += 2; } while(a &lt; 10);</code>
        </li>
      </ul>
      <div class="warn-box">
        <strong>Titik Koma Tersembunyi:</strong> <code>for(int i=0; i&lt;5; i++); { cout &lt;&lt; i; }</code>
        <br>Titik koma setelah for membuat loop kosong. Blok kurung kurawal hanya dieksekusi 1 kali setelah perulangan selesai!
      </div>
    `
  },
  {
    id: "modul-9",
    title: "9. Fungsi: Parameter Formal vs Argumen Aktual",
    content: `
      <h4>Konsep Pemanggilan Fungsi</h4>
      <p>Sesuai <em>Modul Bab I OSN Informatika</em>:</p>
      <ul>
        <li><strong>Parameter Formal:</strong> Variabel penampung yang didefinisikan pada deklarasi fungsi (contoh: <code>int a, int b</code> pada <code>int tambah(int a, int b)</code>).</li>
        <li><strong>Argumen Aktual:</strong> Nilai nyata atau variabel yang dikirimkan saat fungsi dipanggil di dalam <code>main()</code> (contoh: <code>tambah(10, 20)</code>).</li>
      </ul>
      <h4>Pass by Value vs Pass by Reference (&amp;)</h4>
      <pre><code>void coba(int val, int &amp;ref) {
    val += 10; // Pass by Value: hanya salinan lokal yang berubah
    ref += 10; // Pass by Reference (&amp;): variabel pemanggil di main ikut berubah!
}</code></pre>
    `
  },
  {
    id: "modul-10",
    title: "10. Operator Bitwise & Rekursi Lanjut OSNK",
    content: `
      <h4>Bitwise & Trik Biner</h4>
      <ul>
        <li><code>x &amp; 1</code>: Cek ganjil/genap (1 = ganjil, 0 = genap).</li>
        <li><code>x &lt;&lt; k</code>: Kalikan dengan $2^k$ (contoh: <code>5 &lt;&lt; 2 = 20</code>).</li>
        <li><code>x &gt;&gt; k</code>: Bagi dengan $2^k$ (contoh: <code>16 &gt;&gt; 2 = 4</code>).</li>
        <li><code>x ^ x = 0</code> dan <code>x ^ 0 = x</code>: Sifat XOR untuk menemukan elemen tunggal tak berpasangan.</li>
      </ul>
      <h4>Fungsi Rekursif</h4>
      <p>Fungsi yang memanggil dirinya sendiri. Wajib memiliki <strong>Base Case</strong> agar tidak terjadi <em>Stack Overflow</em>. Selalu buat tabel pelacakan nilai (trace table) saat mengerjakan soal rekursi OSNK.</p>
    `
  }
];

// Helper Render Materi ke DOM
function renderMateriContent() {
  const container = document.getElementById("materi-body");
  const navContainer = document.getElementById("materi-nav-list");
  if (!container || !navContainer) return;

  container.innerHTML = "";
  navContainer.innerHTML = "";

  MATERI_OSNK.forEach((modul, idx) => {
    // Buat item navigasi
    const navItem = document.createElement("a");
    navItem.href = `#${modul.id}`;
    navItem.className = `materi-nav-item ${idx === 0 ? "active" : ""}`;
    navItem.innerText = modul.title;
    navItem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".materi-nav-item").forEach(el => el.classList.remove("active"));
      navItem.classList.add("active");
      const target = document.getElementById(modul.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    navContainer.appendChild(navItem);

    // Buat section konten
    const section = document.createElement("section");
    section.id = modul.id;
    section.className = "materi-section";
    section.innerHTML = `
      <div class="materi-section-header">
        <h3>${modul.title}</h3>
      </div>
      <div class="materi-section-body">
        ${modul.content}
      </div>
    `;
    container.appendChild(section);
  });
}
