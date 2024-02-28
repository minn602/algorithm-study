/**
 * 알고리즘 분류: 투포인터
 * 문제번호 : 1940
 * 
 * 주몽
 */

//투포인터를 활용한 문제로 오름차순 또는 내림차순으로 정렬 한 후, 양 끝값을 더하면서 m보다 작으면 작은쪽 인덱스를 변화하고 크면 큰쪽인덱스를 변화한다.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const m = Number(input[1])
const nums = input[2].split(' ').map(Number)

let left = 0
let right = n-1
let count = 0

nums.sort((a, b) => a - b)

while(left < right) {
  const sum = nums[left] + nums[right]
  
  if(sum === m) {
    count++
    left++
    right--
  } else if(sum < m) {
    left++
  } else {
    right--
  }
}

console.log(count)