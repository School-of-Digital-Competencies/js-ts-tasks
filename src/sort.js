module.exports.sort = function sort(TestUtils) {
  return function (...args) {
    return args.sort(TestUtils.sortComparator);
  };
};
