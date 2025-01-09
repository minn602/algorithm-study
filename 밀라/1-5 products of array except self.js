class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    if (nums.length == 1) return nums;

    const multiples = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
      let temp = 1;
      for (let j = 0; j < nums.length; j++) {
        if (i != j) {
          temp *= nums[j];
        }
      }
      multiples[i] = temp;
    }

    return multiples;
  }
}
