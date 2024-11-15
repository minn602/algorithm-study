const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const nums = input.slice(1, n + 1).sort((a, b) => {
  const [ax, ay] = a.split(" ").map(Number);
  const [bx, by] = b.split(" ").map(Number);

  if (ax === bx) {
    return ay - by;
  }
  return ax - bx;
});

console.log(nums.join("\n"));
