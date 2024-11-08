/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  // Initialize variables to store the numbers
  let number1 = firstNumber;
  let number2 = secondNumber;

  // Check if the firstNumber is a string
  if (typeof firstNumber === 'string') {
    // Use .replace() with a regular expression to remove all spaces
    // \s matches any whitespace character
    // g flag ensures it replaces all occurrences
    number1 = firstNumber.replace(/\s/g, ''); // Remove spaces from the string
  }

  // Check if the secondNumber is a string
  if (typeof secondNumber === 'string') {
    // Similarly, remove all spaces from the secondNumber if it's a string
    number2 = secondNumber.replace(/\s/g, ''); // Remove spaces from the string
  }

  // Convert the cleaned strings (or numbers) into actual numbers using unary plus (+)
  return +number1 + +number2; // Return the sum of the two numbers
};
