/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
  let wholePart = Math.floor(n / k);  
  let remainder = n % k;              
  return `${wholePart} ${remainder}`; }
