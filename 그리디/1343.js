/**
 * 알고리즘 분류: 그리디    
 * 문제번호 : 1343
 * 
 * 폴리오미노
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let answer = '';
//많은 것부터 먼저 바꿔준 후 작은 것을 바꿔준다.
answer = input.replace(/XXXX/g, 'AAAA').replace(/XX/g, 'BB');
answer.includes('X') ? answer = -1 : answer;
console.log(answer);