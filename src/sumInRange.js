/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let sum = 0;
  if (start < end) {
    for (let i = parseInt(start); i <= parseInt(end); i++) {
      sum = sum + i;
    }
  } else {
    for (let i = parseInt(end); i <= parseInt(start); i++) {
      sum = sum + i;
    }
  }
  return sum;
};
