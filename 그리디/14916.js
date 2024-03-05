/**
 * 알고리즘 분류: 그리디    
 * 문제번호 : 14916
 * 
 * 거스름돈
 */

let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

//큰수로 주는 것이 최적이므로 n-2가 5의 배수가 될 때를 먼저 구한다.
let count = 0

while(true) {
  if(n % 5 == 0) {
    count += n / 5
    break;
  }
  
  n -=2
  count++
  
  if(n < 0) {
    count = -1
    break;
  }
}

console.log(count)

