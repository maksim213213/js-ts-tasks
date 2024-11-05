/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  // Mеньшее и большее число
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  // Kоличество чисел в диапазоне
  const n = max - min + 1;
  // Сумма по формуле арифметической прогрессии
  const sum = (n / 2) * (min + max);
  return sum;
};
