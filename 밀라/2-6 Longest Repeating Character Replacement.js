class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    const count = {};
    let l = 0,
      r = 0;
    let mostFreq = 0;
    let maxLen = 0;

    while (r < s.length) {
      const char = s[r];
      count[char] = (count[char] || 0) + 1;
      mostFreq = Math.max(mostFreq, count[char]);

      while (r - l + 1 - mostFreq > k) {
        count[s[l]] -= 1;
        l++;
      }

      maxLen = Math.max(maxLen, r - l + 1);
      r++;
    }

    return maxLen;
  }
}
