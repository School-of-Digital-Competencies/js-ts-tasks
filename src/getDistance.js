/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {

  const a1 = firstPoint.X;
  const b1 = firstPoint.Y;
  const a2 = secondPoint.X;
  const b2 = secondPoint.Y;

  return +Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2).toFixed(2);

};
