/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let sum = 0;
  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    sum += i;
  }
  return sum;
};
