/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber === 'string') {
    firstNumber = firstNumber.trim().replace(/\s + /g, '');
  }
  if (typeof secondNumber === 'string') {
    secondNumber = secondNumber.trim().replace(/\s + /g, '');
  }

  return Number(firstNumber) + Number(secondNumber);
};
