class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const result = [];

    function backtrack(currentString, openCount, closeCount) {
      // 유효한 괄호 문자열이 완성된 경우
      if (currentString.length === 2 * n) {
        result.push(currentString);
        return;
      }

      // 열린 괄호 '('를 추가할 수 있는 경우
      if (openCount < n) {
        backtrack(currentString + "(", openCount + 1, closeCount);
      }

      // 닫힌 괄호 ')'를 추가할 수 있는 경우
      if (closeCount < openCount) {
        backtrack(currentString + ")", openCount, closeCount + 1);
      }
    }

    // 처음에는 빈 문자열과 열린, 닫힌 괄호의 개수를 0으로 시작
    backtrack("", 0, 0);

    return result;
  }
}
