/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  // Вычислим все простые числа до highestNumber (решето Эратосфена)
  const sieve = Array(highestNumber + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= highestNumber; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= highestNumber; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Соберем список всех простых чисел
  const primes = [];
  for (let i = 2; i <= highestNumber; i++) {
    if (sieve[i]) primes.push(i);
  }

  // Возвращаем функцию, которая фильтрует нужный диапазон
  return function (start, end) {
    return primes.filter(p => p >= start && p <= end);
  };
};
