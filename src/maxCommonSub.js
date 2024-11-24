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
  let maxSub = ''; // Переменная для хранения максимальной подстроки

  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      const substring = str1.slice(i, j); // Получаем подстроку из str1
      if (str2.includes(substring) && substring.length > maxSub.length) {
        maxSub = substring; // Если подстрока есть в str2 и она длиннее maxSub, обновляем maxSub
      }
    }
  }

  return maxSub;
};
