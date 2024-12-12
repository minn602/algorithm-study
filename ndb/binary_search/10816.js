/**
 * 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.
 *
 * O(NlogN)+O(MlogN)
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const m = Number(input[2]);
const arr = input[3].split(" ").map(Number);

//주어진 카드 리스트 오름차순 정렬 -> O(NlogN)
cards.sort((a, b) => a - b);

//가장 왼쪽의 인덱스 반환 -> O(logN)
function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

//가장 오른쪽의 인덱스 반환 -> O(logN)
function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

//찾는 값의 범위 내 갯수
function numberByRange(arr, target) {
  const rightIndex = upperBound(arr, target, 0, arr.length);
  const leftIndex = lowerBound(arr, target, 0, arr.length);
  return rightIndex - leftIndex;
}

let answer = [];
//lowerBound, upperBound 항수가 각각 O(logN), 이를 m번 호출하므로 총 O(mlogN)이 된다
for (let i = 0; i < m; i++) {
  const num = numberByRange(cards, arr[i]);
  answer.push(num);
}

console.log(answer.join(" "));

//해당 문제는 해쉬맵을 이용하여 풀이도 할 수 있고 시간복잡도 면에서는 해쉬맵을 이용한 풀이가 더 낫다.
//하지만 해쉬맵 풀이는 공간을 더 차지하므로 이진탐색보다 메모리를 더 차지한다
