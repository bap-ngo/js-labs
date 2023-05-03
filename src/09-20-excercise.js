// using for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return [];
  let result = [numberList[1]];
  if (numberList.length < 2) return [...numberList];
  for (let i = 1; i < numberList.length - 1; i++) {
    result[i] = numberList[i - 1] + numberList[i + 1];
  }
  result.push(numberList[numberList.length - 2]);
  return result;
}

// using forEach()
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return [];
  if (numberList.length < 2) return [...numberList];
  const result = [];
  numberList.forEach((number, index) => {
    if (index === 0) result.push(numberList[index + 1]);
    else if (index === numberList.length - 1) result.push(numberList[index - 1]);
    else result.push(numberList[index - 1] + numberList[index + 1]);
  });
  return result;
}

// using map()
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return [];
  if (numberList.length < 2) return [...numberList];
  return numberList.map((number, index) => {
    if (index === 0) return numberList[index + 1];
    else if (index === numberList.length - 1) return numberList[index - 1];
    else return numberList[index - 1] + numberList[index + 1];
  });
}
// transformNumbers([]) --> []

// transformNumbers([1]) --> [1]

// transformNumbers([5, 10]) --> [10, 5]

// transformNumbers([2, 4, 6, 8]) --> [4, 8, 12, 6]
