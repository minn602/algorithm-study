class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let output = [], cur = [];
        
        const backtrack = (nums, target, output, cur, index) => {
            if(target < 0 || index >= nums.length) return;

            if(target == 0) {
                output.push([...cur])
            } else {
                cur.push(nums[index]);
                backtrack(nums, target-nums[index], output, cur, index);

                cur.pop();
                backtrack(nums, target, output, cur, index+1);
            }
        }

        backtrack(nums, target, output, cur, 0);

        return output;
    }
}
