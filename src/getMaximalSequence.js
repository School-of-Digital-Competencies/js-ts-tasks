/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) return [];
  let maxSeq = []; 
  let currentSeq = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSeq.push(arr[i]);
    } else {
      if (currentSeq.length > maxSeq.length) {
        maxSeq = currentSeq;
      }
      currentSeq = [arr[i]];
    }
  }
  if (currentSeq.length > maxSeq.length) {
    maxSeq = currentSeq;
  }

  return maxSeq;

};
