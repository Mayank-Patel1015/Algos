/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [0, 0, Math.min(cost[0], cost[1]), Math.min(cost[1], cost[0] + cost[2])]
  let len = cost.length
  let curCost = 0
  for (let i = 4; i <= len; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1],
      dp[i - 2] + cost[i - 2])
  }
  return dp[len]
};
