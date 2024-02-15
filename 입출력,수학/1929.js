/**
 * 알고리즘 분류: 수학
 * 문제번호 : 1929
 * 
 * 소수 구하기
 * M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
 */

//첫번쩨 풀이 -> 시간 초과
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

// let min = Number(input[0])
// const max = Number(input[1])

// let answer = ''

// while(min <= max) {
//   let isPrime = true
//   for(let i = 2; i < min; i++) {
//     if(min % i === 0) {
//       isPrime = false
//       break;
//     }
//   }
//   if(isPrime) answer += min + '\n'
//   min++;
// }

// console.log(answer)

//두번째 풀이 -> 제곱근 메서드 사용한 방식
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const [num1, num2] = input.map(i => Number(i))

//제곱근을 활용하는 방식
const isPrime = (num) => {
  //1은 소수가 아니다
  if(num == 1) return false;
  
  //제곱근을 구하는 메서드 Math.sqrt를 사용해서 전체 범위를 나눠보는게 아니라 제곱근까지만 나눠본다. 
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i == 0) return false
  }
  return true
}

for(let i = num1; i <= num2; i++) {
  if(isPrime(i)) console.log(i)
}

