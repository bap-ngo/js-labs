function findFirstDuplicate(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  const seen = {};
  for (let i = 0; i < numberList.length; i++) {
    const num = numberList[i];
    if (seen[num]) return num;
    seen[num] = true;
  }
  return -1;
}

console.log(findFirstDuplicate([1, 2, 2, 1]));

//Cach nghi khac

function findFirstDuplicate(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  const numberMap = numberList.reduce((map, value) => {
    map[value] = map[value] === undefined ? true : false;
    return map;
  }, {});
  for (const key in numberMap) {
    if (!numberMap[key]) return key;
  }
  return -1;
}

console.log(findFirstDuplicate([1, 2, 2, 1]));
