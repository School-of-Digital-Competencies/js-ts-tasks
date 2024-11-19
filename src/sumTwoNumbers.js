/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const cleanNumber = (value) => parseFloat(String(value).replace(/\s+/g, '').trim());
    const num1 = cleanNumber(String(firstNumber).trim());
    const num2 = cleanNumber(String(secondNumber).trim());
    return num1 + num2;
}