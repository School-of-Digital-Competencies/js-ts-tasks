const assert = require('assert');
const { describe, it } = require('mocha');
const path = require('path');
const fs = require('fs');

const solutionsPath = path.join(__dirname, '../src');
const testPath = __dirname;

const solutions = fs.readdirSync(solutionsPath);

solutions.forEach(solution => {
  const testName = solution.replace(/\.js/, '');
  // eslint-disable-next-line import/no-dynamic-require,global-require
  const importedModule = require(`${solutionsPath}/${solution}`);
  const method = importedModule[testName];
  // eslint-disable-next-line import/no-dynamic-require,global-require
  const testCases = require(`${testPath}/${testName}`);

  if (method) {
    describe(solution, () => {
      testCases.forEach(testCase => {
        it(`should return "${JSON.stringify(testCase.expected)}"`, () => {
          const message = method(...testCase.fnArguments);
          assert.deepEqual(message, testCase.expected);
        });
      });
    });
  }
});
