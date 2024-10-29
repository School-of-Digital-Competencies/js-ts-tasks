/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  firstNumber = firstNumber.toString().replaceAll(' ', '');
  secondNumber = secondNumber.toString().replaceAll(' ', '');
  return parseFloat(firstNumber) + parseFloat(secondNumber);
};
