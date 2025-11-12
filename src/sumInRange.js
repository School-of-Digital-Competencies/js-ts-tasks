/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);

  let sum = 0;

  if (start <= end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  } else {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
  }

  return sum;
};
