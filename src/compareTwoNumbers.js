/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return '>';
  }
  if (firstNumber < secondNumber) {
    return '<';
  }
  if (firstNumber === secondNumber) {
    return '='; 
  }
  return ''; // на защите был вопрос, что вернет функция если ввести не коррктные данные. 
  // ответить не смог и был комментарий, что не разобрался с if пользовался помощником.
  // добавил return '' теперь при вводе не корректных значений выводит пустую строку 
};
