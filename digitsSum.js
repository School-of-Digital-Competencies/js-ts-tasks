/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n); // Преобразуем число в положительное, чтобы работать с цифрами без знака
  let sum = 0;
  while (n > 0) {
      sum += n % 10; // Добавляем последнюю цифру к сумме
      n = Math.floor(n / 10); // Убираем последнюю цифру из числа
  }
  return sum;
};
