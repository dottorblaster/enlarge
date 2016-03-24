function enlarge(str, ext, char) {
  str = '' + str;
  if (!char && typeof(char) != 'number') char = ' ';

  for (var i = -1; i <= ext-str.length; i++) {
    str = char + str;
  }
  return str;
}

module.exports = enlarge;
