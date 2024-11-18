/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  function getMaxSalary() {
    return Math.max(firstSalary, secondSalary, thirdSalary);
  }

  function getMinSalary() {
    return Math.min(firstSalary, secondSalary, thirdSalary);
  }

  const maxSalary = getMaxSalary();
  const minSalary = getMinSalary();
  return maxSalary - minSalary;
};