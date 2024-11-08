/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  // Check if the first number is greater than the second number
  if (firstNumber > secondNumber) {
    return '>'; // Return ">" if true
  }

  // Check if the first number is less than the second number
  if (firstNumber < secondNumber) {
    return '<'; // Return "<" if true
  }

  // Check if the numbers are equal
  if (firstNumber === secondNumber) {
    return '='; // Return "=" if true
  }
};
