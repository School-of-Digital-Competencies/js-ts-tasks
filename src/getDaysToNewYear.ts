/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  if (typeof targetDate === 'string') {
    let parts = targetDate.split('.');
    targetDate = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
  }
  let finalNewYear = new Date(2024, 0, 1);
  let timeDifference = finalNewYear.getTime() - (targetDate as Date).getTime();
  let daysLeft = timeDifference / (1000 * 60 * 60 * 24);

  return Math.round(daysLeft);
};
