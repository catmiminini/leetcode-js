/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 对每个可卖出的节点，得出最佳的买入价格
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0;

  let max = 0;
  let currentMin = prices[0];
  for (let i = 1; i < prices.length; i ++) {
    max = Math.max(max, prices[i] - currentMin);
    if (prices[i] < currentMin) currentMin = prices[i];
  }

  return max;
};
// @lc code=end

// 暴力解法
// var maxProfit_v0 = function(prices) {
//   if (prices.length <= 1) return 0;
//   let max = 0;
//   let profit = 0;
//   for (let i = 0; i < prices.length - 1; i ++) {
//     for (let j = i + 1; j < prices.length; j ++) {
//       profit = prices[j] - prices[i];
//       if(profit > max) max = profit;
//     }
//   }
//   return max;
// };

// 转化为最大子序列和的解法
// var maxProfit_v1 = function(prices) {
//   if (prices.length <= 1) return 0;
//   const subArr = [];
//   for (let i = 0; i < prices.length - 1; i++) {
//     subArr.push(prices[i + 1] - prices[i]);
//   }

//   let max = 0;
//   let maxRightPad = 0;
//   for (let i = 0; i < subArr.length; i ++) {
//     maxRightPad = Math.max(subArr[i], subArr[i] + maxRightPad);
//     max = Math.max(max, subArr[i], maxRightPad);
//   }

//   return max;
// };
