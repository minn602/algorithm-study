/**
 * 병사 배치하기
 * 최소한의 병사를 열외하여 전투력이 내림차순이 되도록 배치한다.
 *
 * 기존 생각한 방식 -> 순환하면서 앞뒤 요소를 비교하여 배치
 * -> 해당 방식은 앞뒤만 비교하므로 전체 배열이 내림차순되도록 유지할 수 없다.
 *
 * 풀이 아이디어
 * -> 모든 병사를 확인하면서, 이 병사를 포함했을때의 최장길이의 내림차순 배열을 계산한다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// lowerBound 함수를 사용하기 위해 -> 내림차순으로 처리하기 위해 배열을 뒤집음
const reversedArr = arr.reverse(); //[15, 11, 4, 8, 5, 2, 4] → [4, 2, 5, 8, 4, 11, 15]

//LIS (Longest increasing subsquence) 알고리즘 -> 특정 수열에서 가장 긴 증가하는 부분 수열을 찾는 방법
const lis = [];

for (const num of reversedArr) {
  const idx = lowerBound(lis, num);
  if (idx === lis.length) {
    lis.push(num);
  } else {
    lis[idx] = num;
  }
}

//lowerBound 함수는 오름차순으로 정렬된 배열에서 주어진 값이 들어갈 수 있는 가장 왼쪽의 위치를 반환하게 된다.
function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

// LIS의 길이를 계산했으니, 제거해야 할 병사 수를 계산
console.log(n - lis.length);
