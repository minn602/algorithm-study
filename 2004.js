/**
 * 알고리즘 분류: 수학
 * 문제번호 : 2004
 * 
 * 조합 0의 개수

nCm 의 끝자리 0의 개수를 출력하는 프로그램을 작성하시오.
 */

const [n,m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

//nCm = n! / m!(n-m)!
//끝가지 0의 갯수를 구하기 위해 2의 배수 갯수, 5의 배수의 갯수를 활용한다.
//n!의 2와5 배수 갯수를 구하고 m!의 2와 5의 배수의 갯수를 빼고 (n-m)!의 2와 5의 갯수를 뺀다.
//그 중 작은수의 조합을 출력한다.

function getTwoFive(num) {
  let five = 0;
  let two = 0;
    
  for(let i = 5; i <= num; i*=5) {
    five += parseInt(num / i)
  }
  for(let i = 2; i <= num; i*=2) {
    two += parseInt(num / i)
  }
  return [two, five]
}

const [nt, nf] = getTwoFive(n)
const [mt, mf] = getTwoFive(m)
const [nmt, nmf] = getTwoFive(n-m)
const two = nt - mt - nmt
const five = nf - mf - nmf
console.log(Math.min(two, five))