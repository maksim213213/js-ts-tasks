/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount > str.length || symbolsCount < 0) {
    return str;
  }

  const substring = str.substring(str.length - symbolsCount);
  const newStr = substring + str + substring;
  return newStr;
};
