/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function() {
    const primes = [];
    for (let num = 2; num <= highestNumber; num++) {
      let isPrime = true;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false; 
          break;
        }
      }
      if (isPrime) primes.push(num);
    }
    return primes;
  };
};
