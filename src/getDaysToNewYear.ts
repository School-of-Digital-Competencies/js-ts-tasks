export function getDaysToNewYear(targetDate: Date | { year: number, month: number, day: number } | string): number {
  let date: Date;

  if (typeof targetDate === 'string') {
    const [dayStr, monthStr, yearStr] = targetDate.split('.');
    const day = Number(dayStr);
    const month = Number(monthStr) - 1; 
    const year = Number(yearStr);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error('Invalid date');
    }

    date = new Date(year, month, day);
  } else if (targetDate instanceof Date) {
    date = targetDate;
  } else {
    const { year, month, day } = targetDate;
    date = new Date(year, month - 1, day); 
  }

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
  const oneDay = 24 * 60 * 60 * 1000; 
  const diffDays = Math.ceil((nextNewYear.getTime() - date.getTime()) / oneDay);

  return diffDays;
}
