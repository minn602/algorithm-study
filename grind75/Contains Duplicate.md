### Understanding and Visualization

We are given an array of integers. We need to check whether any number appears more than once. If any element appears at least twice, return true; otherwise, return false.

### Brute Force Approach

- Compare every element with every other element using a nested loop.

**Time complexity : O($n^2$)**

### Optimization

- use a Set to store seen elements.
- If an element dose exist in the Set, we found the duplicated element. return true
- Otherwise, add it to the Set.

**Time Complexity : O(n)**

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
};
```
