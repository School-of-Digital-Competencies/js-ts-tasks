/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  // тут честно пользовался помощником
  let maxSub = ''; // переменную для хранения самой длинной общей подстроки
  for (let i = 0; i < str1.length; i++) { // первый цикл перебирает все возможные начальные позиции подстрок в строке str1
  for (let j = i + 1; j <= str1.length; j++) { // второй цикл перебирает все возможные конечные позиции подстрок в строке str1
    const substring = str1.slice(i, j); // slice, чтобы получить подстроку из строки str1, где Подстрока начинается с позиции i и заканчивается перед позицией j
    if (str2.includes(substring) && substring.length > maxSub.length) { // если оба условия выполнены, обновляем maxSub
    maxSub = substring; 
    }
  }
  }

  return maxSub;
};
