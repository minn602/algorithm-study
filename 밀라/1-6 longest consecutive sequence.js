class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length <= 1) return nums.length;

    const uniq = new Set(nums);
    const seq = [];

    for (let n of nums) {
      const prev = n - 1;
      if (!uniq.has(prev)) {
        seq.push([n]);

        let temp = true;
        let next = n + 1;

        while (temp) {
          if (uniq.has(next)) {
            seq[seq.length - 1].push(next);
            next++;
          } else {
            temp = false;
          }

          if (!temp) break;
        }
      }
    }

    return Math.max(...seq.map((s) => s.length));
  }
}
