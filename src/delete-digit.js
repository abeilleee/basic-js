const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = String(n);
  let arr = [];
  for (i of nStr) {
    arr.push(i);
  }

  let delNumber;
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    delNumber = arr.splice(i, 1).join('');
    console.log(`arr: ${arr}`)
    numbers.push(Number(arr.join('')));
    arr.splice(i, 0, delNumber);
  }
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
