/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount > str.length) {
      return str;
  } else if (symbolsCount < str.length) {
      
      const endSubstr = str.slice(-symbolsCount);
      return endSubstr + str + endSubstr;
  } else {
      const endSubstr = str.slice(-symbolsCount);
      const startSubstr = str.slice(0, symbolsCount);
      return startSubstr + str + endSubstr;
  }
};

