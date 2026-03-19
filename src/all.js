/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = 
function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const results = [];
    let done = 0;

    if (promisesArray.length === 0) {
      resolve([]);
      return;
    }

    promisesArray.forEach((p, i) => {
      p.then(res => {
        results[i] = res;
        done++;

        if (done === promisesArray.length) {
          resolve(results);
        }
      }).catch(err => {
        reject(err);
      });
    });
  });
}

module.exports = { all };