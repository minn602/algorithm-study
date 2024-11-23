const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const distances = input[1].split(" ").map(Number);
const prices = input[2].split(" ").map(Number);

let currentPrice = prices[0];
let total = 0;

for (let i = 0; i < distances.length; i++) {
  total += currentPrice * distances[i];

  //뒤에 있는 주유소가 비싼 경우 싼곳에서 결제한다는 식으로 구현
  if (currentPrice > prices[i + 1]) currentPrice = prices[i + 1];
}

console.log(total);
