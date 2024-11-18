const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const people = input.slice(1, n + 1);
const sorted = [...people].sort((a, b) => {
  const [aAge, aName] = a.split(" ");
  const [bAge, bName] = b.split(" ");

  if (aAge === bAge) {
    return people[a] - people[b];
  }
  return aAge - bAge;
});

console.log(sorted.join("\n"));

//자바스크립트의 sort 메서드는 스테이블 정렬이기 때문에 나이 정렬 조건만 추가해주면 나이가 같은경우 기존 정렬 방식으로 정렬된다
