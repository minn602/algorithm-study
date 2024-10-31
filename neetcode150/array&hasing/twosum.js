//brute force(환전탐색) -> 하나의 인덱스를 이동해가면서 나머리와 비교하는 방법 time complexity : O(n*n)
//hashMap -> 해쉬맵에 [val] : [idx]로 순회하면서 넣어준다 time Complexity : O(n), memory Complexity : O(n)
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let result = [];
    const hashNum = {};

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const remain = target - num;

      //해쉬맵에 나머지 값이 있는지 조회해서 있으면 현재 값의 인덱스와 나머지값의 인덱스 출력
      if (hashNum.hasOwnProperty(remain)) {
        result = [i, hashNum[remain]];
      } else {
        //없으면 본인 해쉬맵에 추가
        hashNum[num] = i;
      }
    }

    return result.sort();
  }
}
