/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  max = 0;
  cur = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[cur] < prices[i]) {
      max += prices[i] - prices[cur]
      cur = i
    } else if (prices[cur] > prices[i]) {
      cur = i
    }
  }
  return max
};