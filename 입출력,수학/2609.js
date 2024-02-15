/**
 * 알고리즘 분류: 수학
 * 문제번호 : 2609
 * 
 * 최대공약수와 최소공배수
 * 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
 */

// 첫번째 풀이 -> 무한루프 : isDivided가 참인 조건에서 while문이 실행이되면 whild문 안에서 조건에 따라 변수값이 바뀌더라도 break부분이 없기 때문에 while문 멈추기 않고 계속 돌게 된다. 
//Math.min은 배열로 넘기지 않는다.
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

// let [num1, num2] = input.map(i => Number(i))

// let isDivided = true
// let divided = 1

// while(isDivided) {
//   const minSqrt = Math.min([Math.sqrt(num1), Math.sqrt(num2)])

//   for(let i = 2; i <= minSqrt; i++) {
//     if(num1 % i == 0 && num2 % i == 0) {
//       divided *= Math.floor(num1 / i)
//       num1 = Math.floor(num1 / i)
//       num2 = Math.floor(num2 / i)
//       isDivided = true
//       break;
//     } else if(num1 % i == 0 || num2 % i == 0) {
//       isDivided = true
//     } else {
//       isDivided = false
//     }
//   }
// }

// if(!isDivided) {
//   console.log(divided)
//   console.log(divided * num1 * num2)
// }

//두번째 풀이 -> 위의 피드백 반영 -> 시간초과
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

let [num1, num2] = input.map(i => Number(i))

let divided = 1

while(true) {
  const minSqrt = Math.min(Math.sqrt(num1), Math.sqrt(num2))

  let isDivided = false

  for(let i = 2; i <= minSqrt; i++) {
    if(num1 % i == 0 && num2 % i == 0) {
      divided *= i
      num1 = Math.floor(num1 / i)
      num2 = Math.floor(num2 / i)
      isDivided = true
      break;
    } else if(num1 % i == 0 || num2 % i == 0) {
      isDivided = true
    } else {
      isDivided = false
    }
  }

  if(!isDivided) break;
}

  console.log(divided)
  console.log(divided * num1 * num2)

//유클리드 호제법 적용
// 1. 먼저 두개의 수를 서로 나눈 나머지를 구한다. ex) 1071 % 1029 = 42
// 2. 두 수중 작은 수를 다시 나머지로 나눈다. ex) 1029 % 42 = 21
// 3. 나누어 떨어질때까지 반복한다.
// 4. 나누어떨어지면 나눈 수가 최대공약수가 된다. ex) 42 % 21 = 0 최대공약수는 21
  const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(i=>parseInt(i));
let i = a;
let j = b;

while (i % j !== 0) {
       //두수를 나눠서 나머지를 구한다
    let n = i % j;
       //나눈값이 나누어 떨어지지 않으면 작은 값을 나머지로 나눠주는 반복을 한다.
    if (n !== 0) {
        i = j;
        j = n;
    }
}
//나누어 떨어질때의 마지막 값이 -> 최대공약수가 된다.
console.log(j)
//기존의 두값을 곱한 값 / 최대공약수 = 최소공배수가 된다. 
console.log(a*b/j)