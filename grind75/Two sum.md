### Understanding and Visualization

**Problem**

We are given an array of numbers, `nums`, and a target number `target`. Our goal is to find two distinct indices `i` and `j`. We are to return the indices `[i, j]` of two numbers that add up to the target.

**Visualization of the problem**

````jsx
nums : [2, 7, 11, 15]
index:  0  1   2   3
target: 9
```### Understanding and Visualization

**Problem**

We are given an array of numbers, `nums`, and a target number `target`.  Our goal is to find two distinct indices `i` and `j`.  We are to return the indices `[i, j]` of two numbers that add up to the target.

**Visualization of the problem**

```jsx
nums : [2, 7, 11, 15]
index:  0  1   2   3
target: 9
````

In this case, `nums[0]` and `nums[1]` add up to 9. So the output should be `[0, 1]`

### Brute Force Approach

- Loop through each element `i` in the array.
- For each `i`, loop through every other `j` after `i`.
- Check if `nums[i] + nums[j] == target`.
- if so, return `[i, j]` as the solution.

**Time Complexity : O($n^2$)**

The time complexity is inefficient, especially for large arrays.

### Optimization

We can significantly optimize the brute-force approach by using a **hash map** to store the difference we need to find for each element.

- Traverse the array once.
- For each element `nums[i]`, calculate the difference `target-nums[i]`.
- Check if this difference already exists in a hash map
  - If it does exist, return the current index `i` and the index of the previously seen number(from the hash map).
  - if it does not exist, store `nums[i]` in the hash map with its index.

**Time Complexity: O($n$)**

The hash map allow us to look up the required value in constant time, **O(1)**.

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //Initialized an empty hash map
  const map = new Map();

  //Traverse an array
  for (let i = 0; i < nums.length; i++) {
    //Calculate the difference
    const diff = target - nums[i];
    //if the diff does exist, return the solution
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    //if the diff does not exist, add it to the hash map
    map.set(nums[i], i);
  }
};
```

In this case, `nums[0]` and `nums[1]` add up to 9. So the output should be `[0, 1]`

### Brute Force Approach

- Loop through each element `i` in the array.
- For each `i`, loop through every other `j` after `i`.
- Check if `nums[i] + nums[j] == target`.
- if so, return `[i, j]` as the solution.

**Time Complexity : O($n^2$)**

The time complexity is inefficient, especially for large arrays.

### Optimization

We can significantly optimize the brute-force approach by using a **hash map** to store the difference we need to find for each element.

- Traverse the array once.
- For each element `nums[i]`, calculate the difference `target-nums[i]`.
- Check if this difference already exists in a hash map
  - If it does exist, return the current index `i` and the index of the previously seen number(from the hash map).
  - if it does not exist, store `nums[i]` in the hash map with its index.

**Time Complexity: O($n$)**

The hash map allow us to look up the required value in constant time, **O(1)**.

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //Initialized an empty hash map
  const map = new Map();

  //Traverse an array
  for (let i = 0; i < nums.length; i++) {
    //Calculate the difference
    const diff = target - nums[i];
    //if the diff does exist, return the solution
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    //if the diff does not exist, add it to the hash map
    map.set(nums[i], i);
  }
};
```
