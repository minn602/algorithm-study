/**
 * 알고리즘 분류: 문자열
 * 문제번호 : 1316
 * 
 * 그룹 단어 체커
 * 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 
 * 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, 
 * aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
 * 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let cnt = Number(input[0])

for(let i = 1; i < input.length; i++) {
  const str = input[i]
  let letter = []
  
  for(let j = 0; j < str.length; j++) {
    if(!letter.includes(str[j])) {
      letter.push(str[j])
    }else {
      if(letter[letter.length-1] == str[j]) {
        continue
      } else {
        cnt -= 1
        break
      }
    }
  }
}

console.log(cnt)