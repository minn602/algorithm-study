const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const times = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let total = 0;
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += times[i]; // 현재 사람까지의 대기 시간 계산
  total += sum; // 총 대기 시간에 반영
}

console.log(total);
