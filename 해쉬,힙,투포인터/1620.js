/**
 * 알고리즘 분류: 해시
 * 문제번호 : 1620
 * 
 * 나는야 포켓몬 마스터 이다솜
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)

//처음엔 pocketmon 객체만 가지고 있었지만 value를 기준으로 조회할때
//메모리 초과 문제로 반대의 경우(이름이 key인 경우)도 추가
const pocketmon = {}
const reversePocketmon = {}

const answer = []

for(let i = 1; i <= n; i++) {
  pocketmon[i] = input[i]
  reversePocketmon[input[i]] = i
}

for(let i = n+1; i < n+m+1; i++) {
  if(pocketmon.hasOwnProperty(input[i])) {
    answer.push(pocketmon[input[i]])
  } else {
    answer.push(reversePocketmon[input[i]])
  }
}

console.log(answer.join('\n').trim())
