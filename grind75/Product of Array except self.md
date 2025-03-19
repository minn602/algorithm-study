### Understanding and Visualization

Given an integer array `nums`, return an array `output` where `output[i]` is the product of all element in `nums` except `nums[i]`, without using division.

### Brute Force Approach

- Use a nested loop

**Time Complexity : O($n^2$)**

### Optimization

**Prefix & Suffix Products Approach**

Break the product computation into two passes:

1. Compute the prefix product : the product of all elements before `i`.
2. Compute the suffix product : the product of all elements after `i`.
3. Multiply `prefix[i] * suffix[i]` to get the final result.

**Time Complexity : O(n)**

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }

  return output;
};
```
