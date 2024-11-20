//뺄셈을 기준으로 최대한 많은 수를 묶어주는 것이 더 작은 수를 만든다.

const input = require("fs").readFileSync("/dev/stdin").toString();

const groups = input.split("-");

let answer = 0;
for (let i = 0; i < groups.length; i++) {
  //덧셈을 기준으로 묶인 수들은 모두 더해준다
  const acc = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  //첫번째 시작은 더하기
  if (i === 0) {
    answer += acc;
  } else {
    answer -= acc;
  }
}

console.log(answer);
