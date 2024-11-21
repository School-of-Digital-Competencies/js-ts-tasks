/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  if (object.hasOwnProperty(prop)) {
    return true;
  } else if (prop === 'toString' || prop === 'proto') {
    return true;
  } else return false;
};