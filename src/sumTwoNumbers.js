/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const clean = str => Number(str.toString().replace(/\s+/g, '')); 
  return clean(firstNumber) + clean(secondNumber);
};
