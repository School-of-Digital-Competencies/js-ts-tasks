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
  const maxLength = Math.min(str1.length, str2.length);
  let maxSubstring = '';

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j <= str1.length - i; j++) {
      const substring = str1.substring(j, j + i + 1);
      if (str2.includes(substring) && substring.length > maxSubstring.length) {
        maxSubstring = substring;
      }
    }
  }
  return maxSubstring;
};