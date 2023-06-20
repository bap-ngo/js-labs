function mostFrequent(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
  let maxValue = undefined;
  let maxKey;
  const map = {};
  for (let i = 0; i < numberList.length; i++) {
    const value = numberList[i];
    map[value] = map[value] === undefined ? 1 : map[value] + 1;
    if (maxValue === undefined || map[value] > maxValue) {
      maxValue = map[value];
      maxKey = value;
    }
  }
  return maxKey;
}
