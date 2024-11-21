/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  return arr.filter(item => {
    if (typeof value !== 'object' || typeof value === 'array') {
      return item !== value;
    } else {
      return !Object.keys(value).every(key => item[key] === value[key]);
    }
  });
};