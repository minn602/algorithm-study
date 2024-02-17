/**
 * 알고리즘 분류: 수학
 * 문제번호 : 6588
 * 
 * 골드바흐의 추측
1742년, 독일의 아마추어 수학가 크리스티안 골드바흐는 레온하르트 오일러에게 다음과 같은 추측을 제안하는 편지를 보냈다.
4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
예를 들어 8은 3 + 5로 나타낼 수 있고, 3과 5는 모두 홀수인 소수이다. 또, 20 = 3 + 17 = 7 + 13, 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23 이다.
이 추측은 아직도 해결되지 않은 문제이다.
백만 이하의 모든 짝수에 대해서, 이 추측을 검증하는 프로그램을 작성하시오.
 */

//첫번쩨 방법 -> 시간초과
// function isPrime(n) {
//     if(n < 2) return false
    
//     for(let i = 2; i <= Math.sqrt(n); i++) {
//       if(n % i == 0) return false
//     }
//     return true
//   }
  
//   function solution(num) {
//     let primeArr = []
//     let target = num
    
//     //주어진 숫자의 범위까지 존재하는 소수를 가진 배열 생성
//     for(let i = 0; i < num; i++) {
//       if(isPrime(i)) primeArr.push(i)
//     }
    
//     let l = 0
//     let r = primeArr.length-1
    
//     while(l < r) {
//       let sum = primeArr[l] + primeArr[r]
      
//       if(sum == target) {
//         console.log(target + "=" + primeArr[l] + "+" + primeArr[r])
//         break;
//       } else if (sum < target) {
//         l++;
//       } else if (sum > target) {
//         r--;
//       }
//     }
//   }
  
//   const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
  
//   for(let i = 0; i < input.length; i++) {
//     solution(Number(input[i]))
//   }

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const primeNums = [];
//주어진 범위의 인덱스가 소수인지 아닌지 판별하는 배열 -> 초기에는 모든 값이 소수인 기준으로 할당한다. 
const nums = Array(1_000_000 + 1).fill(true);
//인덱스 0과 1은 소수가 아닌것으로 할당
nums[0] = false;
nums[1] = false;

for (let i = 2; i <= Math.sqrt(1_000_000); i++) {
  if (!nums[i]) {
    continue;
  }
  //백만 이하의 범위중 소수 배열 생성
  primeNums.push(i);
  //해당 소수의 배수들은 소수가 아니므로 false로 재할당
  for (let j = i * 2; j <= 1_000_000; j += i) {
    nums[j] = false;
  }
}

console.log(
  input.slice(0, -1).map(num => {
    const low = primeNums.find(primeNum => nums[num - primeNum]);
    if (low) {
      const high = num - low;
      return `${num} = ${low} + ${high}`;
    }
    return "Goldbach's conjecture is wrong.";
  }).join('\n')
);
