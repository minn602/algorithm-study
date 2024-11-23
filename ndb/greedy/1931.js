const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const meetings = input.slice(1, n + 1).map((m) => m.split(" ").map(Number));

// 종료 시간을 기준으로 오름차순 정렬 (종료 시간이 같다면 시작 시간을 기준으로 오름차순)
//종료시간 이후 새로운 회의를 배정할 수 있기때문에 종료시간이 빠른회의를 우선적으로 선택하기 위해 종료시간 기준으로 정렬
meetings.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let currentTime = 0;
let answer = 0;

// 각 회의를 순회하며 선택
for (let i = 0; i < n; i++) {
  const [start, end] = meetings[i];
  if (start >= currentTime) {
    currentTime = end;
    answer++;
  }
}

console.log(answer);
