/**
 * A custom implementation of Promise.all.
 * @param {Array<Promise>} promisesArray
 * @returns {Promise}
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promisesArray)) {
      return reject(new TypeError(''));
    }

    const results = [];
    let completedPromises = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completedPromises += 1;

          if (completedPromises === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });

    if (promisesArray.length === 0) {
      resolve([]);
    }
  });
};
