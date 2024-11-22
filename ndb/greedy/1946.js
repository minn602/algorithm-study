//먼저 첫번째 시험점수 기준으로 정렬을 한뒤
//첫번째 시험점수가 앞선 지원자보단, 낮지만 두번째 시험 점수가 앞 지원자보다 앞선다면 선발가능하다
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let testCase = 1;
let answer = "";

while (n > 0) {
  const testN = Number(input[testCase]);
  const testArr = input
    .slice(testCase + 1, testCase + testN + 1)
    .map((t) => t.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]); //첫번째 인터뷰 점수를 기준으로 정렬

  let minInterviewRank = testArr[0][1]; //첫번째 뽑힌사람의 두번째 인터뷰 점수가 기준이 되어 다른사람과 비교된다
  let count = 1; //첫번째 인터뷰 점수가 가장 높은 사람은 당연 뽑히므로 count의 기본값은 1

  for (let i = 1; i < testN; i++) {
    const currentRank = testArr[i][1]; //현재 지원자의 두번째 인터뷰 점수

    if (currentRank < minInterviewRank) {
      //현재 지원자의 두번째 인터뷰 점수가 기준보다 낮은 경우 봅힌다
      count++;
      minInterviewRank = currentRank;
    }
  }

  answer += count + "\n";
  testCase += testN + 1; //다음 테스트 케이스로 이동
  n--;

  if (n <= 0) break;
}

console.log(answer);
