/**
 * 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

2를 곱한다.
1을 수의 가장 오른쪽에 추가한다. 
A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.
 */
const fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let count = 1;

while (a <= b) {
  if (a === b) {
    console.log(count);
    break;
  }

  if (b % 2 === 0) {
    b /= 2;
  } else if (b % 10 === 1) {
    b = parseInt(b / 10);
  } else {
    break;
  }
  count++;
}

if (a !== b) {
  console.log(-1);
}
