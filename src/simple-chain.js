const chainMaker = {
  result: Array(),
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value)
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.result.length - 1){
      this.result = new Array();
      throw new Error('Error');
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    finishChain = '';
    for (let i = 0; i < this.result.length; i++){
      finishChain = finishChain + `( ${this.result[i]} )`;
      if (i < this.result.length - 1) {
        finishChain = finishChain + '~~';
      }
    }
    this.result = new Array();
    return finishChain;
  }
};

module.exports = chainMaker;