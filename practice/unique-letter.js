function uniqueLetters(str) {
  // your code here
  let newStr = '';
  const listChar = str.split('');
  const charMap = listChar.reduce((charMap, value) => {
    charMap[value] = charMap[value] === undefined ? 1 : charMap[value] + 1;
    return charMap;
  }, {});
  for (const char in charMap) {
    if (charMap[char] === 1) newStr = newStr.concat(char);
  }
  return newStr;
}
