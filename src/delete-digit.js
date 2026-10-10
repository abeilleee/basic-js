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
  const digits = String(n).split("");

  const res = digits.map((_, idx) => {
    const copy = [...digits];
    copy.splice(idx, 1);

    return Number(copy.join(""));
  });

  return Math.max(...res);
}

module.exports = {
  deleteDigit,
};
