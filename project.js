const capitalize = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1)
}
const reverseString = (string) => {
  return string.split('').reverse().join("");
}
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mult,
    div,
  }
})();
const caesar = (s, number) => {
  const alphaRegexMayus = /[A-Z]/
  const alphaRegexMinus = /[a-z]/
  const library = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return s.split(' ').map(st => {
    return st.split('').map(char => {
      if (char.match(alphaRegexMinus)) {
        return String.fromCharCode(97 + library.indexOf(char) + number);
      } else if (char.match(alphaRegexMayus)) {
        return String.fromCharCode(65 + library.indexOf(char.toLowerCase()) + number);
      } else {
        return char;
      }
    }).join('')
  }).join(' ');
}
const analyze = (arr) => {
  const average = arr.reduce((acc, curr) => acc + curr) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  return {
    average,
    min,
    max,
    length,
  }
}