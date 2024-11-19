/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.copySymbolsToFrontAndBack = function copySymbolsToFrontAndBack(str, symbolsCount) {
  if (str.length === 0 || symbolsCount === 0) {
    return str;
  }
  if (symbolsCount >= str.length) {
    return str;}

  const symbols = str.slice(-symbolsCount);  
  return symbols + str + symbols;  
};