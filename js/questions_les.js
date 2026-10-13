// Bank Soal CBT Peserta Les — Bab 1: Eksponen & Logaritma Fase E
// Total: 60 Soal dengan Langkah Pengerjaan Bersih (Hanya Angka Bilangan Negatif, 0, Positif)
// KaTeX Math Rendering Bebas Kerusakan Syntax

const LES_QUESTIONS = [
  {
    "id": "les_q01",
    "number": 1,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\(2^5\\) adalah ....",
    "options": [
      "10",
      "25",
      "32",
      "64",
      "16"
    ],
    "correct": 2,
    "totalBlanks": 8,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis = {{0}} dan pangkat = {{1}}.",
        "template": "Basis = {{BLANK_0}} dan pangkat = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Uraikan sebagai perkalian berulang: {{0}} × {{1}} × {{2}} × {{3}} × {{4}}.",
        "template": "Uraikan sebagai perkalian berulang: {{BLANK_2}} × {{BLANK_3}} × {{BLANK_4}} × {{BLANK_5}} × {{BLANK_6}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 5,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 6,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hasil perkalian tersebut = {{0}}.",
        "template": "Hasil perkalian tersebut = {{BLANK_7}}.",
        "blanks": [
          {
            "globalIndex": 7,
            "expected": [
              "32"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q02",
    "number": 2,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\((-3)^4\\) adalah ....",
    "options": [
      "−81",
      "81",
      "−12",
      "12",
      "−27"
    ],
    "correct": 1,
    "totalBlanks": 6,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Karena tanda negatif berada di dalam kurung, basis = {{0}}.",
        "template": "Karena tanda negatif berada di dalam kurung, basis = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Uraikan: \\((-3) \\times (-3) \\times (-3) \\times (-3)\\).",
        "template": "Uraikan: \\((-3) \\times (-3) \\times (-3) \\times (-3)\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Pasangkan faktor: \\((-3) \\times (-3) =\\) {{0}}; pasangan berikutnya = {{1}}.",
        "template": "Pasangkan faktor: \\((-3) \\times (-3) =\\) {{BLANK_1}}; pasangan berikutnya = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "9"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "9"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Kalikan hasil kedua pasangan: {{0}} × {{1}} = {{2}}.",
        "template": "Kalikan hasil kedua pasangan: {{BLANK_3}} × {{BLANK_4}} = {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "9"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "9"
            ]
          },
          {
            "globalIndex": 5,
            "expected": [
              "81"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q03",
    "number": 3,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\( -3^2\\) adalah ....",
    "options": [
      "9",
      "−9",
      "−6",
      "6",
      "3"
    ],
    "correct": 1,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pangkat dikerjakan pada bilangan positif = {{0}} terlebih dahulu.",
        "template": "Pangkat dikerjakan pada bilangan positif = {{BLANK_0}} terlebih dahulu.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung \\(3^2 =\\) {{0}} × {{1}} = {{2}}.",
        "template": "Hitung \\(3^2 =\\) {{BLANK_1}} × {{BLANK_2}} = {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "9"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Terapkan tanda negatif di depan hasil: \\(-(3^2) =\\) {{0}}.",
        "template": "Terapkan tanda negatif di depan hasil: \\(-(3^2) =\\) {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "-9"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q04",
    "number": 4,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\(7^0\\) adalah ....",
    "options": [
      "0",
      "1",
      "7",
      "−1",
      "49"
    ],
    "correct": 1,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis = {{0}} dan pangkat = {{1}}.",
        "template": "Basis = {{BLANK_0}} dan pangkat = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "7"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "0"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Sifat pangkat nol menyatakan \\(a^0 =\\) {{0}} untuk \\(a \\neq 0\\).",
        "template": "Sifat pangkat nol menyatakan \\(a^0 =\\) {{BLANK_2}} untuk \\(a \\neq 0\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Maka nilai dari \\(7^0 =\\) {{0}}.",
        "template": "Maka nilai dari \\(7^0 =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "1"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q05",
    "number": 5,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\(2^{-3}\\) adalah ....",
    "options": [
      "−8",
      "8",
      "1/8",
      "1/6",
      "−1/8"
    ],
    "correct": 2,
    "totalBlanks": 6,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gunakan sifat \\(a^{-n} = \\frac{1}{a^n}\\), maka \\(2^{-3} = \\frac{1}{2^n}\\) dengan pangkat \\(n =\\) {{0}}.",
        "template": "Gunakan sifat \\(a^{-n} = \\frac{1}{a^n}\\), maka \\(2^{-3} = \\frac{1}{2^n}\\) dengan pangkat \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung penyebut \\(2^3 =\\) {{0}} × {{1}} × {{2}} = {{3}}.",
        "template": "Hitung penyebut \\(2^3 =\\) {{BLANK_1}} × {{BLANK_2}} × {{BLANK_3}} = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "8"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk pecahan akhirnya adalah \\(\\frac{1}{n}\\) dengan nilai penyebut \\(n =\\) {{0}}.",
        "template": "Bentuk pecahan akhirnya adalah \\(\\frac{1}{n}\\) dengan nilai penyebut \\(n =\\) {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 5,
            "expected": [
              "8"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q06",
    "number": 6,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\(\\left(\\frac12\\right)^{-2}\\) adalah ....",
    "options": [
      "1/4",
      "−4",
      "2",
      "4",
      "1/2"
    ],
    "correct": 3,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pangkat negatif membalik pecahan: \\(\\left(\\frac{1}{2}\\right)^{-2} = \\left(\\frac{a}{b}\\right)^2\\) dengan pembilang \\(a =\\) {{0}} dan penyebut \\(b =\\) {{1}}.",
        "template": "Pangkat negatif membalik pecahan: \\(\\left(\\frac{1}{2}\\right)^{-2} = \\left(\\frac{a}{b}\\right)^2\\) dengan pembilang \\(a =\\) {{BLANK_0}} dan penyebut \\(b =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Kuadratkan pembilang: {{0}} dan penyebut: {{1}}.",
        "template": "Kuadratkan pembilang: {{BLANK_2}} dan penyebut: {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Nilai akhirnya = {{0}}.",
        "template": "Nilai akhirnya = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "4"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q07",
    "number": 7,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\(16^{3/4}\\) adalah ....",
    "options": [
      "2",
      "4",
      "6",
      "8",
      "16"
    ],
    "correct": 3,
    "totalBlanks": 7,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah ke bentuk akar: indeks akar = {{0}} dan pangkat luar = {{1}}.",
        "template": "Ubah ke bentuk akar: indeks akar = {{BLANK_0}} dan pangkat luar = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Nilai akar ke-4 dari 16 adalah \\(\\sqrt[4]{16} =\\) {{0}}.",
        "template": "Nilai akar ke-4 dari 16 adalah \\(\\sqrt[4]{16} =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Pangkatkan hasil akar dengan pangkat luar 3: {{0}} × {{1}} × {{2}} = {{3}}.",
        "template": "Pangkatkan hasil akar dengan pangkat luar 3: {{BLANK_3}} × {{BLANK_4}} × {{BLANK_5}} = {{BLANK_6}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 5,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 6,
            "expected": [
              "8"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q08",
    "number": 8,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\(27^{2/3}\\) adalah ....",
    "options": [
      "3",
      "6",
      "9",
      "18",
      "81"
    ],
    "correct": 2,
    "totalBlanks": 6,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah ke bentuk akar: indeks akar = {{0}} dan pangkat luar = {{1}}.",
        "template": "Ubah ke bentuk akar: indeks akar = {{BLANK_0}} dan pangkat luar = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Nilai akar pangkat 3 dari 27 adalah \\(\\sqrt[3]{27} =\\) {{0}}.",
        "template": "Nilai akar pangkat 3 dari 27 adalah \\(\\sqrt[3]{27} =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Kuadratkan hasil akar tersebut: {{0}} × {{1}} = {{2}}.",
        "template": "Kuadratkan hasil akar tersebut: {{BLANK_3}} × {{BLANK_4}} = {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 5,
            "expected": [
              "9"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q09",
    "number": 9,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\(\\sqrt{81}\\) adalah ....",
    "options": [
      "8",
      "9",
      "18",
      "40",
      "4"
    ],
    "correct": 1,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Misalkan \\(\\sqrt{81} = x\\), maka nilai kuadrat \\(x^2 =\\) {{0}}.",
        "template": "Misalkan \\(\\sqrt{81} = x\\), maka nilai kuadrat \\(x^2 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "81"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Cari bilangan bulat positif: {{0}} × {{1}} = 81.",
        "template": "Cari bilangan bulat positif: {{BLANK_1}} × {{BLANK_2}} = 81.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "9"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "9"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Maka nilai akar utama \\(\\sqrt{81} =\\) {{0}}.",
        "template": "Maka nilai akar utama \\(\\sqrt{81} =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "9"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q10",
    "number": 10,
    "category": "Eksponen Dasar",
    "question": "Nilai dari \\((-2)^5\\) adalah ....",
    "options": [
      "−10",
      "−32",
      "32",
      "−64",
      "64"
    ],
    "correct": 1,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis bilangan negatif di dalam kurung = {{0}} dan pangkat = {{1}}.",
        "template": "Basis bilangan negatif di dalam kurung = {{BLANK_0}} dan pangkat = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-2"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Kelompokkan empat faktor pertama: \\((-2)^4 =\\) {{0}}.",
        "template": "Kelompokkan empat faktor pertama: \\((-2)^4 =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "16"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Kalikan dengan faktor terakhir: 16 × (-2) = {{0}}.",
        "template": "Kalikan dengan faktor terakhir: 16 × (-2) = {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "-32"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q11",
    "number": 11,
    "category": "Sifat-Sifat Eksponen",
    "question": "Sederhanakan \\(2^3\\times2^4\\).",
    "options": [
      "64",
      "128",
      "32",
      "256",
      "7"
    ],
    "correct": 1,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis kedua faktor sama, yaitu = {{0}}.",
        "template": "Basis kedua faktor sama, yaitu = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Gunakan \\(a^m \\times a^n = a^{m+n}\\): pangkat baru = {{0}} + {{1}} = {{2}}.",
        "template": "Gunakan \\(a^m \\times a^n = a^{m+n}\\): pangkat baru = {{BLANK_1}} + {{BLANK_2}} = {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "7"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hitung nilai akhir perpangkatan \\(2^7 =\\) {{0}}.",
        "template": "Hitung nilai akhir perpangkatan \\(2^7 =\\) {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "128"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q12",
    "number": 12,
    "category": "Sifat-Sifat Eksponen",
    "question": "Sederhanakan \\(\\frac{5^7}{5^3}\\).",
    "options": [
      "125",
      "25",
      "625",
      "3.125",
      "4"
    ],
    "correct": 2,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis pembilang dan penyebut sama, yaitu = {{0}}.",
        "template": "Basis pembilang dan penyebut sama, yaitu = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Gunakan aturan pembagian: pangkat baru = {{0}} − {{1}} = {{2}}.",
        "template": "Gunakan aturan pembagian: pangkat baru = {{BLANK_1}} − {{BLANK_2}} = {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "7"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hitung nilai akhir perpangkatan \\(5^4 =\\) {{0}}.",
        "template": "Hitung nilai akhir perpangkatan \\(5^4 =\\) {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "625"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q13",
    "number": 13,
    "category": "Sifat-Sifat Eksponen",
    "question": "Nilai dari \\((3^2)^3\\) adalah ....",
    "options": [
      "81",
      "243",
      "729",
      "18",
      "9"
    ],
    "correct": 2,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gunakan sifat \\((a^m)^n = a^{m \\times n}\\).",
        "template": "Gunakan sifat \\((a^m)^n = a^{m \\times n}\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat baru yang dikalikan = {{0}} × {{1}} = {{2}}.",
        "template": "Pangkat baru yang dikalikan = {{BLANK_0}} × {{BLANK_1}} = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "6"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hitung nilai akhir perpangkatan \\(3^6 =\\) {{0}}.",
        "template": "Hitung nilai akhir perpangkatan \\(3^6 =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "729"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q14",
    "number": 14,
    "category": "Sifat-Sifat Eksponen",
    "question": "Bentuk sederhana dari \\((2x^3)^2\\) adalah ....",
    "options": [
      "2x^6",
      "4x^5",
      "4x^6",
      "2x^3",
      "4x^9"
    ],
    "correct": 2,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Terapkan kuadrat pada koefisien: \\(2^2 =\\) {{0}}.",
        "template": "Terapkan kuadrat pada koefisien: \\(2^2 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Terapkan kuadrat pada pangkat variabel: \\(3 \\times 2 =\\) {{0}}.",
        "template": "Terapkan kuadrat pada pangkat variabel: \\(3 \\times 2 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "6"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk gabungannya adalah \\(k x^n\\) dengan koefisien \\(k =\\) {{0}} dan pangkat \\(n =\\) {{1}}.",
        "template": "Bentuk gabungannya adalah \\(k x^n\\) dengan koefisien \\(k =\\) {{BLANK_2}} dan pangkat \\(n =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "6"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q15",
    "number": 15,
    "category": "Sifat-Sifat Eksponen",
    "question": "Bentuk sederhana dari \\((ab^2)^3\\) adalah ....",
    "options": [
      "a³b⁵",
      "a³b⁶",
      "a⁶b⁵",
      "ab⁶",
      "a³b²"
    ],
    "correct": 1,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pangkat untuk faktor \\(a\\) adalah = {{0}}.",
        "template": "Pangkat untuk faktor \\(a\\) adalah = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat untuk faktor \\(b\\) adalah \\(2 \\times 3 =\\) {{0}}.",
        "template": "Pangkat untuk faktor \\(b\\) adalah \\(2 \\times 3 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "6"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk gabungannya adalah \\(a^m b^n\\) dengan pangkat \\(m =\\) {{0}} dan \\(n =\\) {{1}}.",
        "template": "Bentuk gabungannya adalah \\(a^m b^n\\) dengan pangkat \\(m =\\) {{BLANK_2}} dan \\(n =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "6"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q16",
    "number": 16,
    "category": "Sifat-Sifat Eksponen",
    "question": "Untuk \\(x\\neq0\\), bentuk sederhana dari \\(x^7\\times x^{-2}\\) adalah ....",
    "options": [
      "x⁹",
      "x⁵",
      "x⁻¹⁴",
      "x⁻⁵",
      "x¹⁴"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gunakan sifat penjumlahan pangkat pada basis sama.",
        "template": "Gunakan sifat penjumlahan pangkat pada basis sama.",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat baru = 7 + (-2) = {{0}}.",
        "template": "Pangkat baru = 7 + (-2) = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk sederhananya adalah \\(x^n\\) dengan nilai pangkat \\(n =\\) {{0}}.",
        "template": "Bentuk sederhananya adalah \\(x^n\\) dengan nilai pangkat \\(n =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "5"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q17",
    "number": 17,
    "category": "Sifat-Sifat Eksponen",
    "question": "Untuk \\(a,b\\neq0\\), bentuk sederhana dari \\(\\frac{a^3b^{-2}}{a^{-1}b^4}\\) adalah ....",
    "options": [
      "a²/b²",
      "a⁴/b⁶",
      "a⁴b⁶",
      "a²b²",
      "1/(a⁴b⁶)"
    ],
    "correct": 1,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Untuk variabel \\(a\\): pangkat baru = 3 − (-1) = {{0}}.",
        "template": "Untuk variabel \\(a\\): pangkat baru = 3 − (-1) = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Untuk variabel \\(b\\): pangkat penyebut = 4 − (-2) = {{0}}.",
        "template": "Untuk variabel \\(b\\): pangkat penyebut = 4 − (-2) = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "6"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk akhir pecahan \\(\\frac{a^m}{b^n}\\) memiliki pangkat \\(m =\\) {{0}} dan \\(n =\\) {{1}}.",
        "template": "Bentuk akhir pecahan \\(\\frac{a^m}{b^n}\\) memiliki pangkat \\(m =\\) {{BLANK_2}} dan \\(n =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "6"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q18",
    "number": 18,
    "category": "Sifat-Sifat Eksponen",
    "question": "Nilai dari \\((2^3\\times2^{-1})^2\\) adalah ....",
    "options": [
      "4",
      "8",
      "16",
      "32",
      "64"
    ],
    "correct": 2,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Sederhanakan di dalam kurung: pangkat \\(2\\) menjadi 3 + (-1) = {{0}}.",
        "template": "Sederhanakan di dalam kurung: pangkat \\(2\\) menjadi 3 + (-1) = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Kalikan dengan pangkat di luar kurung: {{0}} × 2 = {{1}}.",
        "template": "Kalikan dengan pangkat di luar kurung: {{BLANK_1}} × 2 = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hitung nilai numerik akhir perpangkatan \\(2^4 =\\) {{0}}.",
        "template": "Hitung nilai numerik akhir perpangkatan \\(2^4 =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "16"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q19",
    "number": 19,
    "category": "Sifat-Sifat Eksponen",
    "question": "Untuk \\(x,y\\neq0\\), bentuk sederhana dari \\(\\frac{(x^2y^3)^2}{xy^2}\\) adalah ....",
    "options": [
      "x³y⁴",
      "x²y⁵",
      "x³y⁸",
      "x⁴y⁴",
      "xy"
    ],
    "correct": 0,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kurangi pangkat \\(x\\): 4 − 1 = {{0}}.",
        "template": "Kurangi pangkat \\(x\\): 4 − 1 = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Kurangi pangkat \\(y\\): 6 − 2 = {{0}}.",
        "template": "Kurangi pangkat \\(y\\): 6 − 2 = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk akhir \\(x^m y^n\\) memiliki pangkat \\(m =\\) {{0}} dan \\(n =\\) {{1}}.",
        "template": "Bentuk akhir \\(x^m y^n\\) memiliki pangkat \\(m =\\) {{BLANK_2}} dan \\(n =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "4"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q20",
    "number": 20,
    "category": "Sifat-Sifat Eksponen",
    "question": "Untuk \\(a,b\\neq0\\), bentuk sederhana dari \\(\\left(\\frac ab\\right)^{-2}\\) adalah ....",
    "options": [
      "a²/b²",
      "−b²/a²",
      "b²/a²",
      "a/b²",
      "ab²"
    ],
    "correct": 2,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pangkat negatif membalik pecahan menjadi \\(\\frac{b}{a}\\).",
        "template": "Pangkat negatif membalik pecahan menjadi \\(\\frac{b}{a}\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Kuadratkan pembilang dan penyebut sehingga pangkatnya adalah = {{0}}.",
        "template": "Kuadratkan pembilang dan penyebut sehingga pangkatnya adalah = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk akhir \\(\\frac{b^n}{a^n}\\) memiliki nilai pangkat \\(n =\\) {{0}}.",
        "template": "Bentuk akhir \\(\\frac{b^n}{a^n}\\) memiliki nilai pangkat \\(n =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q21",
    "number": 21,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(2^x=32\\) adalah ....",
    "options": [
      "4",
      "5",
      "6",
      "8",
      "10"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis 32 sebagai pangkat berbasis 2: \\(32 = 2^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Tulis 32 sebagai pangkat berbasis 2: \\(32 = 2^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Persamaan menjadi \\(2^x = 2^5\\).",
        "template": "Persamaan menjadi \\(2^x = 2^5\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Samakan pangkat: \\(x =\\) {{0}}.",
        "template": "Samakan pangkat: \\(x =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "5"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q22",
    "number": 22,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(3^{x+1}=81\\) adalah ....",
    "options": [
      "2",
      "3",
      "4",
      "5",
      "1"
    ],
    "correct": 1,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis 81 sebagai pangkat berbasis 3: \\(81 = 3^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Tulis 81 sebagai pangkat berbasis 3: \\(81 = 3^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Samakan pangkat: \\(x + 1 =\\) {{0}}.",
        "template": "Samakan pangkat: \\(x + 1 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Kurangi kedua ruas dengan 1: \\(x = 4 - 1 =\\) {{0}}.",
        "template": "Kurangi kedua ruas dengan 1: \\(x = 4 - 1 =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q23",
    "number": 23,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(5^{2x}=125\\) adalah ....",
    "options": [
      "1",
      "3/2",
      "2",
      "3",
      "5/2"
    ],
    "correct": 1,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis 125 sebagai pangkat berbasis 5: \\(125 = 5^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Tulis 125 sebagai pangkat berbasis 5: \\(125 = 5^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Samakan pangkat: \\(2x =\\) {{0}}.",
        "template": "Samakan pangkat: \\(2x =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Nilai \\(x = \\frac{a}{b}\\) dengan pembilang \\(a =\\) {{0}} dan penyebut \\(b =\\) {{1}}.",
        "template": "Nilai \\(x = \\frac{a}{b}\\) dengan pembilang \\(a =\\) {{BLANK_2}} dan penyebut \\(b =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "2"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q24",
    "number": 24,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(4^{x-1}=\\frac1{16}\\) adalah ....",
    "options": [
      "−3",
      "−2",
      "−1",
      "1",
      "3"
    ],
    "correct": 2,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah \\(\\frac{1}{16}\\) menjadi pangkat basis 4: \\(4^n\\) dengan nilai pangkat \\(n =\\) {{0}}.",
        "template": "Ubah \\(\\frac{1}{16}\\) menjadi pangkat basis 4: \\(4^n\\) dengan nilai pangkat \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Samakan pangkat: \\(x - 1 =\\) {{0}}.",
        "template": "Samakan pangkat: \\(x - 1 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Tambahkan 1 pada kedua ruas: \\(x = -2 + 1 =\\) {{0}}.",
        "template": "Tambahkan 1 pada kedua ruas: \\(x = -2 + 1 =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "-1"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q25",
    "number": 25,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(9^x=27\\) adalah ....",
    "options": [
      "1/2",
      "1",
      "3/2",
      "2",
      "3"
    ],
    "correct": 2,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah basis ke 3: \\(9 = 3^2\\) dan \\(27 = 3^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Ubah basis ke 3: \\(9 = 3^2\\) dan \\(27 = 3^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Samakan pangkat: \\(2x =\\) {{0}}.",
        "template": "Samakan pangkat: \\(2x =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Nilai \\(x = \\frac{a}{b}\\) dengan pembilang \\(a =\\) {{0}} dan penyebut \\(b =\\) {{1}}.",
        "template": "Nilai \\(x = \\frac{a}{b}\\) dengan pembilang \\(a =\\) {{BLANK_2}} dan penyebut \\(b =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "2"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q26",
    "number": 26,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(8^{x+1}=4^{2x}\\) adalah ....",
    "options": [
      "−3",
      "0",
      "2",
      "3",
      "6"
    ],
    "correct": 3,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah ke basis 2: \\(8 = 2^n\\) dengan \\(n =\\) {{0}}, dan \\(4 = 2^m\\) dengan \\(m =\\) {{1}}.",
        "template": "Ubah ke basis 2: \\(8 = 2^n\\) dengan \\(n =\\) {{BLANK_0}}, dan \\(4 = 2^m\\) dengan \\(m =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Buka kurung pada pangkat: \\(3x +\\) {{0}} \\(= 4x\\).",
        "template": "Buka kurung pada pangkat: \\(3x +\\) {{BLANK_2}} \\(= 4x\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Pindahkan suku variabel: diperoleh \\(x =\\) {{0}}.",
        "template": "Pindahkan suku variabel: diperoleh \\(x =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q27",
    "number": 27,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(4^x=8^{x-1}\\) adalah ....",
    "options": [
      "−3",
      "0",
      "1",
      "3",
      "6"
    ],
    "correct": 3,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah basis: \\(4 = 2^n\\) dengan \\(n =\\) {{0}}, dan \\(8 = 2^m\\) dengan \\(m =\\) {{1}}.",
        "template": "Ubah basis: \\(4 = 2^n\\) dengan \\(n =\\) {{BLANK_0}}, dan \\(8 = 2^m\\) dengan \\(m =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Samakan pangkat: \\(2x = 3x -\\) {{0}}.",
        "template": "Samakan pangkat: \\(2x = 3x -\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Selesaikan persamaan: diperoleh nilai \\(x =\\) {{0}}.",
        "template": "Selesaikan persamaan: diperoleh nilai \\(x =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q28",
    "number": 28,
    "category": "Persamaan Eksponen",
    "question": "Himpunan penyelesaian dari \\(3^{x^2-1}=1\\) adalah ....",
    "options": [
      "{1}",
      "{−1}",
      "{−1, 1}",
      "{0, 1}",
      "{−2, 2}"
    ],
    "correct": 2,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Agar \\(3^{x^2-1} = 1\\), maka pangkatnya harus sama dengan = {{0}}.",
        "template": "Agar \\(3^{x^2-1} = 1\\), maka pangkatnya harus sama dengan = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "0"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Persamaan menjadi \\(x^2 - 1 = 0 \\implies x^2 =\\) {{0}}.",
        "template": "Persamaan menjadi \\(x^2 - 1 = 0 \\implies x^2 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Akar penyelesaian positifnya adalah \\(x =\\) {{0}}, dan negatifnya adalah \\(x =\\) {{1}}.",
        "template": "Akar penyelesaian positifnya adalah \\(x =\\) {{BLANK_2}}, dan negatifnya adalah \\(x =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "1"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "-1"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q29",
    "number": 29,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(2^x=\\frac18\\) adalah ....",
    "options": [
      "−4",
      "−3",
      "−2",
      "3",
      "8"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis \\(\\frac{1}{8}\\) sebagai pangkat berbasis 2: \\(2^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Tulis \\(\\frac{1}{8}\\) sebagai pangkat berbasis 2: \\(2^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Persamaan menjadi \\(2^x = 2^{-3}\\).",
        "template": "Persamaan menjadi \\(2^x = 2^{-3}\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Samakan pangkat: diperoleh \\(x =\\) {{0}}.",
        "template": "Samakan pangkat: diperoleh \\(x =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q30",
    "number": 30,
    "category": "Persamaan Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(5^{x-2}=\\frac1{25}\\) adalah ....",
    "options": [
      "−4",
      "−2",
      "0",
      "2",
      "4"
    ],
    "correct": 2,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis \\(\\frac{1}{25}\\) sebagai pangkat berbasis 5: \\(5^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Tulis \\(\\frac{1}{25}\\) sebagai pangkat berbasis 5: \\(5^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Samakan pangkat: \\(x - 2 =\\) {{0}}.",
        "template": "Samakan pangkat: \\(x - 2 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Tambahkan 2 pada kedua ruas: \\(x = -2 + 2 =\\) {{0}}.",
        "template": "Tambahkan 2 pada kedua ruas: \\(x = -2 + 2 =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "0"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q31",
    "number": 31,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Bentuk sederhana dari \\(\\sqrt{72}\\) adalah ....",
    "options": [
      "6√2",
      "4√3",
      "3√2",
      "8√2",
      "6√3"
    ],
    "correct": 0,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Faktorkan 72 menjadi kuadrat sempurna terbesar: 72 = {{0}} × 2.",
        "template": "Faktorkan 72 menjadi kuadrat sempurna terbesar: 72 = {{BLANK_0}} × 2.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "36"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung akar dari kuadrat sempurna tersebut: \\(\\sqrt{36} =\\) {{0}}.",
        "template": "Hitung akar dari kuadrat sempurna tersebut: \\(\\sqrt{36} =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "6"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk sederhana adalah \\(n\\sqrt{2}\\) dengan koefisien \\(n =\\) {{0}}.",
        "template": "Bentuk sederhana adalah \\(n\\sqrt{2}\\) dengan koefisien \\(n =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "6"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q32",
    "number": 32,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Bentuk sederhana dari \\(\\sqrt{75}\\) adalah ....",
    "options": [
      "3√5",
      "5√3",
      "15√3",
      "5√5",
      "25√3"
    ],
    "correct": 1,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Faktorkan 75 menjadi kuadrat sempurna: 75 = {{0}} × 3.",
        "template": "Faktorkan 75 menjadi kuadrat sempurna: 75 = {{BLANK_0}} × 3.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "25"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung akar dari kuadrat sempurna tersebut: \\(\\sqrt{25} =\\) {{0}}.",
        "template": "Hitung akar dari kuadrat sempurna tersebut: \\(\\sqrt{25} =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk sederhana adalah \\(n\\sqrt{3}\\) dengan koefisien \\(n =\\) {{0}}.",
        "template": "Bentuk sederhana adalah \\(n\\sqrt{3}\\) dengan koefisien \\(n =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "5"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q33",
    "number": 33,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Bentuk sederhana dari \\(\\sqrt[3]{128}\\) adalah ....",
    "options": [
      "2∛16",
      "4∛2",
      "8∛2",
      "4∛4",
      "2∛4"
    ],
    "correct": 1,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Faktorkan 128 dengan kubik sempurna: 128 = {{0}} × 2.",
        "template": "Faktorkan 128 dengan kubik sempurna: 128 = {{BLANK_0}} × 2.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "64"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung akar pangkat tiga: \\(\\sqrt[3]{64} =\\) {{0}}.",
        "template": "Hitung akar pangkat tiga: \\(\\sqrt[3]{64} =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk sederhana adalah \\(n\\sqrt[3]{2}\\) dengan koefisien \\(n =\\) {{0}}.",
        "template": "Bentuk sederhana adalah \\(n\\sqrt[3]{2}\\) dengan koefisien \\(n =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q34",
    "number": 34,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Nilai dari \\(\\sqrt8\\times\\sqrt2\\) adalah ....",
    "options": [
      "2",
      "4",
      "8",
      "4√2",
      "16"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gabungkan radikan: \\(\\sqrt{8} \\times \\sqrt{2} = \\sqrt{8 \\times 2}\\).",
        "template": "Gabungkan radikan: \\(\\sqrt{8} \\times \\sqrt{2} = \\sqrt{8 \\times 2}\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung hasil kali di dalam akar: 8 × 2 = {{0}}.",
        "template": "Hitung hasil kali di dalam akar: 8 × 2 = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "16"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hitung nilai akar kuadratnya: \\(\\sqrt{16} =\\) {{0}}.",
        "template": "Hitung nilai akar kuadratnya: \\(\\sqrt{16} =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "4"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q35",
    "number": 35,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Nilai dari \\(\\frac{\\sqrt{45}}{\\sqrt5}\\) adalah ....",
    "options": [
      "3",
      "9",
      "√5",
      "3√5",
      "5"
    ],
    "correct": 0,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Bagi radikan di dalam akar: 45 ÷ 5 = {{0}}.",
        "template": "Bagi radikan di dalam akar: 45 ÷ 5 = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "9"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung nilai akar kuadratnya: \\(\\sqrt{9} =\\) {{0}}.",
        "template": "Hitung nilai akar kuadratnya: \\(\\sqrt{9} =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q36",
    "number": 36,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Nilai dari \\((2\\sqrt3)^2\\) adalah ....",
    "options": [
      "4√3",
      "6",
      "12",
      "12√3",
      "36"
    ],
    "correct": 2,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kuadratkan koefisien luar: \\(2^2 =\\) {{0}}.",
        "template": "Kuadratkan koefisien luar: \\(2^2 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Kuadratkan bentuk akar: \\((\\sqrt{3})^2 =\\) {{0}}.",
        "template": "Kuadratkan bentuk akar: \\((\\sqrt{3})^2 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Kalikan kedua hasil tersebut: {{0}} × {{1}} = {{2}}.",
        "template": "Kalikan kedua hasil tersebut: {{BLANK_2}} × {{BLANK_3}} = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "12"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q37",
    "number": 37,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Bentuk sederhana dari \\(\\sqrt7+\\sqrt7\\) adalah ....",
    "options": [
      "√14",
      "2√7",
      "7√2",
      "14",
      "2√14"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kedua suku memiliki radikan sama (akar sejenis).",
        "template": "Kedua suku memiliki radikan sama (akar sejenis).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Jumlahkan koefisien depan: 1 + 1 = {{0}}.",
        "template": "Jumlahkan koefisien depan: 1 + 1 = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk akhirnya adalah \\(n\\sqrt{7}\\) dengan koefisien \\(n =\\) {{0}}.",
        "template": "Bentuk akhirnya adalah \\(n\\sqrt{7}\\) dengan koefisien \\(n =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q38",
    "number": 38,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Bentuk rasional sederhana dari \\(\\frac3{\\sqrt3}\\) adalah ....",
    "options": [
      "√3",
      "3√3",
      "1/√3",
      "√6",
      "3"
    ],
    "correct": 0,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kalikan sekawan \\(\\frac{3}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}\\).",
        "template": "Kalikan sekawan \\(\\frac{3}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}}\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Penyebut menjadi \\(\\sqrt{3} \\times \\sqrt{3} =\\) {{0}}.",
        "template": "Penyebut menjadi \\(\\sqrt{3} \\times \\sqrt{3} =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bagi pembilang 3 dengan penyebut 3: 3 ÷ 3 = {{0}} (sehingga hasilnya \\(1\\sqrt{3}\\)).",
        "template": "Bagi pembilang 3 dengan penyebut 3: 3 ÷ 3 = {{BLANK_1}} (sehingga hasilnya \\(1\\sqrt{3}\\)).",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q39",
    "number": 39,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Bentuk sederhana dari \\(\\frac1{\\sqrt5-2}\\) setelah penyebut dirasionalkan adalah ....",
    "options": [
      "√5−2",
      "√5+2",
      "1/(√5+2)",
      "5+2√5",
      "2√5+5"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kalikan pasangan sekawan \\(\\sqrt{5}+2\\).",
        "template": "Kalikan pasangan sekawan \\(\\sqrt{5}+2\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Penyebut: \\((\\sqrt{5})^2 - 2^2 = 5 - 4 =\\) {{0}}.",
        "template": "Penyebut: \\((\\sqrt{5})^2 - 2^2 = 5 - 4 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk pembilang menjadi \\(\\sqrt{5} + n\\) dengan nilai konstanta \\(n =\\) {{0}}.",
        "template": "Bentuk pembilang menjadi \\(\\sqrt{5} + n\\) dengan nilai konstanta \\(n =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q40",
    "number": 40,
    "category": "Bentuk Akar & Pangkat Pecahan",
    "question": "Nilai dari \\(16^{3/4}\\) adalah ....",
    "options": [
      "2",
      "4",
      "6",
      "8",
      "16"
    ],
    "correct": 3,
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Indeks akar = {{0}} dan pangkat luar = {{1}}.",
        "template": "Indeks akar = {{BLANK_0}} dan pangkat luar = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Akar ke-4 dari 16 adalah \\(\\sqrt[4]{16} =\\) {{0}}.",
        "template": "Akar ke-4 dari 16 adalah \\(\\sqrt[4]{16} =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Pangkatkan hasil akar tersebut: \\(2^3 =\\) {{0}}.",
        "template": "Pangkatkan hasil akar tersebut: \\(2^3 =\\) {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "8"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q41",
    "number": 41,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Jika \\(f(x)=2^x\\), nilai \\(f(3)\\) adalah ....",
    "options": [
      "6",
      "8",
      "9",
      "16",
      "32"
    ],
    "correct": 1,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ganti \\(x\\) dengan 3: \\(f(3) = 2^n\\) dengan pangkat \\(n =\\) {{0}}.",
        "template": "Ganti \\(x\\) dengan 3: \\(f(3) = 2^n\\) dengan pangkat \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Uraikan perkalian: {{0}} × {{1}} × {{2}}.",
        "template": "Uraikan perkalian: {{BLANK_1}} × {{BLANK_2}} × {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hasil akhirnya = {{0}}.",
        "template": "Hasil akhirnya = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "8"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q42",
    "number": 42,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Jika \\(f(x)=3^{x-1}\\), nilai \\(f(2)\\) adalah ....",
    "options": [
      "1",
      "3",
      "6",
      "9",
      "27"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Substitusi \\(x = 2\\): pangkat menjadi 2 − 1 = {{0}}.",
        "template": "Substitusi \\(x = 2\\): pangkat menjadi 2 − 1 = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Maka \\(f(2) = 3^1 =\\) {{0}}.",
        "template": "Maka \\(f(2) = 3^1 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q43",
    "number": 43,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Jika \\(f(x)=\\left(\\frac12\\right)^x\\), nilai \\(f(-2)\\) adalah ....",
    "options": [
      "1/4",
      "1/2",
      "2",
      "4",
      "8"
    ],
    "correct": 3,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Substitusi \\(x = -2\\): pangkatnya adalah = {{0}}.",
        "template": "Substitusi \\(x = -2\\): pangkatnya adalah = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat negatif membalik \\(\\frac{1}{2}\\) menjadi = {{0}}.",
        "template": "Pangkat negatif membalik \\(\\frac{1}{2}\\) menjadi = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hitung hasil kuadratnya: \\(2^2 =\\) {{0}}.",
        "template": "Hitung hasil kuadratnya: \\(2^2 =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q44",
    "number": 44,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Fungsi berikut yang naik untuk setiap kenaikan nilai \\(x\\) adalah ....",
    "options": [
      "(1/2)ˣ",
      "(1/4)ˣ",
      "3ˣ",
      "(0,8)ˣ",
      "(1/10)ˣ"
    ],
    "correct": 2,
    "totalBlanks": 1,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Fungsi eksponen \\(a^x\\) naik jika basis \\(a > 1\\).",
        "template": "Fungsi eksponen \\(a^x\\) naik jika basis \\(a > 1\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Dari opsi yang tersedia, basis yang lebih besar dari 1 adalah = {{0}}.",
        "template": "Dari opsi yang tersedia, basis yang lebih besar dari 1 adalah = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q45",
    "number": 45,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Domain dari fungsi \\(f(x)=5^x\\) adalah ....",
    "options": [
      "x > 0",
      "x ≥ 0",
      "semua bilangan real",
      "x ≠ 0",
      "bilangan bulat saja"
    ],
    "correct": 2,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Domain fungsi eksponen dasar mencakup semua bilangan real.",
        "template": "Domain fungsi eksponen dasar mencakup semua bilangan real.",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Jika \\(x = 0\\), nilai fungsinya \\(5^0 =\\) {{0}}.",
        "template": "Jika \\(x = 0\\), nilai fungsinya \\(5^0 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Jika \\(x = 1\\), nilai fungsinya \\(5^1 =\\) {{0}}.",
        "template": "Jika \\(x = 1\\), nilai fungsinya \\(5^1 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "5"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q46",
    "number": 46,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Range dari fungsi \\(f(x)=2^x\\) adalah ....",
    "options": [
      "semua bilangan real",
      "[0, ∞)",
      "(0, ∞)",
      "(−∞, 0)",
      "(1, ∞)"
    ],
    "correct": 2,
    "totalBlanks": 1,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Untuk basis positif, nilai \\(2^x\\) selalu bernilai positif.",
        "template": "Untuk basis positif, nilai \\(2^x\\) selalu bernilai positif.",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Batas bawah kurva mendekati nilai asimtot = {{0}}.",
        "template": "Batas bawah kurva mendekati nilai asimtot = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "0"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q47",
    "number": 47,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Grafik \\(y=2^x\\) melalui titik ....",
    "options": [
      "(0, 0)",
      "(0, 1)",
      "(1, 0)",
      "(1, 1)",
      "(−1, 0)"
    ],
    "correct": 1,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Titik potong sumbu-y diperoleh saat \\(x =\\) {{0}}.",
        "template": "Titik potong sumbu-y diperoleh saat \\(x =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "0"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung nilai \\(y = 2^0 =\\) {{0}}.",
        "template": "Hitung nilai \\(y = 2^0 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Titik potong yang dilalui adalah (0, {{0}}).",
        "template": "Titik potong yang dilalui adalah (0, {{BLANK_2}}).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "1"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q48",
    "number": 48,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Jumlah awal suatu populasi adalah 200 dan bertambah 10% setiap tahun. Model jumlah setelah 2 tahun adalah \\(200(1,1)^2\\). Nilai setelah 2 tahun adalah ....",
    "options": [
      "220",
      "240",
      "242",
      "250",
      "420"
    ],
    "correct": 2,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Persentase 10% diubah ke desimal = 10 ÷ 100 = {{0}}.",
        "template": "Persentase 10% diubah ke desimal = 10 ÷ 100 = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "0.1",
              "0,1"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Faktor pertumbuhan setiap tahun = 1 + 0,1 = {{0}}.",
        "template": "Faktor pertumbuhan setiap tahun = 1 + 0,1 = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1.1",
              "1,1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Jumlah populasi setelah 2 tahun = 200 × (1,1)^2 = {{0}}.",
        "template": "Jumlah populasi setelah 2 tahun = 200 × (1,1)^2 = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "242"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q49",
    "number": 49,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Suatu zat berjumlah 800 gram dan berkurang 25% setiap jam. Banyak zat setelah 2 jam adalah ....",
    "options": [
      "400 gram",
      "450 gram",
      "500 gram",
      "600 gram",
      "750 gram"
    ],
    "correct": 1,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Persentase peluruhan 25% = 25 ÷ 100 = {{0}}.",
        "template": "Persentase peluruhan 25% = 25 ÷ 100 = {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "0.25",
              "0,25"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Faktor sisa setiap jam = 1 − 0,25 = {{0}}.",
        "template": "Faktor sisa setiap jam = 1 − 0,25 = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "0.75",
              "0,75"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Zat tersisa setelah 2 jam = 800 × (0,75)^2 = {{0}} gram.",
        "template": "Zat tersisa setelah 2 jam = 800 × (0,75)^2 = {{BLANK_2}} gram.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "450"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q50",
    "number": 50,
    "category": "Fungsi Eksponen & Pemodelan",
    "question": "Asimtot horizontal grafik \\(y=2^x+3\\) adalah ....",
    "options": [
      "y = 0",
      "y = 1",
      "y = 2",
      "y = 3",
      "x = 3"
    ],
    "correct": 3,
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Asimtot horizontal fungsi dasar \\(y = 2^x\\) adalah \\(y =\\) {{0}}.",
        "template": "Asimtot horizontal fungsi dasar \\(y = 2^x\\) adalah \\(y =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "0"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Konstanta +3 menggeser grafik ke atas sebanyak = {{0}} satuan.",
        "template": "Konstanta +3 menggeser grafik ke atas sebanyak = {{BLANK_1}} satuan.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Persamaan asimtot baru adalah \\(y =\\) {{0}}.",
        "template": "Persamaan asimtot baru adalah \\(y =\\) {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q51",
    "number": 51,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai dari \\(\\log_2 8\\) adalah ....",
    "options": [
      "2",
      "3",
      "4",
      "8",
      "16"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Bentuk eksponen dari \\(\\log_2 8 = c\\) adalah \\(2^c =\\) {{0}}.",
        "template": "Bentuk eksponen dari \\(\\log_2 8 = c\\) adalah \\(2^c =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "8"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Cari pangkat basis 2 yang menghasilkan 8: diperoleh \\(c =\\) {{0}}.",
        "template": "Cari pangkat basis 2 yang menghasilkan 8: diperoleh \\(c =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q52",
    "number": 52,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai dari \\(\\log_3\\frac1{27}\\) adalah ....",
    "options": [
      "−4",
      "−3",
      "−1",
      "1/3",
      "3"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis \\(\\frac{1}{27}\\) sebagai pangkat 3: \\(3^n\\) dengan nilai pangkat \\(n =\\) {{0}}.",
        "template": "Tulis \\(\\frac{1}{27}\\) sebagai pangkat 3: \\(3^n\\) dengan nilai pangkat \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Maka nilai logaritma \\(\\log_3 \\frac{1}{27} =\\) {{0}}.",
        "template": "Maka nilai logaritma \\(\\log_3 \\frac{1}{27} =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q53",
    "number": 53,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai dari \\(\\log_5 25\\) adalah ....",
    "options": [
      "1",
      "2",
      "3",
      "5",
      "25"
    ],
    "correct": 1,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis 25 sebagai pangkat berbasis 5: \\(25 = 5^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Tulis 25 sebagai pangkat berbasis 5: \\(25 = 5^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Maka nilai \\(\\log_5 25 =\\) {{0}}.",
        "template": "Maka nilai \\(\\log_5 25 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q54",
    "number": 54,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai dari \\(\\log_{10}0,001\\) adalah ....",
    "options": [
      "−1",
      "−2",
      "−3",
      "2",
      "3"
    ],
    "correct": 2,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pecahan desimal 0,001 dapat ditulis \\(10^n\\) dengan pangkat \\(n =\\) {{0}}.",
        "template": "Pecahan desimal 0,001 dapat ditulis \\(10^n\\) dengan pangkat \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "-3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Maka nilai logaritma basis 10 tersebut adalah = {{0}}.",
        "template": "Maka nilai logaritma basis 10 tersebut adalah = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q55",
    "number": 55,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai dari \\(\\log_4 8\\) adalah ....",
    "options": [
      "1/2",
      "1",
      "3/2",
      "2",
      "3"
    ],
    "correct": 2,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah basis dan numerus ke basis 2: \\(4 = 2^2\\) dan \\(8 = 2^n\\) dengan \\(n =\\) {{0}}.",
        "template": "Ubah basis dan numerus ke basis 2: \\(4 = 2^2\\) dan \\(8 = 2^n\\) dengan \\(n =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat numerus dibagi pangkat basis: 3 ÷ 2 = {{0}} (atau pembilang 3 dan penyebut 2).",
        "template": "Pangkat numerus dibagi pangkat basis: 3 ÷ 2 = {{BLANK_1}} (atau pembilang 3 dan penyebut 2).",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1.5",
              "1,5",
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q56",
    "number": 56,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai dari \\(\\log_2 32+\\log_2 4\\) adalah ....",
    "options": [
      "5",
      "6",
      "7",
      "8",
      "9"
    ],
    "correct": 2,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Hitung nilai \\(\\log_2 32 =\\) {{0}}.",
        "template": "Hitung nilai \\(\\log_2 32 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung nilai \\(\\log_2 4 =\\) {{0}}.",
        "template": "Hitung nilai \\(\\log_2 4 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Jumlahkan kedua nilai: {{0}} + {{1}} = {{2}}.",
        "template": "Jumlahkan kedua nilai: {{BLANK_2}} + {{BLANK_3}} = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "5"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "7"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q57",
    "number": 57,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Jika \\(\\log_3 81-\\log_3 3\\), hasilnya adalah ....",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": 2,
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Hitung nilai \\(\\log_3 81 =\\) {{0}}.",
        "template": "Hitung nilai \\(\\log_3 81 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung nilai \\(\\log_3 3 =\\) {{0}}.",
        "template": "Hitung nilai \\(\\log_3 3 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Kurangkan kedua nilai: {{0}} − {{1}} = {{2}}.",
        "template": "Kurangkan kedua nilai: {{BLANK_2}} − {{BLANK_3}} = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "1"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "3"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q58",
    "number": 58,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Jika \\(\\log_2 3=m\\) dan \\(\\log_2 5=n\\), bentuk \\(\\log_2 15\\) adalah ....",
    "options": [
      "m + n",
      "mn",
      "m − n",
      "n/m",
      "m/n"
    ],
    "correct": 0,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Faktorkan 15 menjadi perkalian dua bilangan prima: 15 = {{0}} × {{1}}.",
        "template": "Faktorkan 15 menjadi perkalian dua bilangan prima: 15 = {{BLANK_0}} × {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Gunakan sifat penjumlahan logaritma: \\(\\log_2 15 = \\log_2 3 + \\log_2 5\\).",
        "template": "Gunakan sifat penjumlahan logaritma: \\(\\log_2 15 = \\log_2 3 + \\log_2 5\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Ganti \\(\\log_2 3 = m\\) dan \\(\\log_2 5 = n\\) sehingga hasilnya \\(m + n\\).",
        "template": "Ganti \\(\\log_2 3 = m\\) dan \\(\\log_2 5 = n\\) sehingga hasilnya \\(m + n\\).",
        "blanks": []
      }
    ]
  },
  {
    "id": "les_q59",
    "number": 59,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(\\log_5(x-1)=2\\) adalah ....",
    "options": [
      "24",
      "25",
      "26",
      "6",
      "126"
    ],
    "correct": 2,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah ke bentuk eksponen: \\(x - 1 = 5^2\\).",
        "template": "Ubah ke bentuk eksponen: \\(x - 1 = 5^2\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung perpangkatan \\(5^2 =\\) {{0}}.",
        "template": "Hitung perpangkatan \\(5^2 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "25"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Tambahkan 1 pada kedua ruas: \\(x = 25 + 1 =\\) {{0}}.",
        "template": "Tambahkan 1 pada kedua ruas: \\(x = 25 + 1 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "26"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "les_q60",
    "number": 60,
    "category": "Logaritma sebagai Invers Eksponen",
    "question": "Nilai \\(x\\) yang memenuhi \\(\\log_2(x+1)=4\\) adalah ....",
    "options": [
      "7",
      "14",
      "15",
      "16",
      "17"
    ],
    "correct": 2,
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah ke bentuk eksponen: \\(x + 1 = 2^4\\).",
        "template": "Ubah ke bentuk eksponen: \\(x + 1 = 2^4\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung perpangkatan \\(2^4 =\\) {{0}}.",
        "template": "Hitung perpangkatan \\(2^4 =\\) {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "16"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Kurangi 1 pada kedua ruas: \\(x = 16 - 1 =\\) {{0}}.",
        "template": "Kurangi 1 pada kedua ruas: \\(x = 16 - 1 =\\) {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "15"
            ]
          }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LES_QUESTIONS };
}
