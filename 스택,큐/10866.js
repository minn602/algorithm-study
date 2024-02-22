/**
 * 알고리즘 분류: 스택, 큐
 * 문제번호 : 10866
 *
 * 덱
정수를 저장하는 덱(Deque)를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여덟 가지이다.

push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const deque = []
const answer = []

const commands = {
  push: (way, num) => {
    if(way == "front") deque.unshift(num)
    else deque.push(num)
  },
  pop: (way) => {
    if(deque.length == 0) {
      answer.push(-1)
    } else {
      let poped;
      if(way == "front") poped = deque.shift()
      else poped = deque.pop()
      answer.push(poped)
    }
  },
  size: () => {
    answer.push(deque.length)
  },
  empty: () => {
    if(deque.length == 0) answer.push(1)
    else answer.push(0)
  },
  front: () => {
    if(deque.length == 0) {
      answer.push(-1)
    } else {
      answer.push(deque[0])
    }
  },
  back: () => {
    if(deque.length == 0) {
      answer.push(-1)
    } else {
      answer.push(deque[deque.length-1])
    }
  }
}

for(let i = 1; i < input.length; i++) {
  const command = input[i]
  const splitedCmd = command.split('_')
  
  if(splitedCmd[0] == "push") {
    const [way, num] = splitedCmd[1].split(' ')
    
    commands.push(way, Number(num))
  } else if (splitedCmd[0] == "pop") {
    commands.pop(splitedCmd[1])
  } else {
    commands[command]()
  }
}

console.log(answer.join('\n'))