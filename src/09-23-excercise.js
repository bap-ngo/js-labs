//v1

function calcAvgOfAllEvenNumbers(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return 0;
  if (numberList.length === 0) return 0;
  let countOfEven = 0;
  const sum = numberList.reduce((sumOfEven, value) => {
    if (isEvenPositive(value)) {
      countOfEven++;
      return sumOfEven + value;
    } else return sumOfEven;
  }, 0);
  if (countOfEven === 0) return 0;
  return Math.round(sum / countOfEven);
}

function isEvenPositive(number) {
  if (number <= 0 || typeof number !== 'number') return false;
  if (number % 2 === 0) return true;
  return false;
}

//v2
function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  let count = 0;
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    if (element % 2 === 0) {
      count++;
      sum += element;
    }
  }
  if (count === 0) return 0;
  return Math.round(sum / count);
}

//v3
function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  const evenNumberList = numberList.filter((value) => value % 2 === 0);
  const count = evenNumberList.length;
  const sum = evenNumberList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  if (count === 0) return 0;
  return Math.round(sum / count);
}
