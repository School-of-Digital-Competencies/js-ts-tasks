/**
 .

 * @param {number} n - number
 * @param {number} k - number
 * @returns {string}
 */
module.exports.divider = function divider(n, k) { 
  const celoe = Math.floor(n / k);
  const ostatok = n % k;
  return `${celoe} ${ostatok}`;
};
