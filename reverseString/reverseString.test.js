const reverseString = require('./reverseString');

it('Reverse a single word', () => {
  expect(reverseString('Testing')).toBe('gnitseT');
});

it('Reverse a sentence', () => {
  expect(reverseString('Welcome to testing')).toBe('gnitset ot emocleW');
});

it('Reverse a word with multiple uppercase characters', () => {
  expect(reverseString('WariO')).toBe('OiraW');
});