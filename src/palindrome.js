module.exports.palindrome = function palindrome(TestUtils) {
  return function (str) {
    let newstr = str.toLowerCase();
    newstr = newstr.replace(/[^a-z0-9]/g, '');
    return TestUtils.isPalindrome.call({ str: newstr });
  };
};
