const fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let count = 1;

while (a <= b) {
  if (a === b) {
    console.log(count);
    break;
  }

  if (b % 2 === 0) {
    b /= 2;
  } else if (b % 10 === 1) {
    b = parseInt(b / 10);
  } else {
    break;
  }
  count++;
}

if (a !== b) {
  console.log(-1);
}
