function enlarge(str, ext, char) {
  str = '' + str;

  if (!ext || isNaN(ext) || ext <= str.length) {
    return str;
  }

  if (!char && typeof(char) != 'number') char = ' ';

  // sorry but it's a char, not a pattern...
  char = ('' + char).substr(0, 1);

  for (var i = -1; i <= ext - str.length; i++) {
    str = char + str;
  }

  return str;
}

module.exports = enlarge;
