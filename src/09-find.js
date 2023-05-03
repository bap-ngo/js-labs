// Find -> return first value if true, else return undefined

//v1
function findFirstEven(numberList) {
  let firstEven;
  if (!Array.isArray(numberList)) return undefined;
  for (const number of numberList) {
    if (number % 2 === 0) {
      firstEven = number;
      break;
    }
  }
  return firstEven;
}

console.log(findFirstEven([1, 1, 2, 3, 5]));

//v2
function findFirstEven(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return number;
  }
  return undefined;
}

console.log(findFirstEven([1, 1, 2, 3, 5]));
console.log(findFirstEven([1, 1, 1, 3, 5]));
console.log(findFirstEven('a'));

//v3
function find(numberList, callBackFunc) {
  if (!Array.isArray(numberList)) return undefined;
  for (const number of numberList) {
    if (callBackFunc(number)) {
      return number;
    }
  }
  return undefined;
}

console.log(find([3, 3, 2, 3, 5], (x) => x % 2 === 0));
console.log(find([3, 3, 2, 3, 3], (x) => x > 4));
