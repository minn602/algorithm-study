/**
 * 알고리즘 분류: 해시를 사용한 집합과 맵
 * 문제번호 : 14425
 * 
 * 문자열 집합
 * 총 N개의 문자열로 이루어진 집합 S가 주어진다.

입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const str = {}
let count = 0

for(let i = 1; i <= n; i++) {
 str[input[i]] = 1
}

for(let i = n+1; i <= n+m; i++) {
  if(str.hasOwnProperty(input[i])) {
    count++    
  }
}

console.log(count)