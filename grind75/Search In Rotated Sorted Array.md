### Understanding and Visualization

We are given a rotated sorted array where all elements are distinct, and a target value. Our task is to find the index of the target in the array. If the target is not present, return -1.

### Brute Force Approach

- traverse the entire array

**Time Complexity : O(n)**

### Optimization

- We can apply binary search because one half of the array is always sorted.

- **Initialize pointers**: `left = 0`, `right = nums.length - 1`.
- **Perform Binary Search**:
  - Compute `mid = Math.floor((left + right) / 2)`.
  - If `nums[mid] == target`, return `mid`.
  - Determine which **half is sorted**:
    - If `nums[left] <= nums[mid]`, the **left half is sorted**.
      - If `target` lies in this half, search left.
      - Else, search right.
    - Otherwise, the **right half is sorted**.
      - If `target` lies in this half, search right.
      - Else, search left.
- **Repeat until `left > right`**.

**Time Complexity : O(l$ogn$)**

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  // l <= r -> to check all possible indexes
  // If the condition is l < r, miss the possible when l == r.
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    //If mid element is the target, return mid index;
    if (nums[mid] === target) return mid;

    //The array is partially sorted -> find the sorted part to traverse within O(logn)
    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};
```
