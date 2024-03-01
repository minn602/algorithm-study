/**
 * 알고리즘 분류: 투포인터, 브루트포싱
 * 문제번호 : 2003
 * 
 * 수들의 합
 * N개의 수로 된 수열 A[1], A[2], …, A[N] 이 있다. 이 수열의 i번째 수부터 j번째 수까지의 합 A[i] + A[i+1] + … + A[j-1] + A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.
 */


const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
let nums = input[1].split(' ').map(Number)

let answer = 0;
let i = 0
let j = i
let temp = 0

while(i < nums.length) {
  if(i == j) {
    const num = nums[i]
    temp = num
  }
  
  if(temp == m) {
    temp = 0
    answer++
    i++
    j = i
  } else if(temp < m) {
    j++;
    temp += nums[j]
  } else {
    i++
    j = i
    temp = 0
  }
  
  if(i == nums.length) break;
}

console.log(answer)
