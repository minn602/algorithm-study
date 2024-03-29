/**
 * 알고리즘 분류: 문자열
 * 문제번호 : 2870
 *
 * 수학문제
상근이는 수학시간에 딴 짓을 하다가 선생님께 걸렸다. 선생님은 상근이에게 이번 주말동안 반성하라며 엄청난 숙제를 내주었다.

선생님이 상근이에게 준 종이에는 숫자와 알파벳 소문자로 되어있는 글자가 N줄있다. 상근이는 여기서 숫자를 모두 찾은 뒤, 이 숫자를 비내림차순으로 정리해야한다. 숫자의 앞에 0이 있는 경우에는 정리하면서 생략할 수 있다.

글자를 살펴보다가 숫자가 나오는 경우에는, 가능한 가장 큰 숫자를 찾아야 한다. 즉, 모든 숫자의 앞과 뒤에 문자가 있거나, 줄의 시작 또는 끝이어야 한다.

예를 들어, 01a2b3456cde478에서 숫자를 찾으면 1, 2, 3456, 478이다.

선생님이 준 종이의 내용이 주어졌을 때, 상근이의 숙제를 대신하는 프로그램을 작성하시오.
 */

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

// const nums = []

// function isAlphabet(s) {
//   const ascii = s.charCodeAt(0)
//   return ascii >= 97 && ascii <= 122
// }

// for(let i = 1; i < input.length; i++) {
//   const str = input[i]
//   let j = 0
//   let temp = []
  
//   while(j < str.length) {
//     if(isAlphabet(str[j]) && temp.length > 0) {
//       nums.push(parseInt(temp.join().replaceAll(',', '')))
//       temp = []
//     }
//     if(!isAlphabet(str[j])) {
//       temp.push(str[j])
//     }
//     j++
//   }
  
//   if(temp.length > 0) {
//     nums.push(parseInt(temp.join().replaceAll(',', '')))
//   }
// }

// console.log(nums.sort((a, b) => a-b).join('\n'))

//두번째 방법
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(input) {
  const regExp = /\d+/g;
  const answer = [];

  for (let i = 1; i < input.length; i++) {
    if (input[i].match(regExp)) {
      answer.push(...input[i].match(regExp));
    }
  }

  answer.sort((a, b) => a - b);
  console.log(answer.map(BigInt).join('\n'));
}

solution(input)