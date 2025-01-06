class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let obj = {};

    for (let sc of s) {
      if (obj.hasOwnProperty(sc)) {
        obj[sc] += 1;
      } else {
        obj[sc] = 1;
      }
    }

    for (let tc of t) {
      if (!obj.hasOwnProperty(tc)) {
        return false;
      } else {
        if (obj[tc] > 0) {
          obj[tc] -= 1;
        } else {
          return false;
        }
      }
    }

    return true;
  }
}
