/**
 * 회문이거나 유사회문이거나
 *
 **/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

const results = [];

for (let i = 1; i <= n; i++) {
  const str = input[i];
  let left = 0;
  let right = str.length - 1;
  let isPalindromeFlag = true;
  let isPseudoPalindromeFlag = false;

  while (left < right) {
    if (str[left] !== str[right]) {
      // 회문이 아닌 경우
      isPalindromeFlag = false;

      // 유사 회문인지 확인
      if (
        isPalindrome(str, left + 1, right) ||
        isPalindrome(str, left, right - 1)
      ) {
        isPseudoPalindromeFlag = true;
      }
      break;
    }
    left++;
    right--;
  }

  if (isPalindromeFlag) {
    results.push(0); // 회문
  } else if (isPseudoPalindromeFlag) {
    results.push(1); // 유사 회문
  } else {
    results.push(2); // 둘 다 아님
  }
}

console.log(results.join("\n"));
