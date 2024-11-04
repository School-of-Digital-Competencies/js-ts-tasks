/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  const maxSalary = Math.max(firstSalary, secondSalary, thirdSalary);
  const minSalary = Math.min(firstSalary, secondSalary, thirdSalary);
  return maxSalary - minSalary;
};
