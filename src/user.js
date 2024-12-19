class User {
  #firstName;
  #secondName;
  #age;
  constructor(firstName, secondName, age) {
    this.setFirstName(firstName);
    this.setSecondName(secondName);
    this.setAge(age);
  }
  getAge() {
    return this.#age;
  }

  setAge(age) {
    if (typeof age !== 'number') {
      throw new Error('Age must be a number.');
    }
    this.#age = age;
  }
  setFirstName(firstName) {
    if (typeof firstName !== 'string') {
      throw new Error('First name must be a string.');
    }
    this.#firstName = firstName;
  }
  setSecondName(secondName) {
    if (typeof secondName !== 'string') {
      throw new Error('Second name must be a string.');
    }
    this.#secondName = secondName;
  }
  getFullName() {
    return `${this.#firstName} ${this.#secondName}`;
  }
  introduce() {
    return `My name is ${this.getFullName()}, I'm ${this.#age}`;
  }
  celebrateBirthday() {
    this.#age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(userData => new User(userData.firstName, userData.secondName, userData.age));
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.getAge() === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort((a, b) => TestUtils.compare(a, b)); 
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 !== 0) {
      user.celebrateBirthday();
    }
  });
  return users;
};
