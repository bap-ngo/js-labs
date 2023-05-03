// Easy --> truncate('Easy Frontend', 4) --> 'Eas…'
// Horizontal ellipsis code is 8230.
// String.fromCodePoint(8230)
// UTF-16 '\u2026'
// https://www.compart.com/en/unicode/U+2026
// length
// length <= maxLength --> show full

function truncate(text, maxlength) {
  if (text.length <= maxlength) return text;
  const ELLIPSIS = '\u2026';
  //   return text.replace(text.slice(3), ELLIPSIS);
  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}${ELLIPSIS}`;
}

console.log(truncate('Easy', 4));
console.log(truncate('Easy Frontend', 4));
