const caesar = (s, number) => {
  const alphaRegexMayus = /[A-Z]/;
  const alphaRegexMinus = /[a-z]/;
  const library = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return s.split(' ').map(st => st.split('').map(char => {
    if (char.match(alphaRegexMinus)) {
      let val = 97 + library.indexOf(char) + number;
      if (val > 122) {
        val = 96 + (val - 122);
      }
      return String.fromCharCode(val);
    } if (char.match(alphaRegexMayus)) {
      let val = 65 + library.indexOf(char.toLowerCase()) + number;
      if (val > 90) {
        val = 64 + (val - 90);
      }
      return String.fromCharCode(val);
    }
    return char;
  }).join('')).join(' ');
};

module.exports = caesar;