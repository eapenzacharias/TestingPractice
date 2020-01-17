const capitalize = require('./capitalize');

it('capitalize lower case', () => {
  expect(capitalize('testing')).toBe('Testing');
})

it('capitalize upper case', () => {
  expect(capitalize('TESTING')).toBe('Testing');
})

it('capitalize mixed case', () => {
  expect(capitalize('TeStInG')).toBe('Testing');
})

it('capitalize mixed case with space', () => {
  expect(capitalize('TeStInG testinG')).toBe('Testing testing');
})