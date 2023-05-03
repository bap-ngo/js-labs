//Logical operator
//If its positive number, then
function checkNumber1(n) {
  return n > 0;
}
//If its even positive number and greater than 10
function checkNumber2(n) {
  return n > 0 && n % 2 === 0 && n > 10;
}
//If its even positive number, divisible by 5 and greater than 10
function checkNumber3(n) {
  return n > 0 && n % 2 === 0 && n > 10;
}
//If its even positive number or odd negative number
function checkNumber4(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;

  return isOddNegative || isEvenPositive;
}

console.log(checkNumber1(1));
console.log(checkNumber1(-1));
console.log(checkNumber2(20));
console.log(checkNumber2(19));
console.log(checkNumber2(8));
console.log(checkNumber3(5));
console.log(checkNumber3(20));
console.log(checkNumber3(-1));
console.log(checkNumber4(10));
console.log(checkNumber4(-3));
