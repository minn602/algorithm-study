/**
 * 알고리즘 분류: 그리디    
 * 문제번호 : 20115
 * 
 * 에너지 드링크
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let drinks = input[1].split(' ').map(Number)
drinks.sort((a, b) => b-a)
let amount = drinks[0]
let i = 1

//큰 두 음료중 작은 것을 반으로 나눠 큰 것에 합친다.
while(i < drinks.length) {
  if(amount > drinks[i]) {
    amount += drinks[i] / 2
  } else {
    amount = drinks[i] + amount / 2
  }
  i++
}

console.log(amount)