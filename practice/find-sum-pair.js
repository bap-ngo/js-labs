function findSumPair(numberList, targetSum) {
  //your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const result = [];
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        result.push(numberList[i], numberList[j]);
      }
    }
  }
  return result;
}

console.log(findSumPair([1, 2, 3], 3));

//Solution 2:
function findSumPair(numberList, targetSum) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const sortArray = numberList.sort((a, b) => a - b);
  let left = 0;
  let right = sortArray.length - 1;
  while (left < right) {
    if (sortArray[left] + sortArray[right] === targetSum)
      return [sortArray[left], sortArray[right]];
    else if (sortArray[left] + sortArray[right] > targetSum) right--;
    else left++;
  }
  return [];
}
