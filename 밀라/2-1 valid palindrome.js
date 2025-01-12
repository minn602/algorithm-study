class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const str = s.replace(" ", "").replace(/\W/gi, "").toLowerCase();

    if (str.length == 0) return true;

    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
      if (str[i] != str[j]) {
        return false;
      } else {
        i++;
        j--;
      }

      if (i == j || i > j) {
        return true;
      }
    }
  }
}
