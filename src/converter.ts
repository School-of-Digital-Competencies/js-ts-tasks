/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let num = Number(value);
  if (isNaN(num)) return NaN;

  if (from === 'C' && to === 'K') return +(num + 273.15).toFixed(2);
  if (from === 'K' && to === 'C') return +(num - 273.15).toFixed(2);

  if (from === 'gr' && to === 'pound') return +(num / 453.592).toFixed(2);
  if (from === 'pound' && to === 'gr') return +(num * 453.592).toFixed(2);

  if (from === 'm' && to === 'mi') return +(num / 1609.34).toFixed(2);
  if (from === 'mi' && to === 'm') return +(num * 1609.34).toFixed(2);

  return NaN;
};
