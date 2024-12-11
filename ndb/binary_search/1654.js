const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input.slice(1, n + 1);

let start = 1;
let end = Math.max(...arr); // 주어진 랜선중 최대길이가 자를 수 있는 길이의 최대값이 될 수 있기때문에 arr 중 최대값을 초기에 설정

let length = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);

  let count = 0;
  for (let i = 0; i < n; i++) {
    count += parseInt(arr[i] / mid);
  }

  if (k <= count) {
    //덜 잘라야됨.
    length = mid;
    start = mid + 1;
  } else {
    //더 잘라야됨.
    end = mid - 1;
  }
}

console.log(length);
