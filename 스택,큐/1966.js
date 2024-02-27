const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, ...arr] = input
arr = arr.map(i => i.split(' ').map(Number))
let answer = ''

//각 테스트 케이스마다 순회
for(let i = 0; i < arr.length; i+= 2) {
  let count = 0;
  //우선순위 배열
  const priorities = arr[i+1]
  //큐에서의 해당 문서의 위치
  let location = arr[i][1]
  
  while(true) {
    const max = Math.max(...priorities)
    const num = priorities.shift()
    if(num == max) {
      count++;
      //찾고자하는 대상이 큐의 맨앞에 있는 경우 답에 추가하고 while문 종료
      if(location == 0) {
        answer += count + '\n'
        break;
      }
    } else {
      //찾고자하는 대상이 아닌 경우 큐의 제일 맨 뒤로 넣는다.
      priorities.push(num)
    }
  
    //먼저들어 온 것부터 처리하며 location 위치를 변경
    if(location == 0) {
      location = priorities.length -1
    } else {
      location--;
    }
  }
}

console.log(answer.trim())