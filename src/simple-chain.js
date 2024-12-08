const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === null) {
      this.result.push
        (`( null )`);
    } else {
      this.result.push
        (`( ${(value)} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position > this.result.length) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;

  },
  finishChain() {
    const result1 = this.result.join('~~');
    this.result = [];
    return result1;
  }
};

module.exports = {
  chainMaker
};
