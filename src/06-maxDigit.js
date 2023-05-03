function getMaxDigit(n) {
  // your code here
  if (n < 0 || n >= 1000 || typeof n !== 'number') return -1;
  let max = 0;
  while (n / 10) {
    let digit = n % 10;
    if (digit > max) max = digit;
    n = Math.trunc(n / 10);
  }
  return max;
}

console.log(getMaxDigit(13));
console.log(getMaxDigit(7));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));

