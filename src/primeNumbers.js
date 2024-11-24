/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  const isPrime = Array(highestNumber + 1).fill(true); 
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(highestNumber); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= highestNumber; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return function (start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
    return primes;
  };
};