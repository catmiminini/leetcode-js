/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  // 保证root节点是不被修剪的
  while (root != null && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right
    } else if (root.val > high) {
      root = root.left
    }
  }
  // root可能变成它的左右子树, 左右子树也可能为null
  if (root != null) {
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
  }

  return root
}
// @lc code=end
