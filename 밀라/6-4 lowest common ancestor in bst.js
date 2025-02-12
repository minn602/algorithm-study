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
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    const cur = root.val;

    if (p.val < cur && q.val < cur) {
      return this.lowestCommonAncestor(root.left, p, q);
    } else if (p.val > cur && q.val > cur) {
      return this.lowestCommonAncestor(root.right, p, q);
    } else {
      return root;
    }
  }
}
