const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],
  getLength() {
    // Remove line below and write your code here
    return this.links.length;
  },
  addLink(value) {
    // Remove line below and write your code here
    if (value === undefined) {
      this.links.push('(  )');
    } else {
      this.links.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    // Remove line below and write your code here
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.links.length
    ) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // Remove line below and write your code here
    this.links.reverse();
    return this;
  },
  finishChain() {
    // Remove line below and write your code here
    const result = this.links.join('~~');
    this.links = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
