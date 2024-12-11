const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, target] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);

let height = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);

  let total = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) {
      total += arr[i] - mid;
    }
  }

  if (total < target) {
    //잘린 나무의 합이 target보다 작은 경우 더 잘라야 되기 때문에 높이의 범위 줄이기
    end = mid - 1;
  } else {
    // 잘린 나무의 합이 target보다 크거나 같은 경우 덜 잘라야 되기 때문의 높이의 범위를 키운다
    height = mid;
    start = mid + 1;
  }
}

console.log(height);
