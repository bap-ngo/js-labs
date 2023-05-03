// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  if (numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectNumber(numberList[i])) return false;
  }
  return true;
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  if (numberList.length === 0) return false;
  return (
    numberList.length ===
    numberList.reduce((sum, value) => (isPerfectNumber(value) ? ++sum : sum), 0)
  );
}

// every
function isAllPerfectNumbersV3(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  if (numberList.length === 0) return false;
  return numberList.every(isPerfectNumber);
}

function isPerfectNumber(number) {
  if (!(!isNaN(number) && typeof number === 'number') || number < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      sum += i;
      if (i !== number / i) sum += number / i;
    }
  }
  return number === sum;
}
