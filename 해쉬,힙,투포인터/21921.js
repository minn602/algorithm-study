/**
 * 알고리즘 분류: 슬라이딩 윈도우
 * 문제번호 : 21921
 * 
 * 블로그
 */

//슬라이딩 윈도우는 연속된 부분 배열을 구성할 때 현재 윈도우의 왼쪽 끝과 오른쪽 끝을 조절하여 구간을 이동시키는 방식입니다.

//첫 번째 방식 -> 시간초과
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

// const [n, x] = input[0].split(' ').map(Number)
// const nums = input[1].split(' ').map(Number)

// let i = 0
// let j = i+x-1
// const total = []

// while(j < nums.length) {
//   let sum = 0
//   for(let m = i; m <= j; m++) {
//     sum += nums[m]
//   }
//   total.push(sum)
//   i++
//   j = i+x-1
  
//   if(j >= nums.length) break;
// }

// const max = Math.max(...total)

// if(max == 0) {
//   console.log("SAD")
// } else {
//   console.log(max)
//   console.log(total.filter(n => n == max).length)
// }

//두번째 방식 -> 슬라이딩 윈도우 기법
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, x] = input[0].split(' ').map(Number)
const nums = input[1].split(' ').map(Number)

let l = 0
let r = 0
let sum = 0
let max = 0
let maxCount = 0

while(r < nums.length) {
  //윈도우에 새 원소 추가
  sum += nums[r]
  
  //윈도우 크기가 x보다 크면 왼쪽부터 원소 제거
  while(r-l+1 > x) {
    sum -= nums[l]
    l++
  }
  
  if(sum > max) {
    max = sum
    maxCount = 1
  } else if(sum == max) {
    maxCount++
  }
  
  r++
}

if (max === 0) {
    console.log("SAD");
} else {
    console.log(max);
    console.log(maxCount);
}



