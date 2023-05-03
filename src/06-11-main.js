//Write a function to get the one of number having three digits

function extractTheOne(n) {
  if (typeof n !== 'number' || n.toString().length !== 3) return -1;
  return n % 10;
}

console.log(extractTheOne('123'));
console.log(extractTheOne('1234'));
console.log(extractTheOne(1234));
console.log(extractTheOne(461));

//Write a function to get the ten of number having three digits
function extractTheTen(n) {
  if (n.toString.length !== 3 || typeof n !== 'number') return -1;
  return Math.trunc(n / 10) % 10;
}
console.log(extractTheTen('123'));
console.log(extractTheTen('1234'));
console.log(extractTheTen(1234));
console.log(extractTheTen(469));

//Sum

function sumDigit(number) {
  let sum = 0;
  while (number / 10) {
    sum += number % 10;
    number = Math.trunc(number / 10);
  }
  return sum;
}
console.log(sumDigit(7897));

function isSymmetricNumber(n) {
  // your code here
  if (n <= 0 || n > 999 || typeof n !== 'number' || n.toString().length > 3) return -1;
  let temp = n;
  let reversed = 0;
  if (n < 10) return true;
  while (temp) {
    const digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.trunc(temp / 10);
  }
  return reversed === n;
}
console.log(isSymmetricNumber(0));
