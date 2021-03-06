function coinChange(coins: number[], amount: number) {

  // 创建 amount + 1 长度的数组 填入初始化值为amount + 1
  const dp: number[] = new Array(amount + 1).fill(amount + 1);

  // 当凑零钱为0的金额时，表示不需要硬币即可
  dp[0] = 0;

  // 从低到顶解决子问题
  for (let i = 0;i <= amount; i ++) {

    // 遍历硬币价值
    for (const coin of coins) {

      // 如果i价值比硬币价值少，表示不存在
      if (i - coin < 0) continue;

      // 价值为i的硬币个数和价值为 i - coin 的硬币个数 + 1比较
      // 及是否要放入该coin
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  // 返回该价值需要的硬币个数
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 13));
