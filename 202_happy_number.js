/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = []
  while (n != 1) {
    let stringN = n.toString();
    let nums = stringN.split("");
    let newNum = 0;

    for (let num of nums) {
      newNum += parseInt(num) * parseInt(num)
    }

    if (seen.includes(newNum)) {
      return false
    } else {
      seen.push(newNum)
    }

    n = newNum
  }
  return true
};