/**
 * 알고리즘 분류: 해시
 * 문제번호 : 10816
 * 
 * 숫자 카드 2
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const cards = input[1].split(' ').map(Number)
const targets = input[3].split(' ').map(Number)

let cardsCount = {}
for(let i = 0; i < cards.length; i++) {
  const card = cards[i]
  
  if(cardsCount.hasOwnProperty(card)) {
    cardsCount[card] += 1
  } else {
    cardsCount[card] = 1
  }
}

const answer = []
for(let i = 0; i < targets.length; i++) {
  const target = targets[i]
  
  if(cardsCount.hasOwnProperty(target)) {
    answer.push(cardsCount[target])
  } else {
    answer.push(0)
  }
}

console.log(answer.join(' '))