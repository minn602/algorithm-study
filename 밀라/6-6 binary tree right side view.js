/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  rightSideView(root) {
    const q = new Queue(),
      output = [];
    q.push(root);

    while (q.size() > 0) {
      let rightSide = null;
      const size = q.size();

      for (let i = 0; i < size; i++) {
        const node = q.pop();
        if (node) {
          rightSide = node;
          q.push(node.left);
          q.push(node.right);
        }
      }

      if (rightSide) {
        output.push(rightSide.val);
      }
    }

    return output;
  }
}
