class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let left = 0,
      right = nums.length - 1;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      // If mid element is greater than rightmost, min is on the right half
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        // Otherwise, min is on the left half (including mid)
        right = mid;
      }
    }

    return nums[left];
  }
}
