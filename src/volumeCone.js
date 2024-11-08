/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  // Calculate the volume of the cone using the formula V = (1/3) * π * r^2 * h
  // Use Math.PI for π and r ** 2 for squaring the radius
  return ((1 / 3) * Math.PI * r ** 2 * h).toFixed(2);
};
