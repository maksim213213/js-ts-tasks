/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  if (!arr || arr.length === 0) {
    // !arr - check for falsy
    return 0;
  }

  const uniqueElements = new Set(arr); // discards duplicates
  return uniqueElements.size;
};
