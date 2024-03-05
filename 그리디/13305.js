/**
 * 알고리즘 분류: 그리디    
 * 문제번호 : 13305
 * 
 * 주유소
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const distances = input[1].split(' ').map(BigInt)
const prices = input[2].split(' ').map(BigInt)

let answer = 0n;
let currentPrice = prices[0]

for(let i = 0; i < distances.length; i++) {
  answer += currentPrice * distances[i]
  
  if(currentPrice > prices[i+1]) currentPrice = prices[i+1]
}

console.log(String(answer))