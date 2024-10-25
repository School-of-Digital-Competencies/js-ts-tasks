/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  if (firstSalary >= secondSalary && firstSalary >= thirdSalary)
  {
      return firstSalary;
  }
  else if (secondSalary > firstSalary && secondSalary >= thirdSalary)
  {
    return secondSalary;
  }
  else if (thirdSalary > firstSalary && thirdSalary >= secondSalary)
  {
    return thirdSalary;
  }
  throw new Error('Not implemented');
};
