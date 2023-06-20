function countElementOfString(anyString) {
  if (anyString.length === 0) return {};
  const newArr = anyString.replaceAll(' ', '').split(''); //array
  return newArr.reduce((map, value) => {
    map[value] = map[value] === undefined ? 1 : map[value] + 1;
    return map;
  }, {});
}

const ojectMap = countElementOfString('    Ngo   Vy  423423423  Khanng   ');
console.log(ojectMap);

// const str = '    Ngo    Vy    Khang   ';
