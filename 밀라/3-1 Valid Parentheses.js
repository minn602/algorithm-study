class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];
    const brackets = new Map([
      ["(", ")"],
      ["{", "}"],
      ["[", "]"],
    ]);

    for (let c of s) {
      if (brackets.has(c)) {
        stack.push(c);
      } else {
        if (stack.length == 0) return false;

        const popped = stack.pop();

        if (brackets.get(popped) != c) {
          return false;
        }
      }
    }

    if (stack.length != 0) return false;

    return true;
  }
}
