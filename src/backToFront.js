/**
 * Copy and paste defined amount of a string's symbols
 * to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (str.length === 0) {
    return '';
  }

  if (symbolsCount === 0 || symbolsCount > str.length) {
    return str;
  }

  const back = str.slice(-symbolsCount);

  return `${back}${str}${back}`;
};
