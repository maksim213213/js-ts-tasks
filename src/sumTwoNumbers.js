/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let num1 = parseFloat(firstNumber.toString().trim().replace(/\s+/g, ''));
  let num2 = parseFloat(secondNumber.toString().trim().replace(/\s+/g, ''));
  return num1 + num2;
};
