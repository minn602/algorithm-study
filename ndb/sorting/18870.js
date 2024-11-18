const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const sorted = [...new Set(nums)].sort((a, b) => a - b);
let obj = {}; //new Map()으로도 대체가능

for (let i = 0; i < sorted.length; i++) {
  obj[sorted[i]] = i;
}

const answer = [];
for (let i = 0; i < n; i++) {
  const count = obj[nums[i]];
  answer.push(count);
}
console.log(answer.join(" "));
