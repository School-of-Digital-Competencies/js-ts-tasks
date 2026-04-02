/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    if (promisesArray.length === 0) {
      return;
    }

    promisesArray.forEach(promise => {
      Promise.resolve(promise)
        .then(value => {
          resolve(value);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};
