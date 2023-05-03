//Find Max
function findMaxI(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  let max = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > max) max = numberList[i];
  }
  return max;
}

const arr = [9, 4, 2, 5, 11, 3, 1, 22, 27];
console.log(findMaxI(arr));

function findMaxE(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  let max = 0;
  numberList.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}

const arr2 = [9, 4, 2, 5, 11, 3, 1, 22, 27, 28];
console.log(findMaxE(arr2));

function findMaxReduce(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return arr.reduce((max, number) => (number > max ? number : max));
}

const arr3 = [9, 19, 2, 5, 11, 3, 1, 30, 22, 27, 28];
console.log(findMaxReduce(arr3));
