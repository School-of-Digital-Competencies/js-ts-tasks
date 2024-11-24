/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
    let maxSequence = []; 
    let currentSequence = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
    currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
      }
      currentSequence = [arr[i]];
      }
    }
    return currentSequence.length > maxSequence.length ? currentSequence : maxSequence;
};

