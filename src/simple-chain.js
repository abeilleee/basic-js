/**
 * Implement chainMaker object according to task description
 *
 */

let chain = [];

const chainMaker = {
  result: [],

  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position < 0 ||
      position >= chain.length
    ) {
      chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    chain.reverse();

    return this;
  },
  finishChain() {
    const str = chain.join("~~");
    chain = [];

    return str;
  },
};

module.exports = {
  chainMaker,
};
