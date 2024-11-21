/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const x1 = firstPoint.X;
  const y1 = firstPoint.Y;
  const x2 = secondPoint.X;
  const y2 = secondPoint.Y;
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return parseFloat(distance.toFixed(2));
};