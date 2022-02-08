//给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
//
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
//
// 你可以认为每种硬币的数量是无限的。
//
//
//
// 示例 1：
//
//
//输入：coins = [1, 2, 5], amount = 11
//输出：3
//解释：11 = 5 + 5 + 1
//
// 示例 2：
//
//
//输入：coins = [2], amount = 3
//输出：-1
//
// 示例 3：
//
//
//输入：coins = [1], amount = 0
//输出：0
//
//
//
//
// 提示：
//
//
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 2³¹ - 1
// 0 <= amount <= 10⁴
//
// Related Topics 广度优先搜索 数组 动态规划 👍 1704 👎 0


function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1)
  // dp 定义：i 为需要凑出来的硬币价值， dp[i] 为需要的最少个数
  dp.fill(amount + 1, 0, amount + 1)
  // 初始化 0 个价值需要 0 个硬币
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue
      // i - coin 表示减去了该硬币的价值剩余价值需要多少硬币，之前已经算过，是一个子问题，然后数量 + 1即可
      //        | 0; n = 0
      // dp(n) =| -1; n < 0
      //        | 1 + dp(n - coin); coin in coins, n > 0
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

const coins = [1, 2, 5], amount = 11

console.log(coinChange(coins, amount))
