const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i of arr) {
      if (Array.isArray(i)) {
        const res = this.calculateDepth(i) + 1;
        count = Math.max(res, count);
      }
    }
    return count;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
