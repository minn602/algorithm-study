/**
 * 알고리즘 분류: 스택
 * 문제번호 : 10799
 *
 * 쇠막대기
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim()

let count = 0
const stickStack = []

let i = 0;
while(i < input.length) {
  if(input[i] == "(") {
    stickStack.push('(')
  } else {
      stickStack.pop()
    if(input[i-1] == "(") {
      count += stickStack.length
    } else {
      count += 1
      
      if(stickStack.length == 0) {
        raserCount = 0
      }
    }
  }
  
  i++
}

console.log(count)

