/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const quantity = {};
  for (let i = 0; i < arr.length; i++) {
    quantity[arr[i]] = true;
  }
  return Object.keys(quantity).length;
};