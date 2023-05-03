function isPrime(number) {
  if (!(typeof number === 'number' && !isNaN(number))) return false;
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

//  for...i
function hasPrimeV1(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  for (const value of numberList) {
    if (isPrime(value)) return true;
  }
  return false;
}

//  forEach
function hasPrimeV2(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  let hasPrime = false;
  numberList.forEach((value) => {
    if (isPrime(value)) hasPrime = true;
  });
  return hasPrime;
}

//  find
function hasPrimeV3(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  return numberList.find(isPrime) !== undefined;
}

//  findIndex
function hasPrimeV4(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  return numberList.findIndex(isPrime) !== -1;
}

//  some
function hasPrimeV5(numberList) {
  // your code here
  if (!Array.isArray(numberList)) return false;
  return numberList.some(isPrime);
}
