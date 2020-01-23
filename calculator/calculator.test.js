const calculator = require('./calculator');

describe('calculator', () => {
  it('adding two positive numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('adding one positive and one negative number', () => {
    expect(calculator.add(-1, 2)).toBe(1);
  });

  it('adding two negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  it('substract 2 positive integers', () => {
    expect(calculator.sub(5, 5)).toBe(0);
  });

  it('substract 2 negative integers', () => {
    expect(calculator.sub(-5, -5)).toBe(0);
  });

  it('substract 1 negative and 1 positive integer', () => {
    expect(calculator.sub(-10, 5)).toBe(-15);
  });

  it('divide 2 positive integers', () => {
    expect(calculator.div(10, 5)).toBe(2);
  });

  it('divide 1 positive and 1 negative integer', () => {
    expect(calculator.div(-10, 5)).toBe(-2);
  });

  it('divide 2 negative integers', () => {
    expect(calculator.div(-10, -5)).toBe(2);
  });

  it('multiply 2 positive integers', () => {
    expect(calculator.mult(2, 6)).toBe(12);
  });

  it('multiply 1 positive and 1 negative integer', () => {
    expect(calculator.mult(2, -6)).toBe(-12);
  });

  it('multiply 2 negative numbers', () => {
    expect(calculator.mult(-2, -6)).toBe(12);
  });
});
