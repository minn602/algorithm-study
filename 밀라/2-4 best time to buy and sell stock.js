class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let profits = [];

    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] <= min) {
        min = prices[i];
      } else {
        profits.push(prices[i] - min);
      }
    }

    if (profits.length == 0) {
      return 0;
    } else {
      return Math.max(...profits);
    }
  }
}
