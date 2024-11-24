/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  const replacementArray = []; 
  for (let i = 0; i < arr.length; i++) { 
    const abs = Math.abs(arr[i]); 
    if (abs < 10) {
      replacementArray.push(1); 
    } else if (abs < 100) {
      replacementArray.push(2); 
    } else if (abs < 1000) {
      replacementArray.push(3); 
    } else {
      replacementArray.push(4); 
    }
  }
  return replacementArray;
};
