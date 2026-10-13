// Bank Soal CBT Peserta Les — Bab 1: Eksponen & Logaritma Fase E
// Total: 60 Soal Berurutan dengan Guided Steps & Blanks Validation
// Sesi Berkelanjutan (Remedial Iteratif sampai tuntas 60/60)

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
        "rawText": "Basis = ______ dan pangkat = ______.",
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
        "rawText": "Uraikan sebagai perkalian berulang: ______ × ______ × ______ × ______ × ______.",
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
        "rawText": "Hasil perkalian tersebut = ______.",
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
        "rawText": "Karena tanda negatif berada di dalam kurung, basis = ______.",
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
        "rawText": "Uraikan: (−3) × (−3) × (−3) × (−3).",
        "template": "Uraikan: (−3) × (−3) × (−3) × (−3).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Pasangkan faktor negatif: (−3) × (−3) = ______; pasangan berikutnya = ______.",
        "template": "Pasangkan faktor negatif: (−3) × (−3) = {{BLANK_1}}; pasangan berikutnya = {{BLANK_2}}.",
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
        "rawText": "Kalikan hasil pasangan: ______ × ______ = ______.",
        "template": "Kalikan hasil pasangan: {{BLANK_3}} × {{BLANK_4}} = {{BLANK_5}}.",
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
    "totalBlanks": 6,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pangkat dikerjakan pada bilangan ______ terlebih dahulu.",
        "template": "Pangkat dikerjakan pada bilangan {{BLANK_0}} terlebih dahulu.",
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
        "rawText": "Hitung \\(3^2\\): ______ × ______ = ______.",
        "template": "Hitung \\(3^2\\): {{BLANK_1}} × {{BLANK_2}} = {{BLANK_3}}.",
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
        "rawText": "Terapkan tanda negatif di depan hasil: −(______) = ______.",
        "template": "Terapkan tanda negatif di depan hasil: −({{BLANK_4}}) = {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "9"
            ]
          },
          {
            "globalIndex": 5,
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
        "rawText": "Basis = ______; pangkat = ______.",
        "template": "Basis = {{BLANK_0}}; pangkat = {{BLANK_1}}.",
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
        "rawText": "Untuk basis bukan nol, sifat pangkat nol menyatakan \\(a^0=______\\).",
        "template": "Untuk basis bukan nol, sifat pangkat nol menyatakan \\(a^0={{BLANK_2}}\\).",
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
        "rawText": "Maka nilai yang diminta = ______.",
        "template": "Maka nilai yang diminta = {{BLANK_3}}.",
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
        "rawText": "Gunakan \\(a^{-n}=1/a^n\\): \\(2^{-3}=1/______\\).",
        "template": "Gunakan \\(a^{-n}=1/a^n\\): \\(2^{-3}=1/{{BLANK_0}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "8",
              "2^3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung \\(2^3\\): ______ × ______ × ______ = ______.",
        "template": "Hitung \\(2^3\\): {{BLANK_1}} × {{BLANK_2}} × {{BLANK_3}} = {{BLANK_4}}.",
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
        "rawText": "Bentuk pecahan akhirnya = 1/______.",
        "template": "Bentuk pecahan akhirnya = 1/{{BLANK_5}}.",
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
        "rawText": "Pangkat negatif berarti balik pecahan: \\(\\left(\\frac12\\right)^{-2}=\\left(\\frac{______}{______}\\right)^2\\).",
        "template": "Pangkat negatif berarti balik pecahan: \\(\\left(\\frac12\\right)^{-2}=\\left(\\frac{{{BLANK_0}}}{{{BLANK_1}}}\\right)^2\\).",
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
        "rawText": "Kuadratkan pembilang dan penyebut: \\(______^2/______^2\\).",
        "template": "Kuadratkan pembilang dan penyebut: \\({{BLANK_2}}^2/{{BLANK_3}}^2\\).",
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
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Nilai akhirnya = ______.",
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah ke bentuk akar: \\(16^{3/4}=(\\sqrt[______]{16})^{______}\\).",
        "template": "Ubah ke bentuk akar: \\(16^{3/4}=(\\sqrt[{{BLANK_0}}]{16})^{{{BLANK_1}}}\\).",
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
        "rawText": "Nilai akar yang diperlukan = ______.",
        "template": "Nilai akar yang diperlukan = {{BLANK_2}}.",
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
        "rawText": "Pangkatkan hasil akar tersebut dengan pangkat = ______, sehingga diperoleh ______.",
        "template": "Pangkatkan hasil akar tersebut dengan pangkat = {{BLANK_3}}, sehingga diperoleh {{BLANK_4}}.",
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
        "rawText": "Ubah ke bentuk akar: \\(27^{2/3}=(\\sqrt[______]{27})^{______}\\).",
        "template": "Ubah ke bentuk akar: \\(27^{2/3}=(\\sqrt[{{BLANK_0}}]{27})^{{{BLANK_1}}}\\).",
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
        "rawText": "Akar yang diperlukan = ______.",
        "template": "Akar yang diperlukan = {{BLANK_2}}.",
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
        "rawText": "Kuadratkan hasil akar: ______ × ______ = ______.",
        "template": "Kuadratkan hasil akar: {{BLANK_3}} × {{BLANK_4}} = {{BLANK_5}}.",
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
        "rawText": "Misalkan \\(\\sqrt{81}=x\\), maka \\(x^2=______\\).",
        "template": "Misalkan \\(\\sqrt{81}=x\\), maka \\(x^2={{BLANK_0}}\\).",
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
        "rawText": "Cari bilangan tidak negatif yang jika dikuadratkan menghasilkan 81: ______ × ______ = 81.",
        "template": "Cari bilangan tidak negatif yang jika dikuadratkan menghasilkan 81: {{BLANK_1}} × {{BLANK_2}} = 81.",
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
        "rawText": "Maka nilai akar utama = ______.",
        "template": "Maka nilai akar utama = {{BLANK_3}}.",
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
    "totalBlanks": 7,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis = ______; pangkat = ______.",
        "template": "Basis = {{BLANK_0}}; pangkat = {{BLANK_1}}.",
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
        "rawText": "Uraikan menjadi lima faktor: (−2) × (−2) × (−2) × (−2) × (−2).",
        "template": "Uraikan menjadi lima faktor: (−2) × (−2) × (−2) × (−2) × (−2).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Kelompokkan empat faktor pertama menjadi dua pasangan: (______) × (______) = ______.",
        "template": "Kelompokkan empat faktor pertama menjadi dua pasangan: ({{BLANK_2}}) × ({{BLANK_3}}) = {{BLANK_4}}.",
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
              "4"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "16"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Kalikan dengan faktor terakhir dan tentukan tandanya: ______ × (−2) = ______.",
        "template": "Kalikan dengan faktor terakhir dan tentukan tandanya: {{BLANK_5}} × (−2) = {{BLANK_6}}.",
        "blanks": [
          {
            "globalIndex": 5,
            "expected": [
              "16"
            ]
          },
          {
            "globalIndex": 6,
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
    "totalBlanks": 6,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis kedua faktor sama, yaitu ______.",
        "template": "Basis kedua faktor sama, yaitu {{BLANK_0}}.",
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
        "rawText": "Gunakan \\(a^m\\times a^n=a^{m+n}\\): pangkat baru = ______ + ______ = ______.",
        "template": "Gunakan \\(a^m\\times a^n=a^{m+n}\\): pangkat baru = {{BLANK_1}} + {{BLANK_2}} = {{BLANK_3}}.",
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
        "rawText": "Bentuk menjadi \\(2^{______}\\), lalu hitung nilainya = ______.",
        "template": "Bentuk menjadi \\(2^{{{BLANK_4}}}\\), lalu hitung nilainya = {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "7"
            ]
          },
          {
            "globalIndex": 5,
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
    "totalBlanks": 6,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Basis pembilang dan penyebut = ______.",
        "template": "Basis pembilang dan penyebut = {{BLANK_0}}.",
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
        "rawText": "Gunakan aturan pembagian: pangkat baru = ______ − ______ = ______.",
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
        "rawText": "Bentuk menjadi \\(5^{______}\\), lalu hitung nilainya = ______.",
        "template": "Bentuk menjadi \\(5^{{{BLANK_4}}}\\), lalu hitung nilainya = {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 5,
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gunakan \\((a^m)^n=a^{m\\times n}\\).",
        "template": "Gunakan \\((a^m)^n=a^{m\\times n}\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat baru = ______ × ______ = ______.",
        "template": "Pangkat baru = {{BLANK_0}} × {{BLANK_1}} = {{BLANK_2}}.",
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
        "rawText": "Bentuk menjadi \\(3^{______}\\), lalu hasilnya = ______.",
        "template": "Bentuk menjadi \\(3^{{{BLANK_3}}}\\), lalu hasilnya = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "6"
            ]
          },
          {
            "globalIndex": 4,
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Terapkan pangkat pada setiap faktor: \\(2^2\\times(x^3)^2\\).",
        "template": "Terapkan pangkat pada setiap faktor: \\(2^2\\times(x^3)^2\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Koefisien: \\(2^2=______\\).",
        "template": "Koefisien: \\(2^2={{BLANK_0}}\\).",
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
        "stepNumber": 3,
        "rawText": "Pangkat variabel: \\(x^{3\\times2}=x^{______}\\).",
        "template": "Pangkat variabel: \\(x^{3\\times2}=x^{{{BLANK_1}}}\\).",
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
        "stepNumber": 4,
        "rawText": "Gabungkan: ______.",
        "template": "Gabungkan: {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "4x^6",
              "4x⁶"
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Terapkan pangkat pada kedua faktor: \\(a^{______}b^{2\\times______}\\).",
        "template": "Terapkan pangkat pada kedua faktor: \\(a^{{{BLANK_0}}}b^{2\\times{{BLANK_1}}}\\).",
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
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat faktor \\(a\\) = ______.",
        "template": "Pangkat faktor \\(a\\) = {{BLANK_2}}.",
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
        "rawText": "Pangkat faktor \\(b\\) = ______.",
        "template": "Pangkat faktor \\(b\\) = {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "6"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Bentuk gabungan = ______.",
        "template": "Bentuk gabungan = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "a^3b^6",
              "a³b⁶",
              "a3b6"
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gunakan aturan perkalian basis sama.",
        "template": "Gunakan aturan perkalian basis sama.",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Pangkat baru = ______ + (−______) = ______.",
        "template": "Pangkat baru = {{BLANK_0}} + (−{{BLANK_1}}) = {{BLANK_2}}.",
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
              "2"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Bentuk sederhana = \\(x^{______}\\).",
        "template": "Bentuk sederhana = \\(x^{{{BLANK_3}}}\\).",
        "blanks": [
          {
            "globalIndex": 3,
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
    "totalBlanks": 7,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Untuk basis \\(a\\): pangkat baru = ______ − (−______) = ______.",
        "template": "Untuk basis \\(a\\): pangkat baru = {{BLANK_0}} − (−{{BLANK_1}}) = {{BLANK_2}}.",
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
              "1"
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
        "stepNumber": 2,
        "rawText": "Untuk basis \\(b\\): pangkat baru = ______ − ______ = ______.",
        "template": "Untuk basis \\(b\\): pangkat baru = {{BLANK_3}} − {{BLANK_4}} = {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "-2"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "4"
            ]
          },
          {
            "globalIndex": 5,
            "expected": [
              "-6"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Ubah pangkat negatif menggunakan kebalikan.",
        "template": "Ubah pangkat negatif menggunakan kebalikan.",
        "blanks": []
      },
      {
        "stepNumber": 4,
        "rawText": "Bentuk akhir = ______.",
        "template": "Bentuk akhir = {{BLANK_6}}.",
        "blanks": [
          {
            "globalIndex": 6,
            "expected": [
              "a^4/b^6",
              "a⁴/b⁶",
              "a4/b6"
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
    "totalBlanks": 7,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Sederhanakan di dalam kurung: \\(2^{______+(−______)}=2^{______}\\).",
        "template": "Sederhanakan di dalam kurung: \\(2^{{{BLANK_0}}+(−{{BLANK_1}})}=2^{{{BLANK_2}}}\\).",
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
              "1"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Terapkan pangkat di luar kurung: \\((2^m)^n=2^{m\\times n}\\).",
        "template": "Terapkan pangkat di luar kurung: \\((2^m)^n=2^{m\\times n}\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Pangkat akhir = ______ × ______ = ______.",
        "template": "Pangkat akhir = {{BLANK_3}} × {{BLANK_4}} = {{BLANK_5}}.",
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
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Nilai numeriknya = ______.",
        "template": "Nilai numeriknya = {{BLANK_6}}.",
        "blanks": [
          {
            "globalIndex": 6,
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
    "totalBlanks": 9,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kembangkan pembilang: \\(x^{2\\times______}y^{3\\times______}\\).",
        "template": "Kembangkan pembilang: \\(x^{2\\times{{BLANK_0}}}y^{3\\times{{BLANK_1}}}\\).",
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
              "2"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Kurangi pangkat \\(x\\): ______ − ______ = ______.",
        "template": "Kurangi pangkat \\(x\\): {{BLANK_2}} − {{BLANK_3}} = {{BLANK_4}}.",
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
      },
      {
        "stepNumber": 3,
        "rawText": "Kurangi pangkat \\(y\\): ______ − ______ = ______.",
        "template": "Kurangi pangkat \\(y\\): {{BLANK_5}} − {{BLANK_6}} = {{BLANK_7}}.",
        "blanks": [
          {
            "globalIndex": 5,
            "expected": [
              "6"
            ]
          },
          {
            "globalIndex": 6,
            "expected": [
              "2"
            ]
          },
          {
            "globalIndex": 7,
            "expected": [
              "4"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Gabungkan hasil = ______.",
        "template": "Gabungkan hasil = {{BLANK_8}}.",
        "blanks": [
          {
            "globalIndex": 8,
            "expected": [
              "x^3y^4",
              "x³y⁴",
              "x3y4"
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pangkat negatif pada pecahan membuat pecahan dibalik.",
        "template": "Pangkat negatif pada pecahan membuat pecahan dibalik.",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Tuliskan menjadi \\(\\left(\\frac{______}{______}\\right)^2\\).",
        "template": "Tuliskan menjadi \\(\\left(\\frac{{{BLANK_0}}}{{{BLANK_1}}}\\right)^2\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "b"
            ]
          },
          {
            "globalIndex": 1,
            "expected": [
              "a"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Kuadratkan pembilang dan penyebut: \\(______^2/______^2\\).",
        "template": "Kuadratkan pembilang dan penyebut: \\({{BLANK_2}}^2/{{BLANK_3}}^2\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "b"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "a"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Bentuk akhir = ______.",
        "template": "Bentuk akhir = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "b^2/a^2",
              "b²/a²",
              "b2/a2"
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis 32 sebagai pangkat berbasis 2: \\(32=2^{______}\\).",
        "template": "Tulis 32 sebagai pangkat berbasis 2: \\(32=2^{{{BLANK_0}}}\\).",
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
        "rawText": "Persamaan menjadi \\(2^x=2^{______}\\).",
        "template": "Persamaan menjadi \\(2^x=2^{{{BLANK_1}}}\\).",
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
        "rawText": "Samakan pangkat: \\(x=______\\).",
        "template": "Samakan pangkat: \\(x={{BLANK_2}}\\).",
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis 81 sebagai pangkat berbasis 3: \\(81=3^{______}\\).",
        "template": "Tulis 81 sebagai pangkat berbasis 3: \\(81=3^{{{BLANK_0}}}\\).",
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
        "rawText": "Samakan pangkat: \\(x+1=______\\).",
        "template": "Samakan pangkat: \\(x+1={{BLANK_1}}\\).",
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
        "rawText": "Kurangi kedua ruas dengan 1: \\(x=______−1=______\\).",
        "template": "Kurangi kedua ruas dengan 1: \\(x={{BLANK_2}}−1={{BLANK_3}}\\).",
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
        "rawText": "Tulis 125 sebagai pangkat berbasis 5: \\(125=5^{______}\\).",
        "template": "Tulis 125 sebagai pangkat berbasis 5: \\(125=5^{{{BLANK_0}}}\\).",
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
        "rawText": "Samakan pangkat: \\(2x=______\\).",
        "template": "Samakan pangkat: \\(2x={{BLANK_1}}\\).",
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
        "rawText": "Bagi kedua ruas dengan 2: \\(x=______ / 2=______\\).",
        "template": "Bagi kedua ruas dengan 2: \\(x={{BLANK_2}} / 2={{BLANK_3}}\\).",
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
              "3/2",
              "1.5"
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah \\(1/16\\) menjadi pangkat berbasis 4: \\(1/16=4^{______}\\).",
        "template": "Ubah \\(1/16\\) menjadi pangkat berbasis 4: \\(1/16=4^{{{BLANK_0}}}\\).",
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
        "rawText": "Samakan pangkat: \\(x-1=______\\).",
        "template": "Samakan pangkat: \\(x-1={{BLANK_1}}\\).",
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
        "rawText": "Tambahkan 1 pada kedua ruas: \\(x=______+1=______\\).",
        "template": "Tambahkan 1 pada kedua ruas: \\(x={{BLANK_2}}+1={{BLANK_3}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "-2"
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
        "rawText": "Ubah basis menjadi 3: \\(9=3^2\\) dan \\(27=3^{______}\\).",
        "template": "Ubah basis menjadi 3: \\(9=3^2\\) dan \\(27=3^{{{BLANK_0}}}\\).",
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
        "rawText": "Persamaan menjadi \\(3^{2x}=3^{______}\\).",
        "template": "Persamaan menjadi \\(3^{2x}=3^{{{BLANK_1}}}\\).",
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
        "rawText": "Samakan pangkat: \\(2x=______\\).",
        "template": "Samakan pangkat: \\(2x={{BLANK_2}}\\).",
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
        "stepNumber": 4,
        "rawText": "Bagi kedua ruas dengan 2: \\(x=______\\).",
        "template": "Bagi kedua ruas dengan 2: \\(x={{BLANK_3}}\\).",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "3/2",
              "1.5"
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah basis ke 2: \\(8=2^{______}\\) dan \\(4=2^{______}\\).",
        "template": "Ubah basis ke 2: \\(8=2^{{{BLANK_0}}}\\) dan \\(4=2^{{{BLANK_1}}}\\).",
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
        "rawText": "Ruas kiri menjadi \\(2^{3(x+1)}\\); ruas kanan menjadi \\(2^{2(2x)}\\).",
        "template": "Ruas kiri menjadi \\(2^{3(x+1)}\\); ruas kanan menjadi \\(2^{2(2x)}\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Samakan pangkat dan buka kurung: \\(3x+______=______x\\).",
        "template": "Samakan pangkat dan buka kurung: \\(3x+{{BLANK_2}}={{BLANK_3}}x\\).",
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
      },
      {
        "stepNumber": 4,
        "rawText": "Pindahkan suku yang memuat \\(x\\), lalu tentukan \\(x=______\\).",
        "template": "Pindahkan suku yang memuat \\(x\\), lalu tentukan \\(x={{BLANK_4}}\\).",
        "blanks": [
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
        "rawText": "Ubah kedua basis ke basis 2: \\(4=2^{______}\\), \\(8=2^{______}\\).",
        "template": "Ubah kedua basis ke basis 2: \\(4=2^{{{BLANK_0}}}\\), \\(8=2^{{{BLANK_1}}}\\).",
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
        "rawText": "Bentuk ekuivalen: \\(2^{2x}=2^{3(x-1)}\\).",
        "template": "Bentuk ekuivalen: \\(2^{2x}=2^{3(x-1)}\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Samakan pangkat: \\(2x=3x-______\\).",
        "template": "Samakan pangkat: \\(2x=3x-{{BLANK_2}}\\).",
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
        "stepNumber": 4,
        "rawText": "Selesaikan persamaan linear yang diperoleh: \\(x=______\\).",
        "template": "Selesaikan persamaan linear yang diperoleh: \\(x={{BLANK_3}}\\).",
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Karena basis 3 positif dan tidak sama dengan 1, agar hasilnya 1 pangkat harus = ______.",
        "template": "Karena basis 3 positif dan tidak sama dengan 1, agar hasilnya 1 pangkat harus = {{BLANK_0}}.",
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
        "rawText": "Bentuk persamaan: \\(x^2-1=______\\).",
        "template": "Bentuk persamaan: \\(x^2-1={{BLANK_1}}\\).",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "0"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Tambahkan 1 pada kedua ruas: \\(x^2=______\\).",
        "template": "Tambahkan 1 pada kedua ruas: \\(x^2={{BLANK_2}}\\).",
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
        "stepNumber": 4,
        "rawText": "Nilai yang kuadratnya sama dengan hasil tersebut: \\(x=______\\) atau \\(x=______\\).",
        "template": "Nilai yang kuadratnya sama dengan hasil tersebut: \\(x={{BLANK_3}}\\) atau \\(x={{BLANK_4}}\\).",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "1",
              "-1"
            ]
          },
          {
            "globalIndex": 4,
            "expected": [
              "-1",
              "1"
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis \\(1/8\\) sebagai pangkat berbasis 2: \\(1/8=2^{______}\\).",
        "template": "Tulis \\(1/8\\) sebagai pangkat berbasis 2: \\(1/8=2^{{{BLANK_0}}}\\).",
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
        "rawText": "Persamaan menjadi \\(2^x=2^{______}\\).",
        "template": "Persamaan menjadi \\(2^x=2^{{{BLANK_1}}}\\).",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Samakan pangkat: \\(x=______\\).",
        "template": "Samakan pangkat: \\(x={{BLANK_2}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Tulis \\(1/25\\) sebagai pangkat berbasis 5: \\(1/25=5^{______}\\).",
        "template": "Tulis \\(1/25\\) sebagai pangkat berbasis 5: \\(1/25=5^{{{BLANK_0}}}\\).",
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
        "rawText": "Samakan pangkat: \\(x-2=______\\).",
        "template": "Samakan pangkat: \\(x-2={{BLANK_1}}\\).",
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
        "rawText": "Tambahkan 2 pada kedua ruas: \\(x=______+2=______\\).",
        "template": "Tambahkan 2 pada kedua ruas: \\(x={{BLANK_2}}+2={{BLANK_3}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "-2"
            ]
          },
          {
            "globalIndex": 3,
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Faktorkan 72 menjadi kuadrat sempurna dikali bilangan lain: \\(72=______\\times______\\).",
        "template": "Faktorkan 72 menjadi kuadrat sempurna dikali bilangan lain: \\(72={{BLANK_0}}\\times{{BLANK_1}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "36"
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
        "rawText": "Pisahkan akar: \\(\\sqrt{72}=\\sqrt{______}\\times\\sqrt{______}\\).",
        "template": "Pisahkan akar: \\(\\sqrt{72}=\\sqrt{{{BLANK_2}}}\\times\\sqrt{{{BLANK_3}}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "36"
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
        "rawText": "Hitung akar kuadrat sempurna dan tuliskan hasil akhirnya = ______.",
        "template": "Hitung akar kuadrat sempurna dan tuliskan hasil akhirnya = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "6√2",
              "6\\sqrt{2}",
              "6akar2",
              "6V2"
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
    "totalBlanks": 7,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Pilih faktor kuadrat sempurna dari 75: \\(75=______\\times______\\).",
        "template": "Pilih faktor kuadrat sempurna dari 75: \\(75={{BLANK_0}}\\times{{BLANK_1}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "25"
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
        "rawText": "Ubah menjadi \\(\\sqrt{______}\\times\\sqrt{______}\\).",
        "template": "Ubah menjadi \\(\\sqrt{{{BLANK_2}}}\\times\\sqrt{{{BLANK_3}}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "25"
            ]
          },
          {
            "globalIndex": 3,
            "expected": [
              "3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Sederhanakan faktor akarnya: ______ × \\(\\sqrt{______}\\) = ______.",
        "template": "Sederhanakan faktor akarnya: {{BLANK_4}} × \\(\\sqrt{{{BLANK_5}}}\\) = {{BLANK_6}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "5"
            ]
          },
          {
            "globalIndex": 5,
            "expected": [
              "3"
            ]
          },
          {
            "globalIndex": 6,
            "expected": [
              "5√3",
              "5\\sqrt{3}",
              "5akar3"
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Faktorkan 128 dengan faktor kubik sempurna: \\(128=______\\times______\\).",
        "template": "Faktorkan 128 dengan faktor kubik sempurna: \\(128={{BLANK_0}}\\times{{BLANK_1}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "64"
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
        "rawText": "Pisahkan akar pangkat tiga: \\(\\sqrt[3]{128}=\\sqrt[3]{______}\\times\\sqrt[3]{______}\\).",
        "template": "Pisahkan akar pangkat tiga: \\(\\sqrt[3]{128}=\\sqrt[3]{{{BLANK_2}}}\\times\\sqrt[3]{{{BLANK_3}}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "64"
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
        "rawText": "Hitung akar kubik sempurna, lalu tulis hasil = ______.",
        "template": "Hitung akar kubik sempurna, lalu tulis hasil = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "4∛2",
              "4\\sqrt[3]{2}",
              "4 akar 3 dari 2"
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gabungkan radikan: \\(\\sqrt8\\times\\sqrt2=\\sqrt{______\\times______}\\).",
        "template": "Gabungkan radikan: \\(\\sqrt8\\times\\sqrt2=\\sqrt{{{BLANK_0}}\\times{{BLANK_1}}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "8"
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
        "rawText": "Hitung hasil kali di dalam akar = ______.",
        "template": "Hitung hasil kali di dalam akar = {{BLANK_2}}.",
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
        "rawText": "Tentukan akar kuadrat utamanya = ______.",
        "template": "Tentukan akar kuadrat utamanya = {{BLANK_3}}.",
        "blanks": [
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Gunakan aturan pembagian akar: \\(\\frac{\\sqrt{45}}{\\sqrt5}=\\sqrt{______ / ______}\\).",
        "template": "Gunakan aturan pembagian akar: \\(\\frac{\\sqrt{45}}{\\sqrt5}=\\sqrt{{{BLANK_0}} / {{BLANK_1}}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "45"
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
        "rawText": "Hitung pembagian radikan = ______.",
        "template": "Hitung pembagian radikan = {{BLANK_2}}.",
        "blanks": [
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
        "rawText": "Tentukan akar kuadrat utama = ______.",
        "template": "Tentukan akar kuadrat utama = {{BLANK_3}}.",
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kuadratkan setiap faktor: \\((2\\sqrt3)^2=2^2\\times(\\sqrt3)^2\\).",
        "template": "Kuadratkan setiap faktor: \\((2\\sqrt3)^2=2^2\\times(\\sqrt3)^2\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Hitung \\(2^2=______\\).",
        "template": "Hitung \\(2^2={{BLANK_0}}\\).",
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
        "stepNumber": 3,
        "rawText": "Gunakan \\((\\sqrt3)^2=______\\).",
        "template": "Gunakan \\((\\sqrt3)^2={{BLANK_1}}\\).",
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
        "stepNumber": 4,
        "rawText": "Kalikan kedua hasil = ______.",
        "template": "Kalikan kedua hasil = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kedua bentuk akar merupakan akar ______ karena radikannya sama.",
        "template": "Kedua bentuk akar merupakan akar {{BLANK_0}} karena radikannya sama.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "sejenis",
              "sama"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Jumlahkan koefisien: ______ + ______ = ______.",
        "template": "Jumlahkan koefisien: {{BLANK_1}} + {{BLANK_2}} = {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "1"
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
        "rawText": "Pertahankan \\(\\sqrt7\\) sebagai faktor, sehingga bentuknya = ______.",
        "template": "Pertahankan \\(\\sqrt7\\) sebagai faktor, sehingga bentuknya = {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "2√7",
              "2\\sqrt{7}",
              "2akar7"
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
        "rawText": "Kalikan pembilang dan penyebut dengan \\(\\sqrt3\\): \\(\\frac3{\\sqrt3}\\times\\frac{\\sqrt3}{\\sqrt3}\\).",
        "template": "Kalikan pembilang dan penyebut dengan \\(\\sqrt3\\): \\(\\frac3{\\sqrt3}\\times\\frac{\\sqrt3}{\\sqrt3}\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Pembilang menjadi \\(3\\sqrt3\\); penyebut menjadi \\(\\sqrt3\\times\\sqrt3=______\\).",
        "template": "Pembilang menjadi \\(3\\sqrt3\\); penyebut menjadi \\(\\sqrt3\\times\\sqrt3={{BLANK_0}}\\).",
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
        "rawText": "Sederhanakan pecahan yang diperoleh = ______.",
        "template": "Sederhanakan pecahan yang diperoleh = {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "√3",
              "\\sqrt{3}",
              "akar3"
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Kalikan pembilang dan penyebut dengan pasangan sekawan \\(\\sqrt5+2\\).",
        "template": "Kalikan pembilang dan penyebut dengan pasangan sekawan \\(\\sqrt5+2\\).",
        "blanks": []
      },
      {
        "stepNumber": 2,
        "rawText": "Penyebut menggunakan \\((p-q)(p+q)=p^2-q^2\\): \\(5-______^2=______\\).",
        "template": "Penyebut menggunakan \\((p-q)(p+q)=p^2-q^2\\): \\(5-{{BLANK_0}}^2={{BLANK_1}}\\).",
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
        "stepNumber": 3,
        "rawText": "Pembilang menjadi \\(\\sqrt5+______\\).",
        "template": "Pembilang menjadi \\(\\sqrt5+{{BLANK_2}}\\).",
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
        "stepNumber": 4,
        "rawText": "Bentuk akhirnya = ______.",
        "template": "Bentuk akhirnya = {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "√5+2",
              "\\sqrt{5}+2",
              "akar5+2"
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
    "totalBlanks": 7,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah pangkat pecahan: \\(16^{3/4}=(\\sqrt[______]{16})^{______}\\).",
        "template": "Ubah pangkat pecahan: \\(16^{3/4}=(\\sqrt[{{BLANK_0}}]{16})^{{{BLANK_1}}}\\).",
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
        "rawText": "Tentukan akar yang sesuai = ______.",
        "template": "Tentukan akar yang sesuai = {{BLANK_2}}.",
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
        "rawText": "Pangkatkan hasil akar tersebut: ______ × ______ × ______ = ______.",
        "template": "Pangkatkan hasil akar tersebut: {{BLANK_3}} × {{BLANK_4}} × {{BLANK_5}} = {{BLANK_6}}.",
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
        "rawText": "Ganti \\(x\\) dengan 3: \\(f(3)=2^{______}\\).",
        "template": "Ganti \\(x\\) dengan 3: \\(f(3)=2^{{{BLANK_0}}}\\).",
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
        "rawText": "Uraikan sebagai perkalian: ______ × ______ × ______.",
        "template": "Uraikan sebagai perkalian: {{BLANK_1}} × {{BLANK_2}} × {{BLANK_3}}.",
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
        "rawText": "Hasilnya = ______.",
        "template": "Hasilnya = {{BLANK_4}}.",
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ganti \\(x\\) dengan 2: \\(f(2)=3^{2-______}\\).",
        "template": "Ganti \\(x\\) dengan 2: \\(f(2)=3^{2-{{BLANK_0}}}\\).",
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
        "rawText": "Hitung pangkat: 2 − ______ = ______.",
        "template": "Hitung pangkat: 2 − {{BLANK_1}} = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "1"
            ]
          },
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
        "rawText": "Maka \\(f(2)=3^{______}=______\\).",
        "template": "Maka \\(f(2)=3^{{{BLANK_3}}}={{BLANK_4}}\\).",
        "blanks": [
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Substitusi \\(x=-2\\): \\(f(-2)=\\left(\\frac12\\right)^{______}\\).",
        "template": "Substitusi \\(x=-2\\): \\(f(-2)=\\left(\\frac12\\right)^{{{BLANK_0}}}\\).",
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
        "rawText": "Ubah pangkat negatif dengan membalik pecahan: \\(\\left(\\frac{______}{______}\\right)^2\\).",
        "template": "Ubah pangkat negatif dengan membalik pecahan: \\(\\left(\\frac{{{BLANK_1}}}{{{BLANK_2}}}\\right)^2\\).",
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
              "1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Hasil akhirnya = ______.",
        "template": "Hasil akhirnya = {{BLANK_3}}.",
        "blanks": [
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
    "totalBlanks": 2,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Fungsi \\(a^x\\) naik jika basis memenuhi syarat ______.",
        "template": "Fungsi \\(a^x\\) naik jika basis memenuhi syarat {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "a > 1",
              "> 1",
              "lebih dari 1",
              ">1",
              "a>1"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Dari pilihan, periksa basis masing-masing fungsi.",
        "template": "Dari pilihan, periksa basis masing-masing fungsi.",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Basis yang sesuai pada opsi adalah ______.",
        "template": "Basis yang sesuai pada opsi adalah {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "3",
              "3^x",
              "3ˣ"
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
        "rawText": "Pada fungsi eksponen dasar \\(a^x\\) dengan \\(a>0\\), variabel \\(x\\) dapat berupa ______.",
        "template": "Pada fungsi eksponen dasar \\(a^x\\) dengan \\(a>0\\), variabel \\(x\\) dapat berupa {{BLANK_0}}.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "semua bilangan real",
              "bilangan real",
              "real"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Tidak ada pembatasan domain berdasarkan pangkat untuk fungsi ini.",
        "template": "Tidak ada pembatasan domain berdasarkan pangkat untuk fungsi ini.",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Jadi domainnya adalah ______.",
        "template": "Jadi domainnya adalah {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "semua bilangan real",
              "bilangan real",
              "real",
              "R",
              "x ∈ R"
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Untuk basis positif, nilai \\(2^x\\) selalu ______ dari nol.",
        "template": "Untuk basis positif, nilai \\(2^x\\) selalu {{BLANK_0}} dari nol.",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "lebih besar",
              "positif",
              ">"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Apakah hasil fungsi dapat sama dengan nol? ______.",
        "template": "Apakah hasil fungsi dapat sama dengan nol? {{BLANK_1}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "tidak",
              "tidak bisa",
              "no"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Tulis rentang nilai yang mungkin: ______.",
        "template": "Tulis rentang nilai yang mungkin: {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "(0, ∞)",
              "(0, inf)",
              "y > 0",
              "y>0",
              "(0, tak hingga)"
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ambil \\(x=0\\): \\(y=2^{______}\\).",
        "template": "Ambil \\(x=0\\): \\(y=2^{{{BLANK_0}}}\\).",
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
        "rawText": "Gunakan aturan pangkat nol: \\(2^0=______\\).",
        "template": "Gunakan aturan pangkat nol: \\(2^0={{BLANK_1}}\\).",
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
        "rawText": "Bentuk titik \\((x,y)\\) yang diperoleh adalah \\( (______, ______) \\).",
        "template": "Bentuk titik \\((x,y)\\) yang diperoleh adalah \\( ({{BLANK_2}}, {{BLANK_3}}) \\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "0"
            ]
          },
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah 10% menjadi desimal: 10/100 = ______.",
        "template": "Ubah 10% menjadi desimal: 10/100 = {{BLANK_0}}.",
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
        "rawText": "Faktor pertumbuhan = 1 + ______ = ______.",
        "template": "Faktor pertumbuhan = 1 + {{BLANK_1}} = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "0.1",
              "0,1"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "1.1",
              "1,1"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Substitusi dua tahun: \\(P_2=200\\times(______)^2\\).",
        "template": "Substitusi dua tahun: \\(P_2=200\\times({{BLANK_3}})^2\\).",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "1.1",
              "1,1"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Hitung pangkatnya, kemudian kalikan dengan 200: ______.",
        "template": "Hitung pangkatnya, kemudian kalikan dengan 200: {{BLANK_4}}.",
        "blanks": [
          {
            "globalIndex": 4,
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah 25% menjadi desimal: 25/100 = ______.",
        "template": "Ubah 25% menjadi desimal: 25/100 = {{BLANK_0}}.",
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
        "rawText": "Faktor yang tersisa = 1 − ______ = ______.",
        "template": "Faktor yang tersisa = 1 − {{BLANK_1}} = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "0.25",
              "0,25"
            ]
          },
          {
            "globalIndex": 2,
            "expected": [
              "0.75",
              "0,75"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Model setelah dua jam: \\(P_2=800\\times(______)^2\\).",
        "template": "Model setelah dua jam: \\(P_2=800\\times({{BLANK_3}})^2\\).",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "0.75",
              "0,75"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Hitung kuadrat faktor, lalu kalikan dengan 800: ______ gram.",
        "template": "Hitung kuadrat faktor, lalu kalikan dengan 800: {{BLANK_4}} gram.",
        "blanks": [
          {
            "globalIndex": 4,
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Asimtot horizontal fungsi dasar \\(y=2^x\\) adalah \\(y=______\\).",
        "template": "Asimtot horizontal fungsi dasar \\(y=2^x\\) adalah \\(y={{BLANK_0}}\\).",
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
        "rawText": "Penambahan konstanta 3 menggeser grafik ke ______ sebanyak ______ satuan.",
        "template": "Penambahan konstanta 3 menggeser grafik ke {{BLANK_1}} sebanyak {{BLANK_2}} satuan.",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "atas"
            ]
          },
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
        "rawText": "Persamaan asimtot baru adalah ______.",
        "template": "Persamaan asimtot baru adalah {{BLANK_3}}.",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "y = 3",
              "y=3",
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
        "rawText": "Misalkan \\(\\log_2 8=c\\), maka bentuk eksponennya \\(2^c=______\\).",
        "template": "Misalkan \\(\\log_2 8=c\\), maka bentuk eksponennya \\(2^c={{BLANK_0}}\\).",
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
        "rawText": "Cari pangkat \\(c\\) sehingga hasil perpangkatan basis 2 menjadi 8.",
        "template": "Cari pangkat \\(c\\) sehingga hasil perpangkatan basis 2 menjadi 8.",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Nilai \\(c=______\\).",
        "template": "Nilai \\(c={{BLANK_1}}\\).",
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Misalkan \\(\\log_3(1/27)=c\\), sehingga \\(3^c=______\\).",
        "template": "Misalkan \\(\\log_3(1/27)=c\\), sehingga \\(3^c={{BLANK_0}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "1/27"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Tulis \\(1/27\\) sebagai pangkat 3: \\(1/27=3^{______}\\).",
        "template": "Tulis \\(1/27\\) sebagai pangkat 3: \\(1/27=3^{{{BLANK_1}}}\\).",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Samakan pangkat: \\(c=______\\).",
        "template": "Samakan pangkat: \\(c={{BLANK_2}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Misalkan \\(\\log_5 25=c\\), sehingga \\(5^c=______\\).",
        "template": "Misalkan \\(\\log_5 25=c\\), sehingga \\(5^c={{BLANK_0}}\\).",
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
        "rawText": "Tulis 25 sebagai pangkat 5: \\(25=5^{______}\\).",
        "template": "Tulis 25 sebagai pangkat 5: \\(25=5^{{{BLANK_1}}}\\).",
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
        "rawText": "Nilai logaritma = ______.",
        "template": "Nilai logaritma = {{BLANK_2}}.",
        "blanks": [
          {
            "globalIndex": 2,
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
    "totalBlanks": 3,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Ubah desimal 0,001 menjadi pecahan: \\(0,001=1/______\\).",
        "template": "Ubah desimal 0,001 menjadi pecahan: \\(0,001=1/{{BLANK_0}}\\).",
        "blanks": [
          {
            "globalIndex": 0,
            "expected": [
              "1000"
            ]
          }
        ]
      },
      {
        "stepNumber": 2,
        "rawText": "Tulis sebagai pangkat 10: \\(0,001=10^{______}\\).",
        "template": "Tulis sebagai pangkat 10: \\(0,001=10^{{{BLANK_1}}}\\).",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "-3"
            ]
          }
        ]
      },
      {
        "stepNumber": 3,
        "rawText": "Berdasarkan definisi, \\(\\log_{10}0,001=______\\).",
        "template": "Berdasarkan definisi, \\(\\log_{10}0,001={{BLANK_2}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
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
    "totalBlanks": 4,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Misalkan \\(\\log_4 8=c\\), berarti \\(4^c=______\\).",
        "template": "Misalkan \\(\\log_4 8=c\\), berarti \\(4^c={{BLANK_0}}\\).",
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
        "rawText": "Ubah basis ke 2: \\(4^c=(2^2)^c=2^{______}\\) dan \\(8=2^{______}\\).",
        "template": "Ubah basis ke 2: \\(4^c=(2^2)^c=2^{{{BLANK_1}}}\\) dan \\(8=2^{{{BLANK_2}}}\\).",
        "blanks": [
          {
            "globalIndex": 1,
            "expected": [
              "2c",
              "2*c"
            ]
          },
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
        "rawText": "Samakan pangkat untuk memperoleh nilai \\(c=______\\).",
        "template": "Samakan pangkat untuk memperoleh nilai \\(c={{BLANK_3}}\\).",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "3/2",
              "1.5"
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
        "rawText": "Ubah logaritma pertama ke bentuk eksponen: \\(2^{c_1}=32\\), maka \\(c_1=______\\).",
        "template": "Ubah logaritma pertama ke bentuk eksponen: \\(2^{c_1}=32\\), maka \\(c_1={{BLANK_0}}\\).",
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
        "rawText": "Ubah logaritma kedua: \\(2^{c_2}=4\\), maka \\(c_2=______\\).",
        "template": "Ubah logaritma kedua: \\(2^{c_2}=4\\), maka \\(c_2={{BLANK_1}}\\).",
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
        "rawText": "Jumlahkan nilai keduanya: ______ + ______ = ______.",
        "template": "Jumlahkan nilai keduanya: {{BLANK_2}} + {{BLANK_3}} = {{BLANK_4}}.",
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
        "rawText": "Tentukan \\(\\log_3 81\\) dengan menulis \\(3^m=81\\): \\(m=______\\).",
        "template": "Tentukan \\(\\log_3 81\\) dengan menulis \\(3^m=81\\): \\(m={{BLANK_0}}\\).",
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
        "rawText": "Tentukan \\(\\log_3 3\\) dengan menulis \\(3^n=3\\): \\(n=______\\).",
        "template": "Tentukan \\(\\log_3 3\\) dengan menulis \\(3^n=3\\): \\(n={{BLANK_1}}\\).",
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
        "rawText": "Kurangkan: \\(m-n=______-______=______\\).",
        "template": "Kurangkan: \\(m-n={{BLANK_2}}-{{BLANK_3}}={{BLANK_4}}\\).",
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
    "totalBlanks": 6,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Faktorkan 15 menjadi hasil kali: \\(15=______\\times______\\).",
        "template": "Faktorkan 15 menjadi hasil kali: \\(15={{BLANK_0}}\\times{{BLANK_1}}\\).",
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
        "rawText": "Gunakan \\(\\log_a(MN)=\\log_a M+\\log_a N\\).",
        "template": "Gunakan \\(\\log_a(MN)=\\log_a M+\\log_a N\\).",
        "blanks": []
      },
      {
        "stepNumber": 3,
        "rawText": "Maka \\(\\log_2 15=\\log_2______+\\log_2______\\).",
        "template": "Maka \\(\\log_2 15=\\log_2{{BLANK_2}}+\\log_2{{BLANK_3}}\\).",
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
              "5"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Ganti dengan simbol yang diketahui: ______ + ______.",
        "template": "Ganti dengan simbol yang diketahui: {{BLANK_4}} + {{BLANK_5}}.",
        "blanks": [
          {
            "globalIndex": 4,
            "expected": [
              "m"
            ]
          },
          {
            "globalIndex": 5,
            "expected": [
              "n"
            ]
          }
        ]
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Periksa syarat numerus: \\(x-1>______\\).",
        "template": "Periksa syarat numerus: \\(x-1>{{BLANK_0}}\\).",
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
        "rawText": "Ubah ke bentuk eksponen: \\(x-1=5^{______}\\).",
        "template": "Ubah ke bentuk eksponen: \\(x-1=5^{{{BLANK_1}}}\\).",
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
        "rawText": "Hitung perpangkatan: \\(5^2=______\\).",
        "template": "Hitung perpangkatan: \\(5^2={{BLANK_2}}\\).",
        "blanks": [
          {
            "globalIndex": 2,
            "expected": [
              "25"
            ]
          }
        ]
      },
      {
        "stepNumber": 4,
        "rawText": "Tambahkan 1 pada kedua ruas: \\(x=______+1=______\\).",
        "template": "Tambahkan 1 pada kedua ruas: \\(x={{BLANK_3}}+1={{BLANK_4}}\\).",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "25"
            ]
          },
          {
            "globalIndex": 4,
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
    "totalBlanks": 5,
    "steps": [
      {
        "stepNumber": 1,
        "rawText": "Syarat numerus: \\(x+1>______\\).",
        "template": "Syarat numerus: \\(x+1>{{BLANK_0}}\\).",
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
        "rawText": "Ubah ke bentuk eksponen: \\(x+1=2^{______}\\).",
        "template": "Ubah ke bentuk eksponen: \\(x+1=2^{{{BLANK_1}}}\\).",
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
        "rawText": "Hitung \\(2^4=______\\).",
        "template": "Hitung \\(2^4={{BLANK_2}}\\).",
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
        "stepNumber": 4,
        "rawText": "Kurangi kedua ruas dengan 1: \\(x=______-1=______\\).",
        "template": "Kurangi kedua ruas dengan 1: \\(x={{BLANK_3}}-1={{BLANK_4}}\\).",
        "blanks": [
          {
            "globalIndex": 3,
            "expected": [
              "16"
            ]
          },
          {
            "globalIndex": 4,
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
