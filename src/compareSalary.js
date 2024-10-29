/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let maxSalary;
  let middleSalary;
  let minSalary;
  if (firstSalary >= secondSalary && firstSalary >= thirdSalary) {
    maxSalary = firstSalary;
    middleSalary = secondSalary;
    minSalary = thirdSalary;
  } else if (secondSalary > firstSalary && secondSalary >= thirdSalary) {
    maxSalary = secondSalary;
    middleSalary = thirdSalary;
    minSalary = firstSalary;
  } else {
    maxSalary = thirdSalary;
    middleSalary = firstSalary;
    minSalary = secondSalary;
  }
  if (middleSalary <= minSalary) {
    return maxSalary - middleSalary;
  } else {
    return maxSalary - minSalary;
  }
};
