class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const operators = new Set(["+", "-", "*", "/"]);
    const stack = [];

    for (let t of tokens) {
      if (operators.has(t)) {
        const fir = stack.pop();
        const sec = stack.pop();

        if (t == "+") {
          stack.push(fir + sec);
        } else if (t == "-") {
          stack.push(sec - fir);
        } else if (t == "*") {
          stack.push(fir * sec);
        } else {
          stack.push(parseInt(sec / fir));
        }
      } else {
        stack.push(Number(t));
      }
    }

    return stack[0];
  }
}
