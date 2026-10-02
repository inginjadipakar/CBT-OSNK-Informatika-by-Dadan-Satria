const fs = require('fs');
let code = fs.readFileSync('js/questions.js', 'utf8');
code = code.replace('const OSNK_QUESTIONS', 'global.OSNK_QUESTIONS');
eval(code);

console.log('Total questions:', global.OSNK_QUESTIONS.length);
let issues = [];

global.OSNK_QUESTIONS.forEach((q, idx) => {
  const num = idx + 1;
  if (!q.id || q.id !== num) issues.push('Q' + num + ': ID mismatch');
  if (!q.options || q.options.length !== 5) issues.push('Q' + num + ': options count != 5');
  if (q.correct === undefined || q.correct < 0 || q.correct > 4) issues.push('Q' + num + ': invalid correct index');
  if (!q.question) issues.push('Q' + num + ': missing question');
  if (!q.explanation) issues.push('Q' + num + ': missing explanation');
  
  console.log('[' + num + '] (' + q.category + ') Ans: ' + ['A','B','C','D','E'][q.correct] + ' -> ' + q.options[q.correct]);
});

if (issues.length > 0) {
  console.error('ISSUES FOUND:', issues);
  process.exit(1);
} else {
  console.log('SUCCESS: All 50 questions have 5 options and correct answer mapping.');
}
