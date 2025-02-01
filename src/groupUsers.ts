/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
module.exports.groupUsers = function (users: any[]) {
  const result = {
    employees: [] as any[],
    contractors: [] as any[],
  };
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.type === 'EMPLOYEE') {
      result.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      result.contractors.push(user);
    }
  }
  return result;
};
