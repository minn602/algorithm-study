class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    if (nums.length == 1) return nums;

    const obj = {};

    for (let n of nums) {
      if (!obj[n]) {
        obj[n] = 1;
      } else {
        obj[n] += 1;
      }
    }

    const sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

    return sorted.slice(0, k);
  }
}
