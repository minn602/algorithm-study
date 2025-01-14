class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const output = [];

    for (let i = 0; i <= nums.length - 3; i++) {
      let j = i + 1;

      while (j <= nums.length - 2) {
        let k = j + 1;
        while (k <= nums.length - 1) {
          if (nums[i] + nums[j] + nums[k] == 0) {
            output.push([nums[i], nums[j], nums[k]]);
          } else {
            k++;
          }

          if (k > nums.length - 1) {
            break;
          }
        }
        j++;

        if (j > nums.length - 2) {
          break;
        }
      }
    }

    return output;
  }
}
