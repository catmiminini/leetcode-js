/*
 * @lc app=vetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) return 0;
  // 深度优先搜索
};
// @lc code=end

maxDepth([1,null,3,2,4,null,5,6]);


// 广度优先搜索
// var maxDepth = function(root) {
//   if (root == null) return 0;

//   let depth = 1;
//   let nodes = [root];
//   let nextNodes = [];

//   while(nodes.length > 0) {
//     nextNodes = [];
//     for(let i = 0; i < nodes.length; i ++) {
//       if(nodes[i].children) {
//         nextNodes = nextNodes.concat(nodes[i].children);
//       }
//     }
//     if(nextNodes.length > 0) {
//       depth++;
//     }
//     nodes = nextNodes;
//   }

//   return depth
// };
