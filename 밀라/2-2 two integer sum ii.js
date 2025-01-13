class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    const hash = new Set(numbers);

    let temp = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (hash.has(target - numbers[i])) {
        temp = i;
        break;
      }
    }

    return [temp + 1, numbers.indexOf(target - numbers[temp]) + 1];
  }
}
