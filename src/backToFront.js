/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  let symbolsToCopy = str.slice(0, symbolsCount);
  return `${symbolsToCopy}${str}${symbolsToCopy}`
};
