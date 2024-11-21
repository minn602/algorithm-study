const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let n = Number(input);
let answer = 0;

while (n > 0) {
  //반복적으로 3을 빼면서 5로 나누어 지는 떨어지는 것을 확인한다
  if (n % 5 === 0) {
    answer += parseInt(n / 5);
    n = 0;
    break;
  } else {
    n -= 3;
    answer += 1;
  }
}

if (n === 0) {
  console.log(answer);
} else {
  console.log(-1);
}
