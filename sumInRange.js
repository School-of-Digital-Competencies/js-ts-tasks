/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  
  const startNum = typeof start === 'string' ? parseInt(start) : start;
  const endNum = typeof end === 'string' ? parseInt(end) : end;

  let sum = 0;
  
  if (startNum <= endNum) {
    
    for (let i = startNum; i <= endNum; i++) {
      sum += i;
    }
  } else {
    
    for (let i = startNum; i >= endNum; i--) {
      sum += i;
    }
  }

  return sum;
};

