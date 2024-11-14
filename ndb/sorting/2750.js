const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const nums = input
  .slice(1, n + 1)
  .map(Number)
  .sort((a, b) => a - b);

let answer = "";
for (let i = 0; i < n; i++) {
  answer += nums[i] + "\n";
}

console.log(answer);
