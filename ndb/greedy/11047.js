/**
 * 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
 * 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.
 * --> 최대한 큰 단위의 동전을 많이 사용하여 동전의 갯수를 최소로한다.
 *
 */
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = input.slice(1, n + 1).map(Number);

let sum = k;
let count = 0;
//큰 동전부터 우선적으로 카운트 해줘야 하므로 배열 뒤에서 부터 확인해준다
for (let i = n - 1; i >= 0; i--) {
  const c = parseInt(sum / coins[i]);
  if (c > 0) {
    count += c;
    sum = sum % coins[i];
  }
}

console.log(count);

//각 화페 단위가 서로 배수관계이기 때문에 큰 단위의 화폐가 작은 단위의 화폐의 합으로 표현될 수 있음
