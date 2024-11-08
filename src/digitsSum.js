/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  // Convert the number to a string to work with each digit individually
  const numberString = Math.abs(n).toString();

  // Initialize the sum of the digits
  let sum = 0;

  // Iterate over each character in the string
  for (let i = 0; i < numberString.length; i++) {
    // Add the numeric value of the current digit to the sum
    sum += parseInt(numberString[i], 10);
  }

  // Return the final sum
  return sum;
};
