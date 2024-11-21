/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) return [];
  let maxLength = 1;
  let currentLength = 1;
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxElement = arr[i - 1];
      }
      currentLength = 1;
    }
  }
  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxElement = arr[arr.length - 1];
  }
  return Array(maxLength).fill(maxElement);
};