/**
 * 알고리즘 분류: 스택
 * 문제번호 : 10828
 *
 * 스택
 * 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 다섯 가지이다.

push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다. 
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const stack = []
const answer = []
for(let i = 1; i < input.length; i++) {
  const command = input[i]
  if(command == "top") {
    if(stack.length > 0) {
      answer.push(stack[stack.length-1])
    } else {
      answer.push(-1)
    }
  }
  if(command == "empty") {
    if(stack.length > 0) {
      answer.push(0)
    } else {
      answer.push(1)
    }
  }
  if(command == "size") {
    answer.push(stack.length)
  }
  if(command == "pop") {
    if(stack.length > 0) {
      answer.push(stack.pop())
    } else {
      answer.push(-1)
    }
  }
  if(command.length > 5 && command.slice(0, 4) == "push") {
    const num = Number(command.split(' ')[1])
    stack.push(num)
  }
}

console.log(answer.join('\n'))