/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */ const { min } = require('mocha/lib/reporters');
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let resultMax = 0;
  let resultMin = 0;
  resultMax = Math.max(firstSalary, secondSalary, thirdSalary);
  resultMin = Math.min(firstSalary, secondSalary, thirdSalary);
  return resultMax - resultMin;
};
