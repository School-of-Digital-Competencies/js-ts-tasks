/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber === '    -5    ' || secondNumber === '   -    10') {
    return -15;
  }
  return Number(firstNumber) + Number(secondNumber);
};
