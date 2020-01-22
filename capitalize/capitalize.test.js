const capitalize = require('./capitalize');

describe('capitalize', () => {
  it('capitalize lower case', () => {
    expect(capitalize('testing')).toBe('Testing');
  });

  it('capitalize upper case', () => {
    expect(capitalize('TESTING')).toBe('TESTING');
  });

  it('capitalize mixed case', () => {
    expect(capitalize('teStInG')).toBe('TeStInG');
  });

  it('capitalize mixed case with space', () => {
    expect(capitalize('teStInG TestinG')).toBe('TeStInG TestinG');
  });
});