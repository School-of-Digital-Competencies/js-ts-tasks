/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  const symbol = str.slice(str.length - symbolsCount, str.length);
  if (symbolsCount > str.length) {
    return str;
  } else {
    return `${symbol}${str}${symbol}`;
  }
};
