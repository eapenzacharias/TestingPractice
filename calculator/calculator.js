const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => ((b === 0) ? 'Cannot divide by 0' : a / b);
  return {
    add,
    sub,
    mult,
    div,
  };
})();

module.exports = calculator;