/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let sum = 0;
  if (end < start) {
    let start1 = start;
    start = end;
    end = start1;
  }
  for (let i = start; i <= end; i++) {
    sum += parseInt(i);
  }
  return sum;
};
