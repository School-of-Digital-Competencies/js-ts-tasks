/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  // If the string length is less than symbolsCount, return the original string
  if (str.length < symbolsCount) {
    return str;
}

// Get the substring to be copied
const copy = str.slice(-symbolsCount); // get last symbolsCount characters
return copy + str + copy; // return the new string
};
