const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let [n, k] = input;

//1부터 k까지의 합 구하기
let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

if (sum > n) {
  console.log(-1); //n의 값이 k보다 작은경우
} else {
  n -= sum;
  if (n % k == 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
