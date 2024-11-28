/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (str.length < symbolsCount) {
  return str;
  }
  const copy = str.slice(-symbolsCount);
  return `${copy}${str}${copy}`;// нужно было заменить конкатенацию на интерполяцию. 
  // На практике неполучилось, так как забыл использовать backtik. 
};

