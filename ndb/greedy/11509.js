const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const balloons = input[1].split(" ").map(Number);

// 화살 개수를 관리하는 객체
let arrows = {};
let count = 0;

for (let i = 0; i < n; i++) {
  const height = balloons[i];

  if (arrows[height] > 0) {
    // 현재 높이에 화살이 있다면 사용
    arrows[height]--;
  } else {
    // 새로운 화살이 필요
    count++;
  }

  // 화살이 한 칸 낮은 높이로 이동
  //arrows[height - 1] 값이 없다면 0으로 세팅하고 arrows[height - 1] 값에(또는 0으로 세팅된 값에) 1 추가
  arrows[height - 1] = (arrows[height - 1] || 0) + 1;
}

console.log(count);
