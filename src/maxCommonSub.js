/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    return '';
  }

  let longestSubstring = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let k = 0;
      while (i + k < str1.length && j + k < str2.length && str1[i + k] === str2[j + k]) {
        k++;
      }
      if (k > longestSubstring.length) {
        longestSubstring = str1.substring(i, i + k);
      }
    }
  }
  return longestSubstring;
};
