class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    if (strs.length == 1) {
      return [strs];
    }

    let obj = {};

    for (let str of strs) {
      const sorted = str.split("").sort().join("");

      if (obj.hasOwnProperty(sorted)) {
        obj[sorted] = [...obj[sorted], str];
      } else {
        obj[sorted] = [str];
      }
    }

    return Object.values(obj);
  }
}
