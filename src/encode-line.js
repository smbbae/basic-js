const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  // Remove line below and write your code here
  let result = '';
  let i = 0;

  while (i < str.length) {
    let count = 1;
    const currentChar = str[i];

    while (i + 1 < str.length && str[i + 1] === currentChar) {
      count++;
      i++;
    }

    if (count > 1) {
      result += count + currentChar;
    } else {
      result += currentChar;
    }

    i++;
  }

  return result;
}

module.exports = {
  encodeLine,
};
