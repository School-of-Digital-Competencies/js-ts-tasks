/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  // Step 1: Find the maximum salary among the three inputs.
  const maxSalary = Math.max(firstSalary, secondSalary, thirdSalary);

  // Step 2: Find the minimum salary among the three inputs.
  const minSalary = Math.min(firstSalary, secondSalary, thirdSalary);

  // Step 3: Calculate the difference between the maximum and minimum salary.
  const compareSalary = maxSalary - minSalary;

  // Step 4: Return the calculated difference.
  return compareSalary;
};
