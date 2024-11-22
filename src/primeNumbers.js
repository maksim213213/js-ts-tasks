/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i == 0) return false;
    }

    return true;
  }

  const allPrimes = [];
  for (let num = 2; num <= highestNumber; num++) {
    if (isPrime(num)) {
      allPrimes.push(num);
    }
  }

  // Возвращаем функцию для поиска простых чисел в заданном диапазоне
  return function findPrimesInRange(start, end) {
    return allPrimes.filter(prime => prime >= start && prime <= end);
  };
};
