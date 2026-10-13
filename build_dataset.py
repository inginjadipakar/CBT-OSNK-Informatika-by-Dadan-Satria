# -*- coding: utf-8 -*-
"""
Generator untuk questions_les.js
Memetakan 60 soal Bab 1: Eksponen & Logaritma Fase E beserta langkah pengerjaan, blank expected answers, dan kunci jawaban pilihan ganda.
"""
import json, re, sys

sys.stdout.reconfigure(encoding='utf-8')

with open('parsed_soal_temp.json', 'r', encoding='utf-8') as f:
    raw_data = json.load(f)

# Categories
CATEGORIES = [
    (1, 10, "Eksponen Dasar"),
    (11, 20, "Sifat-Sifat Eksponen"),
    (21, 30, "Persamaan Eksponen"),
    (31, 40, "Bentuk Akar & Pangkat Pecahan"),
    (41, 50, "Fungsi Eksponen & Pemodelan"),
    (51, 60, "Logaritma sebagai Invers Eksponen")
]

def get_category(q_num):
    for start, end, name in CATEGORIES:
        if start <= q_num <= end:
            return name
    return "Matematika Fase E"

# Definisi kunci jawaban pilihan ganda (0=A, 1=B, 2=C, 3=D, 4=E)
# Dan expected answers per blank untuk setiap step
KEYS_AND_BLANKS = {
    1: {
        "correct": 2, # C: 32
        # S1: Basis = ______ dan pangkat = ______. -> [2, 5]
        # S2: Uraikan sebagai perkalian berulang: ______ × ______ × ______ × ______ × ______. -> [2, 2, 2, 2, 2]
        # S3: Hasil perkalian tersebut = ______. -> [32]
        "blanks": [["2"], ["5"], ["2"], ["2"], ["2"], ["2"], ["2"], ["32"]]
    },
    2: {
        "correct": 1, # B: 81
        # S1: Karena tanda negatif berada di dalam kurung, basis = ______. -> [-3]
        # S2: Uraikan... (no blank)
        # S3: Pasangkan: (-3)*(-3) = ______; pasangan berikutnya = ______. -> [9, 9]
        # S4: Kalikan hasil pasangan: ______ * ______ = ______. -> [9, 9, 81]
        "blanks": [["-3"], ["9"], ["9"], ["9"], ["9"], ["81"]]
    },
    3: {
        "correct": 1, # B: -9
        # S1: Pangkat dikerjakan pada bilangan ______ terlebih dahulu. -> [3]
        # S2: Hitung 3^2: ______ * ______ = ______. -> [3, 3, 9]
        # S3: Terapkan tanda negatif: -(______) = ______. -> [9, -9]
        "blanks": [["3"], ["3"], ["3"], ["9"], ["9"], ["-9"]]
    },
    4: {
        "correct": 1, # B: 1
        # S1: Basis = ______; pangkat = ______. -> [7, 0]
        # S2: a^0 = ______. -> [1]
        # S3: Maka nilai yang diminta = ______. -> [1]
        "blanks": [["7"], ["0"], ["1"], ["1"]]
    },
    5: {
        "correct": 2, # C: 1/8
        # S1: 2^-3 = 1/______. -> [2^3, 8]
        # S2: Hitung 2^3: ______ * ______ * ______ = ______. -> [2, 2, 2, 8]
        # S3: Bentuk pecahan akhirnya = 1/______. -> [8]
        "blanks": [["8", "2^3"], ["2"], ["2"], ["2"], ["8"], ["8"]]
    },
    6: {
        "correct": 3, # D: 4
        # S1: (1/2)^-2 = (______ / ______)^2. -> [2, 1]
        # S2: Kuadratkan: ______^2 / ______^2. -> [2, 1]
        # S3: Nilai akhirnya = ______. -> [4]
        "blanks": [["2"], ["1"], ["2"], ["1"], ["4"]]
    },
    7: {
        "correct": 3, # D: 8
        # S1: 16^(3/4) = (\sqrt[______]{16})^{______}. -> [4, 3]
        # S2: Nilai akar = ______. -> [2]
        # S3: Pangkatkan dengan pangkat = ______, diperoleh ______. -> [3, 8]
        "blanks": [["4"], ["3"], ["2"], ["3"], ["8"]]
    },
    8: {
        "correct": 2, # C: 9
        # S1: 27^(2/3) = (\sqrt[______]{27})^{______}. -> [3, 2]
        # S2: Akar yang diperlukan = ______. -> [3]
        # S3: Kuadratkan: ______ * ______ = ______. -> [3, 3, 9]
        "blanks": [["3"], ["2"], ["3"], ["3"], ["3"], ["9"]]
    },
    9: {
        "correct": 1, # B: 9
        # S1: x^2 = ______. -> [81]
        # S2: ______ * ______ = 81. -> [9, 9]
        # S3: Maka nilai akar utama = ______. -> [9]
        "blanks": [["81"], ["9"], ["9"], ["9"]]
    },
    10: {
        "correct": 1, # B: -32
        # S1: Basis = ______; pangkat = ______. -> [-2, 5]
        # S2: (no blank)
        # S3: (______) * (______) = ______. -> [4, 4, 16]
        # S4: ______ * (-2) = ______. -> [16, -32]
        "blanks": [["-2"], ["5"], ["4"], ["4"], ["16"], ["16"], ["-32"]]
    },
    11: {
        "correct": 1, # B: 128
        # S1: Basis kedua faktor sama, yaitu ______. -> [2]
        # S2: pangkat baru = ______ + ______ = ______. -> [3, 4, 7]
        # S3: Bentuk menjadi 2^{______}, hitung = ______. -> [7, 128]
        "blanks": [["2"], ["3"], ["4"], ["7"], ["7"], ["128"]]
    },
    12: {
        "correct": 2, # C: 625
        # S1: Basis = ______. -> [5]
        # S2: pangkat baru = ______ - ______ = ______. -> [7, 3, 4]
        # S3: 5^{______}, hitung = ______. -> [4, 625]
        "blanks": [["5"], ["7"], ["3"], ["4"], ["4"], ["625"]]
    },
    13: {
        "correct": 2, # C: 729
        # S1: (no blank)
        # S2: Pangkat baru = ______ * ______ = ______. -> [2, 3, 6]
        # S3: 3^{______}, hasilnya = ______. -> [6, 729]
        "blanks": [["2"], ["3"], ["6"], ["6"], ["729"]]
    },
    14: {
        "correct": 2, # C: 4x^6
        # S1: (no blank)
        # S2: Koefisien: 2^2 = ______. -> [4]
        # S3: Pangkat variabel: x^{3*2} = x^{______}. -> [6]
        # S4: Gabungkan: ______. -> [4x^6, 4x⁶]
        "blanks": [["4"], ["6"], ["4x^6", "4x⁶"]]
    },
    15: {
        "correct": 1, # B: a³b⁶
        # S1: a^{______} b^{2*______}. -> [3, 3]
        # S2: Pangkat faktor a = ______. -> [3]
        # S3: Pangkat faktor b = ______. -> [6]
        # S4: Bentuk gabungan = ______. -> [a^3b^6, a³b⁶]
        "blanks": [["3"], ["3"], ["3"], ["6"], ["a^3b^6", "a³b⁶", "a3b6"]]
    },
    16: {
        "correct": 1, # B: x⁵
        # S1: (no blank)
        # S2: Pangkat baru = ______ + (-______) = ______. -> [7, 2, 5]
        # S3: Bentuk sederhana = x^{______}. -> [5]
        "blanks": [["7"], ["2"], ["5"], ["5"]]
    },
    17: {
        "correct": 1, # B: a⁴/b⁶
        # S1: basis a: pangkat baru = ______ - (-______) = ______. -> [3, 1, 4]
        # S2: basis b: pangkat baru = ______ - ______ = ______. -> [-2, 4, -6]
        # S3: (no blank)
        # S4: Bentuk akhir = ______. -> [a^4/b^6, a⁴/b⁶]
        "blanks": [["3"], ["1"], ["4"], ["-2"], ["4"], ["-6"], ["a^4/b^6", "a⁴/b⁶", "a4/b6"]]
    },
    18: {
        "correct": 2, # C: 16
        # S1: 2^{______ + (-______)} = 2^{______}. -> [3, 1, 2]
        # S2: (no blank)
        # S3: Pangkat akhir = ______ * ______ = ______. -> [2, 2, 4]
        # S4: Nilai numeriknya = ______. -> [16]
        "blanks": [["3"], ["1"], ["2"], ["2"], ["2"], ["4"], ["16"]]
    },
    19: {
        "correct": 0, # A: x³y⁴
        # S1: x^{2*______} y^{3*______}. -> [2, 2]
        # S2: pangkat x: ______ - ______ = ______. -> [4, 1, 3]
        # S3: pangkat y: ______ - ______ = ______. -> [6, 2, 4]
        # S4: Gabungkan hasil = ______. -> [x^3y^4, x³y⁴]
        "blanks": [["2"], ["2"], ["4"], ["1"], ["3"], ["6"], ["2"], ["4"], ["x^3y^4", "x³y⁴", "x3y4"]]
    },
    20: {
        "correct": 2, # C: b²/a²
        # S1: (no blank)
        # S2: (______ / ______)^2. -> [b, a]
        # S3: ______^2 / ______^2. -> [b, a]
        # S4: Bentuk akhir = ______. -> [b^2/a^2, b²/a²]
        "blanks": [["b"], ["a"], ["b"], ["a"], ["b^2/a^2", "b²/a²", "b2/a2"]]
    },
    21: {
        "correct": 1, # B: 5
        # S1: 32 = 2^{______}. -> [5]
        # S2: 2^x = 2^{______}. -> [5]
        # S3: x = ______. -> [5]
        "blanks": [["5"], ["5"], ["5"]]
    },
    22: {
        "correct": 1, # B: 3
        # S1: 81 = 3^{______}. -> [4]
        # S2: x + 1 = ______. -> [4]
        # S3: x = ______ - 1 = ______. -> [4, 3]
        "blanks": [["4"], ["4"], ["4"], ["3"]]
    },
    23: {
        "correct": 1, # B: 3/2
        # S1: 125 = 5^{______}. -> [3]
        # S2: 2x = ______. -> [3]
        # S3: x = ______ / 2 = ______. -> [3, 3/2]
        "blanks": [["3"], ["3"], ["3"], ["3/2", "1.5"]]
    },
    24: {
        "correct": 2, # C: -1
        # S1: 1/16 = 4^{______}. -> [-2]
        # S2: x - 1 = ______. -> [-2]
        # S3: x = ______ + 1 = ______. -> [-2, -1]
        "blanks": [["-2"], ["-2"], ["-2"], ["-1"]]
    },
    25: {
        "correct": 2, # C: 3/2
        # S1: 27 = 3^{______}. -> [3]
        # S2: 3^{2x} = 3^{______}. -> [3]
        # S3: 2x = ______. -> [3]
        # S4: x = ______. -> [3/2, 1.5]
        "blanks": [["3"], ["3"], ["3"], ["3/2", "1.5"]]
    },
    26: {
        "correct": 3, # D: 3
        # S1: 8 = 2^{______} dan 4 = 2^{______}. -> [3, 2]
        # S2: (no blank)
        # S3: 3x + ______ = ______x. -> [3, 4]
        # S4: x = ______. -> [3]
        "blanks": [["3"], ["2"], ["3"], ["4"], ["3"]]
    },
    27: {
        "correct": 3, # D: 3
        # S1: 4 = 2^{______}, 8 = 2^{______}. -> [2, 3]
        # S2: (no blank)
        # S3: 2x = 3x - ______. -> [3]
        # S4: x = ______. -> [3]
        "blanks": [["2"], ["3"], ["3"], ["3"]]
    },
    28: {
        "correct": 2, # C: {-1, 1}
        # S1: pangkat harus = ______. -> [0]
        # S2: x^2 - 1 = ______. -> [0]
        # S3: x^2 = ______. -> [1]
        # S4: x = ______ atau x = ______. -> [1, -1]
        "blanks": [["0"], ["0"], ["1"], ["1", "-1"], ["-1", "1"]]
    },
    29: {
        "correct": 1, # B: -3
        # S1: 1/8 = 2^{______}. -> [-3]
        # S2: 2^x = 2^{______}. -> [-3]
        # S3: x = ______. -> [-3]
        "blanks": [["-3"], ["-3"], ["-3"]]
    },
    30: {
        "correct": 2, # C: 0
        # S1: 1/25 = 5^{______}. -> [-2]
        # S2: x - 2 = ______. -> [-2]
        # S3: x = ______ + 2 = ______. -> [-2, 0]
        "blanks": [["-2"], ["-2"], ["-2"], ["0"]]
    },
    31: {
        "correct": 0, # A: 6√2
        # S1: 72 = ______ * ______. -> [36, 2]
        # S2: \sqrt{______} * \sqrt{______}. -> [36, 2]
        # S3: hasil akhirnya = ______. -> [6√2, 6\sqrt{2}, 6 akar 2]
        "blanks": [["36"], ["2"], ["36"], ["2"], ["6√2", "6\sqrt{2}", "6akar2", "6V2"]]
    },
    32: {
        "correct": 1, # B: 5√3
        # S1: 75 = ______ * ______. -> [25, 3]
        # S2: \sqrt{______} * \sqrt{______}. -> [25, 3]
        # S3: ______ * \sqrt{______} = ______. -> [5, 3, 5√3]
        "blanks": [["25"], ["3"], ["25"], ["3"], ["5"], ["3"], ["5√3", "5\sqrt{3}", "5akar3"]]
    },
    33: {
        "correct": 1, # B: 4∛2
        # S1: 128 = ______ * ______. -> [64, 2]
        # S2: \sqrt[3]{______} * \sqrt[3]{______}. -> [64, 2]
        # S3: hasil = ______. -> [4∛2, 4\sqrt[3]{2}]
        "blanks": [["64"], ["2"], ["64"], ["2"], ["4∛2", "4\sqrt[3]{2}", "4 akar 3 dari 2"]]
    },
    34: {
        "correct": 1, # B: 4
        # S1: \sqrt{______ * ______}. -> [8, 2]
        # S2: hasil kali = ______. -> [16]
        # S3: akar utama = ______. -> [4]
        "blanks": [["8"], ["2"], ["16"], ["4"]]
    },
    35: {
        "correct": 0, # A: 3
        # S1: \sqrt{______ / ______}. -> [45, 5]
        # S2: pembagian radikan = ______. -> [9]
        # S3: akar utama = ______. -> [3]
        "blanks": [["45"], ["5"], ["9"], ["3"]]
    },
    36: {
        "correct": 2, # C: 12
        # S1: (no blank)
        # S2: 2^2 = ______. -> [4]
        # S3: (\sqrt{3})^2 = ______. -> [3]
        # S4: kalikan = ______. -> [12]
        "blanks": [["4"], ["3"], ["12"]]
    },
    37: {
        "correct": 1, # B: 2√7
        # S1: akar ______ (sejenis). -> [sejenis, sama]
        # S2: ______ + ______ = ______. -> [1, 1, 2]
        # S3: bentuknya = ______. -> [2√7, 2\sqrt{7}]
        "blanks": [["sejenis", "sama"], ["1"], ["1"], ["2"], ["2√7", "2\sqrt{7}", "2akar7"]]
    },
    38: {
        "correct": 0, # A: √3
        # S1: (no blank)
        # S2: penyebut = ______. -> [3]
        # S3: pecahan = ______. -> [√3, \sqrt{3}, 1√3]
        "blanks": [["3"], ["√3", "\sqrt{3}", "akar3"]]
    },
    39: {
        "correct": 1, # B: √5+2
        # S1: (no blank)
        # S2: 5 - ______^2 = ______. -> [2, 1]
        # S3: \sqrt{5} + ______. -> [2]
        # S4: bentuk akhirnya = ______. -> [√5+2, \sqrt{5}+2]
        "blanks": [["2"], ["1"], ["2"], ["√5+2", "\sqrt{5}+2", "akar5+2"]]
    },
    40: {
        "correct": 3, # D: 8
        # S1: (\sqrt[______]{16})^{______}. -> [4, 3]
        # S2: akar = ______. -> [2]
        # S3: ______ * ______ * ______ = ______. -> [2, 2, 2, 8]
        "blanks": [["4"], ["3"], ["2"], ["2"], ["2"], ["2"], ["8"]]
    },
    41: {
        "correct": 1, # B: 8
        # S1: f(3) = 2^{______}. -> [3]
        # S2: ______ * ______ * ______. -> [2, 2, 2]
        # S3: hasilnya = ______. -> [8]
        "blanks": [["3"], ["2"], ["2"], ["2"], ["8"]]
    },
    42: {
        "correct": 1, # B: 3
        # S1: f(2) = 3^{2-______}. -> [1]
        # S2: 2 - ______ = ______. -> [1, 1]
        # S3: f(2) = 3^{______} = ______. -> [1, 3]
        "blanks": [["1"], ["1"], ["1"], ["1"], ["3"]]
    },
    43: {
        "correct": 3, # D: 4
        # S1: f(-2) = (1/2)^{______}. -> [-2]
        # S2: (______ / ______)^2. -> [2, 1]
        # S3: hasil akhirnya = ______. -> [4]
        "blanks": [["-2"], ["2"], ["1"], ["4"]]
    },
    44: {
        "correct": 2, # C: 3ˣ
        # S1: basis memenuhi syarat ______ (a > 1). -> [a > 1, > 1, lebih dari 1]
        # S2: (no blank)
        # S3: basis yang sesuai = ______. -> [3, 3^x]
        "blanks": [["a > 1", "> 1", "lebih dari 1", ">1", "a>1"], ["3", "3^x", "3ˣ"]]
    },
    45: {
        "correct": 2, # C: semua bilangan real
        # S1: x dapat berupa ______. -> [semua bilangan real, bilangan real, real]
        # S2: (no blank)
        # S3: domainnya = ______. -> [semua bilangan real, real, R]
        "blanks": [["semua bilangan real", "bilangan real", "real"], ["semua bilangan real", "bilangan real", "real", "R", "x ∈ R"]]
    },
    46: {
        "correct": 2, # C: (0, ∞)
        # S1: selalu ______ dari nol. -> [lebih besar, positif, >]
        # S2: Apakah dapat sama dengan nol? ______. -> [tidak, tidak bisa, bukan]
        # S3: rentang = ______. -> [(0, ∞), (0, inf), y > 0, (0, tak hingga)]
        "blanks": [["lebih besar", "positif", ">"], ["tidak", "tidak bisa", "no"], ["(0, ∞)", "(0, inf)", "y > 0", "y>0", "(0, tak hingga)"]]
    },
    47: {
        "correct": 1, # B: (0, 1)
        # S1: y = 2^{______}. -> [0]
        # S2: 2^0 = ______. -> [1]
        # S3: (______, ______). -> [0, 1]
        "blanks": [["0"], ["1"], ["0"], ["1"]]
    },
    48: {
        "correct": 2, # C: 242
        # S1: 10/100 = ______. -> [0.1, 0,1]
        # S2: 1 + ______ = ______. -> [0.1, 1.1]
        # S3: P_2 = 200 * (______)^2. -> [1.1, 1,1]
        # S4: kalikan dengan 200: ______. -> [242]
        "blanks": [["0.1", "0,1"], ["0.1", "0,1"], ["1.1", "1,1"], ["1.1", "1,1"], ["242"]]
    },
    49: {
        "correct": 1, # B: 450 gram
        # S1: 25/100 = ______. -> [0.25, 0,25]
        # S2: 1 - ______ = ______. -> [0.25, 0.75]
        # S3: P_2 = 800 * (______)^2. -> [0.75, 0,75]
        # S4: kalikan: ______ gram. -> [450]
        "blanks": [["0.25", "0,25"], ["0.25", "0,25"], ["0.75", "0,75"], ["0.75", "0,75"], ["450"]]
    },
    50: {
        "correct": 3, # D: y = 3
        # S1: y = ______. -> [0]
        # S2: menggeser ke ______ sebanyak ______ satuan. -> [atas, 3]
        # S3: persamaan asimtot baru = ______. -> [y = 3, y=3]
        "blanks": [["0"], ["atas"], ["3"], ["y = 3", "y=3", "3"]]
    },
    51: {
        "correct": 1, # B: 3
        # S1: 2^c = ______. -> [8]
        # S2: (no blank)
        # S3: c = ______. -> [3]
        "blanks": [["8"], ["3"]]
    },
    52: {
        "correct": 1, # B: -3
        # S1: 3^c = ______. -> [1/27]
        # S2: 1/27 = 3^{______}. -> [-3]
        # S3: c = ______. -> [-3]
        "blanks": [["1/27"], ["-3"], ["-3"]]
    },
    53: {
        "correct": 1, # B: 2
        # S1: 5^c = ______. -> [25]
        # S2: 25 = 5^{______}. -> [2]
        # S3: nilai logaritma = ______. -> [2]
        "blanks": [["25"], ["2"], ["2"]]
    },
    54: {
        "correct": 2, # C: -3
        # S1: 0,001 = 1/______. -> [1000]
        # S2: 0,001 = 10^{______}. -> [-3]
        # S3: \log_10 0,001 = ______. -> [-3]
        "blanks": [["1000"], ["-3"], ["-3"]]
    },
    55: {
        "correct": 2, # C: 3/2
        # S1: 4^c = ______. -> [8]
        # S2: 2^{______} dan 8 = 2^{______}. -> [2c, 3]
        # S3: c = ______. -> [3/2, 1.5]
        "blanks": [["8"], ["2c", "2*c"], ["3"], ["3/2", "1.5"]]
    },
    56: {
        "correct": 2, # C: 7
        # S1: c_1 = ______. -> [5]
        # S2: c_2 = ______. -> [2]
        # S3: ______ + ______ = ______. -> [5, 2, 7]
        "blanks": [["5"], ["2"], ["5"], ["2"], ["7"]]
    },
    57: {
        "correct": 2, # C: 3
        # S1: m = ______. -> [4]
        # S2: n = ______. -> [1]
        # S3: ______ - ______ = ______. -> [4, 1, 3]
        "blanks": [["4"], ["1"], ["4"], ["1"], ["3"]]
    },
    58: {
        "correct": 0, # A: m + n
        # S1: 15 = ______ * ______. -> [3, 5]
        # S2: (no blank)
        # S3: \log_2 ______ + \log_2 ______. -> [3, 5]
        # S4: ______ + ______. -> [m, n]
        "blanks": [["3"], ["5"], ["3"], ["5"], ["m"], ["n"]]
    },
    59: {
        "correct": 2, # C: 26
        # S1: x - 1 > ______. -> [0]
        # S2: x - 1 = 5^{______}. -> [2]
        # S3: 5^2 = ______. -> [25]
        # S4: x = ______ + 1 = ______. -> [25, 26]
        "blanks": [["0"], ["2"], ["25"], ["25"], ["26"]]
    },
    60: {
        "correct": 2, # C: 15
        # S1: x + 1 > ______. -> [0]
        # S2: x + 1 = 2^{______}. -> [4]
        # S3: 2^4 = ______. -> [16]
        # S4: x = ______ - 1 = ______. -> [16, 15]
        "blanks": [["0"], ["4"], ["16"], ["16"], ["15"]]
    }
}

# Verifikasi kesesuaian jumlah blanks di raw_data dengan KEYS_AND_BLANKS
errors = []
questions_list = []

for q_num in range(1, 61):
    raw = raw_data[str(q_num)]
    kb = KEYS_AND_BLANKS[q_num]
    
    # Hitung total '______' di steps
    total_blanks_in_text = 0
    formatted_steps = []
    blank_idx_counter = 0
    
    for s_idx, step_line in enumerate(raw["steps"]):
        # Cari semua '______'
        parts = re.split(r'_{2,}', step_line)
        num_blanks_in_step = len(parts) - 1
        total_blanks_in_text += num_blanks_in_step
        
        step_blanks_meta = []
        step_template = parts[0]
        for p_idx in range(1, len(parts)):
            step_blanks_meta.append({
                "globalIndex": blank_idx_counter,
                "expected": kb["blanks"][blank_idx_counter] if blank_idx_counter < len(kb["blanks"]) else [""]
            })
            step_template += f"{{{{BLANK_{blank_idx_counter}}}}}" + parts[p_idx]
            blank_idx_counter += 1
            
        formatted_steps.append({
            "stepNumber": s_idx + 1,
            "rawText": step_line,
            "template": step_template,
            "blanks": step_blanks_meta
        })
        
    if total_blanks_in_text != len(kb["blanks"]):
        errors.append(f"Q{q_num}: Blanks count mismatch: text has {total_blanks_in_text}, definitions has {len(kb['blanks'])}")
        
    questions_list.append({
        "id": f"les_q{q_num:02d}",
        "number": q_num,
        "category": get_category(q_num),
        "question": raw["text"],
        "options": raw["options"],
        "correct": kb["correct"],
        "totalBlanks": total_blanks_in_text,
        "steps": formatted_steps
    })

if errors:
    print("ERRORS FOUND:")
    for e in errors:
        print(" ", e)
    sys.exit(1)

print(f"All 60 questions validated successfully! Total blank counts match perfectly.")

# Tulis ke file js/questions_les.js
js_content = f"""// Bank Soal CBT Peserta Les — Bab 1: Eksponen & Logaritma Fase E
// Total: 60 Soal Berurutan dengan Guided Steps & Blanks Validation
// Sesi Berkelanjutan (Remedial Iteratif sampai tuntas 60/60)

const LES_QUESTIONS = {json.dumps(questions_list, ensure_ascii=False, indent=2)};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ LES_QUESTIONS }};
}}
"""

with open('js/questions_les.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Written {len(questions_list)} questions to js/questions_les.js ({len(js_content)} bytes)")
