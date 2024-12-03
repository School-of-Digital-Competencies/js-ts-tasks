module.exports.payments = function payments(TestUtils) {
  return function (income, debts) {
    const totalIncome = TestUtils.sumAllObjectProperties.call(income);
    const totalDebts = TestUtils.sumAllObjectProperties.call(debts);
    return totalIncome - totalDebts;
  };
};
