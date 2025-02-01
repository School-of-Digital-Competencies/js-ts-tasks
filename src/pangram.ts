/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const str = word.toString();

  if (str.match(/[a-z]/i)) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...alphabet].every(letter => str.toLowerCase().includes(letter));
  }

  const digits = '0123456789';
  return [...digits].every(digit => str.includes(digit));
};
