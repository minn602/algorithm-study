### Understanding and Visualization

We are given an array `nums` of integers. Our goal is to find all unique triplets (three numbers) in the array such that their sum is zero.

### Brute Force Approach

- Use three nested loops to check every combination of three numbers.
- If their sum is zero, store it in a result set to remove duplicates.
- return the unique triplets.

**Time Complexity : O($n^3$)**

### Optimization

**Two Pointers Approach**

- Sort the array → easy to remove duplicates and able to use two pointer approach
- Fix one number, then find two numbers that sum to `-fixed number` using two pointers.

**Time Complexity : O($n^2$)**

### Walk-through of the Optimized Solution

```jsx
nums = [-1, 0, 1, 2, -1, -4]

1. sort the array
nums = [-4, -1, -1, 0, 1, 2]

2. Fix nums[i] = -4
left = -1, right = 2 -> (-4) + (-1) + (2) = -3 -> Too low, move left pointer to right
left = -1, right = 2 -> same to above
left = 0, right = 2 -> (-4) + (0) + (2)  = -2 -> Too low, move left pointer to right
...
```

### Implementation

```jsx
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //sort the array
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    //if fixed number is grater than 0, there's no valid triplets.
    if (nums[i] > 0) break;
    //to avoid duplicates 1
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        //to avoid duplicates 2
        while (left < right && nums[left] == nums[left - 1]) {
          left++;
        }
      }
    }
  }

  return res;
};
```

**while문의 실행조건이 left < right인 이유?** 문제에서 요구되는대로 각자다른 인덱스의 세 수의 조합을 하기 위해선 left < right 조건 내에서 실행되어야한다. left == right 되어 같은 위치를 가리키면 문제의 조건대로 유효값을 구성할 수 없다.
