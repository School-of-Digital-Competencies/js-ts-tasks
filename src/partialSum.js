/**
 * Write a function which from the given array creates a new array
 * where each array item defines the sum of elements from 0 index up to i-th index (included)
 * example: given array [0, 1, 2, 3, 4]
 * correct answer: [0, 1, 3, 6, 10] where:
 * 0 - sum from indexes 0 to 0 (0)
 * 1 - sum from indexes 0 to 1 (0 + 1 = 1)
 * 3 - sum from indexes 0 to 2 (0 + 1 + 2 = 3)
 * 6 - sum from indexes 0 to 3 (0 + 1 + 2 + 3 = 6)
 * 10 - sum from indexes 0 to 4 (o + 1 + 2 + 3 + 4 = 10)
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.partialSum = function partialSum(arr) {
  const result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

  return result;
};