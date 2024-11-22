const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

let sum = 0;
let current = 0;

//최대한 많은 수의 합으로 input이 이루어져야하므로 1부터 더해하면서 누적합을 구해준다
while (sum <= input) {
  current += 1;
  sum += current;
}

console.log(current - 1);
