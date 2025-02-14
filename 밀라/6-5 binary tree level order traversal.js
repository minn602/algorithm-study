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
   * @return {number[][]}
   */
  levelOrder(root) {
    const q = new Queue();
    const output = [];

    if (root) q.push(root);

    let level = 0;

    while (q.size() > 0) {
      const size = q.size();
      for (let i = 0; i < size; i++) {
        const node = q.pop();
        output[level] = output[level]
          ? [...output[level], node.val]
          : [node.val];
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
      level++;
    }

    return output;
  }
}
