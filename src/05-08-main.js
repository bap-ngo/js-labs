//Write a function to check even positive number
//If correct return true, otherwise return false

//v1
function isEvenPositiveNumber(n) {
  let isVailid;
  if (n > 0 && n % 2 === 0) isVailid = true;
  else isVailid = false;
  return isVailid;
}

console.log(isEvenPositiveNumber(8));
console.log(isEvenPositiveNumber(7));
console.log(isEvenPositiveNumber(-1));
console.log(isEvenPositiveNumber('null'));

//v2
function isEvenPositiveNumber(n) {
  let isVailid = false;
  if (n > 0 && n % 2 === 0) isVailid = true;
  return isVailid;
}

console.log(isEvenPositiveNumber(8));
console.log(isEvenPositiveNumber(7));
console.log(isEvenPositiveNumber(-1));
console.log(isEvenPositiveNumber('null'));

//v3
function isEvenPositiveNumber(n) {
  if (n > 0 && n % 2 === 0) return true;
  return false;
}

console.log(isEvenPositiveNumber(8));
console.log(isEvenPositiveNumber(7));
console.log(isEvenPositiveNumber(-1));
console.log(isEvenPositiveNumber('null'));

//v4 (Best choice)

function isEvenPositiveNumber(n) {
  return n > 0 && n % 2 === 0;
}

console.log(isEvenPositiveNumber(8));
console.log(isEvenPositiveNumber(7));
console.log(isEvenPositiveNumber(-1));
console.log(isEvenPositiveNumber('null'));
