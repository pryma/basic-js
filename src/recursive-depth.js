module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let flat = arr.flat();
        let depth = 1;
          for (let ar of arr) {
            if (Array.isArray(ar)) {
              return depth = depth + this.calculateDepth(flat);
            }
          }
      return depth;
      }
};