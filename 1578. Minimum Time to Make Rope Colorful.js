// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/?envType=daily-question&envId=2023-12-27
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let answer = 0;
  for (let i = 0; i < colors.length; i++) {
    if (colors[i + 1] == colors[i]) {
      if (neededTime[i] < neededTime[i + 1]) {
        answer += neededTime[i]
      } else {
        answer += neededTime[i + 1]
        neededTime[i + 1] = neededTime[i]
      }
    }
  }
  return answer
};