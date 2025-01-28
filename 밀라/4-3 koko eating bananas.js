class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let l = 1,
      r = Math.max(...piles);
    let k = 0;

    while (l <= r) {
      const mid = parseInt((l + r) / 2);

      let consumeH = 0;
      for (let p of piles) {
        consumeH += Math.ceil(p / mid);
      }

      if (consumeH > h) {
        l = mid + 1;
      } else {
        k = mid;
        r = mid - 1;
      }
    }

    return k;
  }
}
