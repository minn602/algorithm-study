/**
 * 알고리즘 분류: 수학
 * 문제번호 : 1676
 * 
 * 팩토리얼 0의 갯수
 * N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.
 */

//첫번째 풀이방법 -> 직접 팩토리얼을 연산한 결과를 가지고 구하게 되면 숫자가 매우 커져서 for문으로 돌면서 확인할 수 없게 된다.
// const input = require('fs').readFileSync('/dev/stdin').toString().trim()
// const num = Number(input)

// function factorial(num) {
//     //0! = 1 인 점을 유의하여 num이 1 또는 0인 경우는 1을 리턴해줘야한다.
//   if(num === 1 || num == 0) return 1;
//   return num * factorial(num-1)
// }

// const fatorialResult = factorial(num)

// let cnt = 0
// for(let i = fatorialResult.toString().length-1; i >= 0; i--) {
//   if(fatorialResult[i] == '0') {
//     cnt++
//   } else {
//     break
//   }
// }

// console.log(cnt)

//두번째 풀이
//문제에서 원하는 뒷자리가 0의 갯수를 구하기 위해서는 2의 배수와 5의 배수를 확인 해주면 된다.
//2의 배수는 많으므로 적은 5의 갯수만 세주면 된다.
//조건에서 입력값은 500이하이므로 5, 25, 125의 배수를 확인해준다.
const input = 10

let cnt = 0
for(let i = 1; i <= input; i++) {
    if(i % 5 == 0) cnt++
    if(i % 25 == 0) cnt++
    if(i % 125 == 0) cnt++
}

console.log(cnt)