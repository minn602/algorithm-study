/**
 * 알고리즘 분류: 스택
 * 문제번호 : 16165
 * 
걸그룹 마스터 준석이
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)

let i = 1;
const group = {}
const members = {}
let answer = []

while(i < input.length - m*2) {
  const groupName = input[i]
  const num = Number(input[i+1])
  
  group[groupName] = input.slice(i+2, i+num+2)
  
  for(let m = i+2; m < i+num+2; m++) {
    members[input[m]] = groupName
  }
  i = i+num+2
  
  if(i == input.length - m*2) break;
}

for(let j = input.length -m*2; j < input.length; j+=2) {
  const name = input[j]
  const type = Number(input[j+1])
  
  if(type == 0) {
    const names = group[name]
    names.sort((a, b) => a.localeCompare(b))
    answer.push(...names)
  } else {
    answer.push(members[name])
  }
}

console.log(answer.join('\n'))