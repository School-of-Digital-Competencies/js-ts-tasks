/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  return Math.abs(n)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
};
