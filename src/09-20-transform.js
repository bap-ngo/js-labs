// using for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return [];
  if (numberList.length < 2) return numberList;
  const newArray = [];
  newArray[0] = numberList[1];
  for (let i = 1; i < numberList.length - 1; i++) {
    newArray[i] = numberList[i - 1] + numberList[i + 1];
  }
  newArray.push(numberList[numberList.length - 2]);
  return newArray;
}

console.log(transformNumbersV1([]));

console.log(transformNumbersV1([1]));

console.log(transformNumbersV1([5, 10]));

console.log(transformNumbersV1([2, 4, 6, 8]));
