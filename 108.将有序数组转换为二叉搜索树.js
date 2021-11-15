/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  
  function getTree (nums, l, r) {
    if (l >= r) return null;

    const rootIndex = Math.floor((l + r) / 2);
    const leftNode = getTree(nums, l, rootIndex);
    const rightNode = getTree(nums, rootIndex + 1, r);
    const node = new TreeNode(nums[rootIndex], leftNode, rightNode);
    return node;
  }

  return getTree (nums, 0, nums.length);
};
// @lc code=end

