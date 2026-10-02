import json
import re
import subprocess
import os

with open('js/questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract JSON array
match = re.search(r'const OSNK_QUESTIONS\s*=\s*(\[[\s\S]*?\]);\s*$', text)
if not match:
    # Try finding [ ... ]
    start = text.find('[')
    end = text.rfind(']')
    raw_json = text[start:end+1]
else:
    raw_json = match.group(1)

questions = json.loads(raw_json)
print(f"Loaded {len(questions)} questions.")

os.makedirs("test_build", exist_ok=True)

report = []

for q in questions:
    qid = q['id']
    cat = q['category']
    correct_idx = q['correct']
    correct_opt = q['options'][correct_idx]
    code = q.get('code', '')
    
    status = "THEORY_CHECK"
    compiled_output = None
    note = ""

    # Check if code is runnable C++ program (has main)
    if "int main()" in code:
        cpp_file = f"test_build/q_{qid}.cpp"
        exe_file = f"test_build/q_{qid}.exe"
        
        with open(cpp_file, "w", encoding="utf-8") as fcpp:
            fcpp.write(code)
            
        compile_res = subprocess.run(
            ["g++", "-std=c++17", cpp_file, "-o", exe_file],
            capture_output=True,
            text=True
        )
        
        if compile_res.returncode != 0:
            status = "COMPILE_ERROR"
            note = compile_res.stderr.strip().split("\n")[0]
        else:
            run_res = subprocess.run(
                [exe_file],
                capture_output=True,
                text=True,
                timeout=3
            )
            compiled_output = run_res.stdout.strip()
            status = "EXEC_SUCCESS"
            
    report.append({
        "id": qid,
        "category": cat,
        "correct_letter": ["A", "B", "C", "D", "E"][correct_idx],
        "correct_text": correct_opt,
        "status": status,
        "compiled_output": compiled_output,
        "note": note
    })

for r in report:
    comp = f" | Output: '{r['compiled_output']}'" if r['compiled_output'] is not None else ""
    nt = f" | Note: {r['note'][:60]}" if r['note'] else ""
    print(f"[{r['id']:02d}] ({r['category']}) [{r['correct_letter']}] '{r['correct_text'][:35]}' -> {r['status']}{comp}{nt}")

