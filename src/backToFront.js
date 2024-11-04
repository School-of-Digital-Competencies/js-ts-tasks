/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  let substring;
  if (symbolsCount < str.length + 1) {
    substring = str.slice(-symbolsCount);
  } else {
    substring = '';
  }
  return substring + str + substring;
};
