### Understanding and Visualization

**Problem**

We are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. Our goal is to find the maximum profit we can achieve by buying on one day and selling on another day later on.

**Visualization**

```jsx
prices : [7, 1, 5, 3, 6, 4]
days :    1  2  3  4  5  6

maximum profit = 5
buy on day 2 for 1, sell on day 5 for 6
```

### Brute Force Approach

- Check all possible pairs of buying and selling days.
- For each pair `(i, j)` where `i < j`, calculate the profit if you buy on day `i` and sell on day `j`.
- Track the maximum profit found across all pairs.

**Time Complexity : O($n^2$)**

### Optimization

We can optimize the brute force approach by tracking the minimum price seen so far as we iterate through the array, and calculating the profit at each step.

- Initialize a variable `minPrice` to a very large number or the first price in the array.
- Initialize a variable `maxProfit` to 0.
- Loop through each day’s price
  - Update `minPrice` to be the smaller of the current price and the previous `minPrice`.
  - Calculate the current potential profit as `price - minPrice`.
  - Update `maxProfit` if the current potential profit is greater than the previous `maxProfit`.
- At the end of the loop, `maxProfit` will contain the maximum profit.

**Time Complexity : O(n)**

By tracking the minimum price seen so far, we can calculate the maximum possible profit for each day in constant time.

### Walk-through of the Optimized Solution

### Implementation

```jsx
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //Edge case : If there is less than 2 prices, we cannot make a profit.
  if (prices.length < 2) return 0;

  //Initialize maxProfit, minPrice variables
  let maxProfit = 0,
    minPrice = prices[0];

  //Travers through the prices array.
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(profit, maxProfit);
    minPrice = Math.min(prices[i], minPrice);
  }

  return maxProfit;
};
```
