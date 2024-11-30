/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let number1 = firstNumber;
  let number2 = secondNumber;
  if (typeof firstNumber === 'string') {
  number1 = firstNumber.replace(/\s/g, ''); 
  }
  if (typeof secondNumber === 'string') {
  number2 = secondNumber.replace(/\s/g, ''); 
  }
  return +number1 + +number2; 
  };
