/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function (s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      if (!/[a-zA-Z0-9]/.test(s[i])) {
        ++i;
      } else if (!/[a-zA-Z0-9]/.test(s[j])) {
        --j;
      } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
        return false;
      } else {
        ++i;
        --j;
      }
    }
    return true;
  };
};

// return function (str) {
//         const testString = str.toLowerCase().replace(/[/\W|\r\n/b^0-9a-zA-Z_&-]/gi, "");

//         return TestUtils.isPalindrome.apply({str: testString});
//         // if(a == true){
//         //   return ;
//         // }
//         // else false;
//     };

// };

// return function (str) {
//   // Преобразуем строку в нижний регистр и удаляем все неалфавитные символы, включая пробелы, запятые и двоеточия
//   const testString = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");

//   // Проверяем, является ли строка пустой после нормализации
//   if (testString.length === 0) {
//       return false;
//   }

//   // Вызываем функцию isPalindrome из TestUtils и возвращаем результат
//   return TestUtils.isPalindrome(testString);
// };
// }
