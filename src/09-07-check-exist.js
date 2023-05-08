//v1
export function checkIfAllEvenV1(numberList) {
  let isValid = true;
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 1) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

// console.log(checkIfAllEvenV1([6, 2, 8, 4]));

//v2
export function checkIfAllEvenV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;
  for (const number of numberList) {
    if (number % 2 !== 0) return false;
  }
  return true;
}

// console.log(checkIfAllEvenV2([6, 2, 8, 4]));
// console.log(checkIfAllEvenV2([6, 1, 8, 4]));
