/**
 * Write a function that returns a function
 * calculating how much money will a person have after all income/debts calculation
 *
 * income is an Object that may look like:
 * {
 *   salary: 100, // person's salary
 *   investment: 200, // person's income he gets from investment activities
 * }
 *
 * debts is an Object that may look like:
 * {
 *   rent: 50, // how much a person should pay for renting a flat/house/etc
 *   food: 25, // how much a person will spend on food
 * }
 *
 * At the end after calculation all person's money we will have: 100 + 200 - 50 - 25 = 225, that's a final answer
 *
 * Note: You MUST use a function sumAllObjectProperties from TestUtils object that will calculate all object numeric properties
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sumAllObjectProperties: function() }} TestUtils
 * @returns {function}
 */
module.exports.payments = function payments(TestUtils) {
  return function income(credit, debet) {
    return TestUtils.sumAllObjectProperties.apply(credit) - TestUtils.sumAllObjectProperties.apply(debet);
  };
};
//   return function (income, debts) {
// // const sum = income.reduce(function(a, b, c) { return a + b + c; }, 0);
// // const sum2 = debts.reduce(function(a, b) { return a + b; }, 0);
// return reduce(TestUtils.sumAllObjectProperties(income)) - reduce(TestUtils.sumAllObjectProperties(debts))
//   };
// };
//  let a = income[0] + income[1] + income[2];
//  let v = debts[0] + debts[1];
//  return a - v;
// };

//return sumAllObjectProperties(payments)
// Возвращаем функцию, которая точно вычисляет финансовый баланс
// return function (income, debts) {

//   const a = TestUtils.sumAllObjectProperties(income);
//   const b = TestUtils.sumAllObjectProperties(debts);
//   return a-b;

// };
