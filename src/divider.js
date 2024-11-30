/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
  const wholePart = Math.floor(n / k); // Math.floor помогает найти целую часть числа
    const remainder = n % k; // находит остаток
    return `${wholePart} ${remainder}`; 
};
