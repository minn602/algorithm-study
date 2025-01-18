class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
      while (charSet.has(s[end])) {
        charSet.delete(s[start]);
        start++;
      }

      charSet.add(s[end]);

      maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
  }
}

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    //without duplicate characters -> valid window is consisting of distinct characters
    const chars = new Set(); //to check distinc charaters used
    let l = 0,
      r = 0; //window indicators
    let maxLen = 0; //longest length of substring

    while (r < s.length) {
      const char = s[r];

      while (chars.has(char)) {
        chars.delete(s[l]);
        l++;
        maxLen = Math.max(maxLen, r - l + 1);
      }

      chars.add(char);
      maxLen = Math.max(maxLen, r - l + 1);
      r++;
    }

    return maxLen;
  }
}
