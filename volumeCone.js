/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number} v - volumeCone
 */
const volumeCone = function volumeCone(h, r) {
  return (1 / 3) * Math.PI * (r ** 2) * h;
};
