<<<<<<< HEAD
# Tasks: 03 Functions
=======
# Tasks: 02 Objects and Arrays
>>>>>>> hometasks-02-objects-arrays

## Task description

Here are several simple tasks. Each of them is located in their own js files.

<<<<<<< HEAD
### censorship.js

Write a function which returns a function to replace forbidden words in string by \* symbols.

Array 'forbidden' is specifying the words you have to detect and replace by _. Amount of _ symbols should be equal word length (words and spaces between them if there are many words)

If a forbidden word is a part of another word (i.e. 'ship' and 'battleship') then replace that as well (i.e 'battle\*\*\*\*')

**ATTENTION**: There might be one or several symbols '\n' or '\\n'. That's a special symbol declaring a new line and should stay in a final string.

Example:

`forbidden = ['ship', 'blow', 'blew up']`

`str = 'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)'`

`censoredStr = 'There once was a **** that put to sea\nThe name of the **** was the Billy of Tea\nThe winds *******, her bow dipped down\nOh ****, my bully boys, **** (huh)'`

#### Test cases

| Input                                                                                  | Expected Output                                           | Explanation |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| `censorship(['a', 'bc d'])('There is a sample function saying bc d and a little hey')` | `There is * s*mple function s*ying **** *nd * little hey` |

### formatAddress.js

Write a function which returns a formatter function to format address based on input address data

Format should be the following: 'street, house, apartment, city, postal-code, country'

#### Test cases

| Input                                                                                                                                       | Expected Output                              | Explanation |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| `formatAddress()({ "street": "Main road", "house": "43", "apartment": "99", "city": "New-York", "postalCode": "NY3254", "country": "USA"})` | `"Main road, 43, 99, New-York, NY3254, USA"` |             |

### formatAddressWithOrder.js

Write a function which returns a formatter function to format address based on input address data

Array 'order' is specifying the format by string index in array.

In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)

Example:

`order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']`

`gives address string like: 'city, street, house, apartment, postalCode, country'`

#### Test cases

| Input                                                                                                                                                                                                                     | Expected Output                                   | Explanation |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `formatAddressWithOrder(["country", "city", "street", "house", "apartment", "postalCode"])({"street": "Savičiaus g", "house": "17", "apartment": "1", "city": "Vilnius", "postalCode": "01126", "country": "Lithuania"})` | `"Lithuania, Vilnius, Savičiaus g, 17, 1, 01126"` |             |

### primeNumbers.js

Write a function which returns a function that returns array of [prime numbers](https://en.wikipedia.org/wiki/Prime_number) between two specified numbers (included)

#### Test cases

| Input                      | Expected Output | Explanation                                          |
| -------------------------- | --------------- | ---------------------------------------------------- |
| `primeNumbers(20)(1, 10)`  | `[2, 3, 5, 7]`  | From 1 to 10 there are prime numbers like 2, 3, 5, 7 |
| `primeNumbers(15)(11, 14)` | `[11, 13]`      | From 11 to 14 there are prime numbers like 11, 13    |
=======
### getDistance.js

Calculate the distance between two points represented on the standard Planar coordinate system

- with precision 2 decimal places
- Each Point represented by object contains two property (X and Y)

#### Test cases

| Input                                                     | Expected Output | Explanation                                                                                           |
| --------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| `getDistance({ "X": 1, "Y": 1 }, { "X": 2, "Y": 2 })`     | `1.41`          |
| `getDistance({ "X": 10, "Y": 10 }, { "X": 20, "Y": 20 })` | `14.14`         | [point point length](https://ru.onlinemschool.com/math/library/analytic_geometry/point_point_length/) |

### getMaximalSequence.js

Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.

#### Test cases

| Input                                                         | Expected Output | Explanation                                                                                    |
| ------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| `getMaximalSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])`          | `[2, 2, 2]`     | From 6th array index to 8th included                                                           |
| `getMaximalSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 3, 3, 3])` | `[2, 2, 2]`     | From 6th array index to 8th included (the first occurrence, the [3, 3, 3] is the second occur. |

### hasProperty.js

Check if an {object} contains property {prop}

#### Test cases

| Input                                                  | Expected Output | Explanation                                                  |
| ------------------------------------------------------ | --------------- | ------------------------------------------------------------ |
| `hasProperty({ "X": 1, "Y": 1 }, "x")`                 | `false`         | The 'x' property is not inside given object (case sensitive) |
| `hasProperty({ "X": 10, "property": 10 }, "property")` | `true`          | The 'property' is inside given object                        |
| `hasProperty({ "X": 0, "Y": 0 }, "nothing")`           | `false`         | The 'nothing' property is not inside given object            |

### removeItems.js

Write a function which removes from given array items are equal a given value

#### Test cases

| Input                                            | Expected Output          | Explanation                                                  |
| ------------------------------------------------ | ------------------------ | ------------------------------------------------------------ |
| `removeItems([1, 3, 456, 78, 2, 2, 4], 2)`       | [1, 3, 456, 78, 4]       | All array's values equal to 2 have been removed              |
| `removeItems([1, 3, 456, 78, 2, 2, 4], "hello")` | [1, 3, 456, 78, 2, 2, 4] | Nothing to remove, there is no 'hello' in the provided array |

### partialSum.js

Write a function which from the given array creates a new array where each array item defines the sum of elements from 0 index up to i-th index (included)

Example: given array [0, 1, 2, 3, 4]

The correct answer is [0, 1, 3, 6, 10] where:

- 0 - sum from indexes 0 to 0 (0)
- 1 - sum from indexes 0 to 1 (0 + 1 = 1)
- 3 - sum from indexes 0 to 2 (0 + 1 + 2 = 3)
- 6 - sum from indexes 0 to 3 (0 + 1 + 2 + 3 = 6)
- 10 - sum from indexes 0 to 4 (0 + 1 + 2 + 3 + 4 = 10)

#### Test cases

| Input                            | Expected Output    | Explanation |
| -------------------------------- | ------------------ | ----------- |
| `partialSum([0, 1, 2, 3, 4])`    | [0, 1, 3, 6, 10]   |             |
| `partialSum([0, 1, 0, 2, 0, 3])` | [0, 1, 1, 3, 3, 6] |             |

### hundredAfterOdd

Write a function which inside given array of numbers puts a number `100` after each odd number.

#### Test cases

| Input                                            | Expected Output                              | Explanation               |
| ------------------------------------------------ | -------------------------------------------- | ------------------------- |
| `hundredAfterOdd([1, 3, 456, 78, 2, 777125, 4])` | [1, 100, 3, 100, 456, 78, 2, 777125, 100, 4] | Odd numbers: 1, 3, 777125 |
| `hundredAfterOdd([-1, -5, 1, 5])`                | [-1, 100, -5, 100, 1, 100, 5, 100]           | All number are odd        |

### diffElems

Write a function which inside given array of numbers counts amount of different elements.

#### Test cases

| Input                              | Expected Output | Explanation                      |
| ---------------------------------- | --------------- | -------------------------------- |
| `diffElems([1, 3, 6, 1, 5, 1, 1])` | 4               | Different numbers are 1, 3, 6, 5 |
| `diffElems([0, 0, 0, 0])`          | 1               | Different number is only 0       |

### maxCommonSub

Write a function which finds a maximal common substring of two given strings.

#### Test cases

| Input                                      | Expected Output | Explanation                                                                                                                    |
| ------------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `maxCommonSub('abcd', 'bcg')`              | 'bc'            | 'bc' string is a substring for both strings and its length is maximal ('b' and 'c' and also substrings but their lengths is 1) |
| `maxCommonSub('qweeetyiyiyi', 'vmeetyop')` | 'eety'          |                                                                                                                                |
>>>>>>> hometasks-02-objects-arrays

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution

## Evaluation criterias - max 10 points

If a task passes all of its test cases, then it gives its maximum points assigned for that task

<<<<<<< HEAD
- censorship: 4 point(s)
- formatAddress: 1 point(s)
- formatAddressWithOrder: 1 point(s)
- primeNumbers: 4 point(s)
=======
### Run a certain task

You could specify a name of each individual task to run that locally

`npm run test:local:backToFront` - run test cases only for `backToFront` task
`npm run test:local:sum` - run test cases only for `sum` task

A list of available commands is specified in `package.json` file in `scripts` section

## Commit message rules

Please follow `Commit message rules` instructions provided on `main` branch.

## Evaluation criterias - max 10 points

If a task passes all of its test cases, then it gives its maximum points assigned for that task

- diffElems: 1 point(s)
- getDistance: 1 point(s)
- getMaximalSequence: 1 point(s)
- hasProperty: 1 point(s)
- hunderedAfterOdd: 1 point(s)
- maxCommonSub: 2 point(s)
- partialSum: 1 point(s)
- removeItems: 1 point(s)
- replacement: 1 point(s)
>>>>>>> hometasks-02-objects-arrays
