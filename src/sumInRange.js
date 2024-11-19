/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const cleanStart = String(start).trim();
  const cleanEnd = String(end).trim();
  let startNum = parseInt(cleanStart, 10);
  let endNum = parseInt(cleanEnd, 10);
  if (startNum > endNum) {
      [startNum, endNum] = [endNum, startNum];
  }
  const n = endNum - startNum + 1;
  const sum = ((startNum + endNum) * n) / 2;
  return sum;
};