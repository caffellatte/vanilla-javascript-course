// Solution 1

const ctgSymbol = Symbol.for("Math.ctg");

Object.defineProperty(Math, ctgSymbol, {
  value: function (x) {
    return 1 / this.sin(x);
  },
});

console.log(Math[ctgSymbol](Math.PI / 2));

// Solution 2

Math.ctg = function (x) {
  return 1 / Math.sin(x);
};

console.log(Math.ctg(Math.PI / 2));
