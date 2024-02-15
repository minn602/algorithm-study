/**
 * 알고리즘 분류: 문자열, 스택
 * 문제번호 : 17413
 * 
 * 단어 뒤집기
 * 문자열 S가 주어졌을 때, 이 문자열에서 단어만 뒤집으려고 한다.
 * 태그는 '<'로 시작해서 '>'로 끝나는 길이가 3 이상인 부분 문자열이고, '<'와 '>' 사이에는 알파벳 소문자와 공백만 있다. 
 * 단어는 알파벳 소문자와 숫자로 이루어진 부분 문자열이고, 연속하는 두 단어는 공백 하나로 구분한다. 
 * 태그는 단어가 아니며, 태그와 단어 사이에는 공백이 없다.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('')

let temp = []
let flag = false
let answer = []

for(let i = 0; i < input.length; i++) {
  if(input[i] == '<') {
    //태그 시작 -> 이전 누적된 게 있는 경우
    if(temp.length > 0) {
      answer = answer.concat(temp)
      temp = []
    }
    answer.push('<')
    flag = true
  } else if(input[i] == '>') {
    answer.push('>')
    flag = false
  } else {
    //태그인 경우 그대로 누적
    if(flag) {
      answer.push(input[i])
    } else {
      if(input[i] == ' ') {
        temp.push(' ')
        answer = answer.concat(temp)
        temp = []
      } else {
        temp.unshift(input[i])
      }
    }
  }
}

if(!flag) {
  answer = answer.concat(temp)
}

console.log(answer.join(''))