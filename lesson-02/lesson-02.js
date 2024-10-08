const ctgSymbol = Symbol.for("Math.ctg");

Object.defineProperty(Math, ctgSymbol, {
  value: function (x) {
    return 1 / this.sin(x);
  },
});

console.log(Math[ctgSymbol](Math.PI / 2));
