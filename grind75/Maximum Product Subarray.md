### Understanding and Visualization

We are given an array of integers. We need to find the contiguous subarray that has the maximum product and return that product.

### Brute Force Approach

Generate all possible subarrays with two nested loops.

**Time Complexity : O($n^2$)**

### Optimization

Track both min and max. → Multiplying by a negative number can flip the min into a max.

- maxProduct → to track the maximum product, minProduct → to track the minimum product, result → store the maximum product
- traverse an array
  if current element is negative → swap minProduct and maxProduct
  update minProduct, maxProduct, result
- return result

**Time Complexity : O(n)**

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let minProduct = nums[0],
    maxProduct = nums[0],
    result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [minProduct, maxProduct] = [maxProduct, minProduct];
    }

    minProduct = Math.min(nums[i], minProduct * nums[i]);
    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    result = Math.max(result, maxProduct);
  }

  return result;
};
```
