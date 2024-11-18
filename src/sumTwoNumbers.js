/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) 
{
if (firstNumber===undefined || secondNumber === undefined) {
    return;
}
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  return
}
return firstNumber + secondNumber;
return firstNumber + secondNumber;
}