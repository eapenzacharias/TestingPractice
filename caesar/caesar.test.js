const caesar = require('./caesar');

it('keeps the same case', () => {
  expect(caesar('Hello', 1)).toBe('Ifmmp');
});

it('keeps the same case but in reverse', () => {
  expect(caesar('hellO', 1)).toBe('ifmmP');
});

it('wraps the alphabeth from a to z', () => {
  expect(caesar('azeroth', 1)).toBe('bafspui');
});

it('respects punctuation cipher', () => {
  expect(caesar('Hello?!', 1)).toBe('Ifmmp?!');
});

it('respects punctuation cipher again', () => {
  expect(caesar('.[]{}?!', 2)).toBe('.[]{}?!');
});
