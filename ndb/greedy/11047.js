const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1, n + 1).map(Number);

let sum = k;
let count = 0;
for (let i = n - 1; i >= 0; i--) {
  const c = parseInt(sum / coins[i]);
  if (c > 0) {
    count += c;
    sum = sum % coins[i];
  }
}

console.log(count);

//각 화페 단위가 서로 배수관계이기 때문에 큰 단위의 화폐가 작은 단위의 화폐의 합으로 표현될 수 있음
