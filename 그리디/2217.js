/**
 * 알고리즘 분류: 그리디    
 * 문제번호 : 2217
 * 
 * 로프
 */


const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, ...ropes] = input
ropes = ropes.map(Number)
ropes = ropes.sort((a, b) => a-b)

let min = ropes[0] * n

for(let i = 1; i < n; i++) {
  //최대 중량이 가장 낮은 로프 * 로프의 갯수 = 들어올릴 수 있는 최대 중량
  const weight = ropes[i]*(n-i)
  if(min < weight) min = weight
}

console.log(min)