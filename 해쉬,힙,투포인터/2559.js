/**
 * 알고리즘 분류: 투포인터, 슬라이딩 윈도우
 * 문제번호 : 2559
 * 
 *
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const nums = input[1].split(' ').map(Number)

let i = 0
let j = i+k-1
const temps = []

while(j < nums.length) {
  let sum = 0
  for(let k = i; k <= j; k++) {
    sum += nums[k]
  }
  temps.push(sum)
  i++
  j = i+k-1
  if(j >= nums.length) break
}

console.log(Math.max(...temps))