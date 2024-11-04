/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  return num1 + num2;
};
