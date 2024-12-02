//뺄셈을 기준으로 최대한 많은 수를 묶어주는 것이 더 작은 수를 만든다.
/**
 * 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.
 * -> 최대한 뺄셈의 값을 크게하는게 결과값을 최소로 만들수 있다
 *
 *
 */
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
