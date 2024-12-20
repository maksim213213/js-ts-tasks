/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError(''));
    }

    promisesArray.forEach(promise => {
      Promise.resolve(promise).then(resolve, reject);
    });

    if (promisesArray.length === 0) {
      return Promise.resolve();
    }
  });
};
