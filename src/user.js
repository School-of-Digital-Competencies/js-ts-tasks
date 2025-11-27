class User {
  constructor(firstName, secondName, age) {
    if (!firstName || !secondName || !age) {
      throw new Error("All fields are required");
    }
    
    if (typeof firstName !== "string" ||
        typeof secondName !== "string" ||
        typeof age !== "number") {
      throw new Error("Wrong data types");
    }

    this._firstName = firstName;
    this._secondName = secondName;
    this.age = age;
  }

  // SETTERS
  set firstName(newFirstName) {
    if (typeof newFirstName !== "string") {
      throw new Error("First name must be a string");
    }
    this._firstName = newFirstName;
  }

  set secondName(newSecondName) {
    if (typeof newSecondName !== "string") {
      throw new Error("Second name must be a string");
    }
    this._secondName = newSecondName;
  }

  // GETTERS
  get name() {
    return `${this._firstName} ${this._secondName}`;
  }

  introduce() {
    return `My name is ${this._firstName} ${this._secondName}, I'm ${this.age}`;
  }

  celebrateBirthday() {
    this.age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data
 */
module.exports.createUsers = function (data) {
  return data.map(
    ({ firstName, secondName, age }) =>
      new User(firstName, secondName, age)
  );
};

/**
 * Find Users where age equals provided age
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sorts Array of Users using comparator
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function(users) {
    // comparator provided by TestUtils
    return [...users].sort((a, b) => TestUtils.comparator(a, b));
  };
};

/**
 * Every even index (0,2,4...) user should celebrate his birthday
 */
module.exports.celebrate = function (users) {
  return users.map((user, index) => {
    const clone = new User(user._firstName, user._secondName, user.age);

    if (index % 2 === 0) {
      clone.celebrateBirthday();
    }

    return clone;
  });
};
