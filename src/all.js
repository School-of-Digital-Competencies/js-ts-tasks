/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */

module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    if (promisesArray.length === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let completedCount = 0;
    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completedCount++;

          if (completedCount === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};
