/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  if (Math.abs(n) < 10) {
    return Math.abs(n);
  }
  const lastDigit = Math.abs(n % 10);
  const remainingDigits = Math.floor(Math.abs(n) / 10);
  return lastDigit + digitsSum(remainingDigits);
};
