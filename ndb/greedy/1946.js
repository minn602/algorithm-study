/**
 * 언제나 최고만을 지향하는 굴지의 대기업 진영 주식회사가 신규 사원 채용을 실시한다. 인재 선발 시험은 1차 서류심사와 2차 면접시험으로 이루어진다. 최고만을 지향한다는 기업의 이념에 따라 그들은 최고의 인재들만을 사원으로 선발하고 싶어 한다.

그래서 진영 주식회사는, 다른 모든 지원자와 비교했을 때 서류심사 성적과 면접시험 성적 중 적어도 하나가 다른 지원자보다 떨어지지 않는 자만 선발한다는 원칙을 세웠다. 즉, 어떤 지원자 A의 성적이 다른 어떤 지원자 B의 성적에 비해 서류 심사 결과와 면접 성적이 모두 떨어진다면 A는 결코 선발되지 않는다.

이러한 조건을 만족시키면서, 진영 주식회사가 이번 신규 사원 채용에서 선발할 수 있는 신입사원의 최대 인원수를 구하는 프로그램을 작성하시오.
 * 
 */

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
