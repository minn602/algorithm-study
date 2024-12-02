/**
 * ATM 순서
 * -> 가장시간이 적게 소요되는 사람부터 줄을스는게 총 소요시간이 최소값이 된다.
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
//가장 적은 것부터 처리하기 위해 오름차순으로 정렬
const times = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let total = 0; // 총 대기시간
let sum = 0; // 앞의 대기시간을 모두 누적
for (let i = 0; i < n; i++) {
  sum += times[i]; // 현재 사람까지의 대기 시간 계산
  total += sum; // 총 대기 시간에 반영
}

console.log(total);
