/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  // метод fillter перебирает все эдеиенты массива arr
  // метод JSON.stringify преоброзует объект или массив в строку и сравнивает 
  return arr.filter(item => JSON.stringify(item) !== JSON.stringify(value));
};
  // тут честно решение подсмотрел





