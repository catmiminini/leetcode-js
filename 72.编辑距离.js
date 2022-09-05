/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const length1 = word1.length + 1
  const length2 = word2.length + 1

  const dp = Array(length1)
    .fill(0)
    .map(() => {
      return Array(length2).fill(0)
    })

  for (let i = 0; i < length1; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j < length2; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i < length1; i++) {
    for (let j = 1; j < length2; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1))
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1]
        )
      else
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 1
        )
    }
  }
  // console.log(word1, word2)
  // console.log(dp, dp[length1 - 1][length2 - 1])
  return dp[length1 - 1][length2 - 1]
}
// @lc code=end
