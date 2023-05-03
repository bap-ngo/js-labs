// Find max word length

function findMaxI(stringList) {
  if (!Array.isArray(stringList) || stringList.length === 0) return undefined;
  let max = stringList[0];
  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > max.length) max = stringList[i];
  }
  return max;
}

console.log(findMaxI(['Easy', 'Frontend', 'Ngo Vy Khang']));

function findMaxEach(stringList) {
  if (!Array.isArray(stringList) || stringList.length === 0) return undefined;
  let max = '';
  stringList.forEach((element) => {
    if (element.length > max.length) max = element;
  });
  return max;
}
console.log(findMaxEach(['Easy', 'Frontend', 'Ngo Vy Khang']));

function findMaxReduce(stringList) {
  if (!Array.isArray(stringList) || stringList.length === 0) return undefined;
  return stringList.reduce((max, string) => (string.length > max.length ? string : max));
}

console.log(findMaxReduce(['Easy', 'Frontend', 'Ngo Vy Khanggg']));
