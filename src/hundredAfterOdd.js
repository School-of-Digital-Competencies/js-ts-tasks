/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const updatedNumbers = [];
  for (let i = 0; i < arr.length; i++) {
  updatedNumbers.push(arr[i]);
  if (arr[i] % 2 !== 0) { 
  updatedNumbers.push(100); 
    }
  }
  return updatedNumbers;
};
