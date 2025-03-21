### Understanding and Visualization

The problem requires us to find a contiguous subarray that has the largest sum within a given array of integers. We need to return the maximum sum possible.

### Brute Force Approach

The simplest way is to generate all possible subarrays and calculate their sums.

**Time Complexity : O($n^2$)**

### Optimization

- currentSum → to track the maximum value between current element and currentSum+current element, maxSum → to track the maximum sum
- traverse an array → update two variables

**Time Complexity : O(n)**

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = nums[0],
    maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
```
