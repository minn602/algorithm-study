const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let answer = "";

for (let i = 1; i <= n; i++) {
  let target = Number(input[i]);

  //현재 숫자보다 작거나 같은 피보나치 수열 생성
  //일반적 피보나치 수열은 0, 1, 1, 2 ... 이렇게 시작하지만 문제 요구사항에 따라 1, 2로 시작되게 세팅되었다
  const piboArr = [1, 2];
  while (piboArr[piboArr.length - 1] <= target) {
    piboArr.push(piboArr[piboArr.length - 1] + piboArr[piboArr.length - 2]);
  }

  let temp = [];
  //이미 피보나치 수열은 정렬이 되어 있기 때문에 맨 뒤부터 큰수부터 빼준다
  for (let j = piboArr.length - 1; j >= 0; j--) {
    if (piboArr[j] <= target) {
      target -= piboArr[j];
      temp.push(piboArr[j]);
    }
  }

  answer += temp.sort((a, b) => a - b).join(" ") + "\n";
}

console.log(answer);
