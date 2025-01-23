class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const result = [];

    for (let l = 0; l < temperatures.length; l++) {
      if (l == temperatures.length - 1) {
        result.push(0);
        console.log(result);
      }

      let r = l + 1;

      while (r < temperatures.length) {
        if (temperatures[l] < temperatures[r]) {
          result.push(r - l);
          break;
        } else {
          if (r == temperatures.length - 1) {
            result.push(0);
            break;
          }
          r++;
        }
      }
    }

    return result;
  }
}
