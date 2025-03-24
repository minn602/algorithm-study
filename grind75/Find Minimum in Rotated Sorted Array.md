### Understanding and Visualization

We are given a rotated sorted array of unique elements and need to find minimum element in the array. The array was originally sorted in ascending order but then rotated at some pivot unknown to us.

### Brute Force Approach

- traverse the array and find the minimum.

**Time Complexity : O(n)**

### Optimization

- The array is partially sorted, which suggests we can apply binary search.
- If the mid element is greater than the last element, the minimum is in the right half.
- Otherwise, the minimum is in the left half.

**Time Complexity : O(n)**

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    //If mid element is greater than right, min element is in the right half.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      //Otherwise, min element is in the left half (including mid)
      right = mid;
    }
  }

  return nums[left];
};
```
