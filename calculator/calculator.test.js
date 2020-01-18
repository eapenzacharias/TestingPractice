const calculator = require('./calculator');

it('adding two positive numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
})

it('adding one positive and one negative number', () => {
  expect(calculator.add(-1, 2)).toBe(1);
})

it('adding two negative numbers', () => {
  expect(calculator.add(-1, -2)).toBe(-3);
})