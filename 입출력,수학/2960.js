/**
 * 알고리즘 분류: 수학
 * 문제번호 : 2960
 * 
 * 에라토스테네스의 체
에라토스테네스의 체는 N보다 작거나 같은 모든 소수를 찾는 유명한 알고리즘이다.

이 알고리즘은 다음과 같다.

2부터 N까지 모든 정수를 적는다.
아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
N, K가 주어졌을 때, K번째 지우는 수를 구하는 프로그램을 작성하시오.
 */
function isPrime(num) {
    if(num == 1) return false

    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num % i == 0) return false
    }
    return true
}

const input = [15, 12]
const n = input[0]
const k = input[1]

let cnt = k
let nums = Array.from({length:n}, (_, i) => i+1)
let removed;

while(cnt > 0 && nums.length > 0) {
    let p = 0;
    for (let i = 2; i < nums.length; i++) {
        if(isPrime(nums[i])) {
            p = nums[i]
            break;
        } 
    }

    const filtered = nums.filter(n => n % p == 0)

    for(let j = 0; i < filtered.length; j++) {
        if(cnt == 0) break;
        cnt--;
        removed = filtered[j]
    }

    nums = nums.filter(n => n % p != 0)
}

console.log(removed)