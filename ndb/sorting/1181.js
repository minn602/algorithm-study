const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let arr = input.slice(1, n + 1);
//중복 제거를 위해 Set 사용
arr = [...new Set(arr)];
arr = arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
  return a.length - b.length;
});

console.log(arr.join("\n"));
