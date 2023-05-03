function isSymmetricNumber(n) {
  // your code here
  if (n <= 0 || n > 999 || typeof n !== 'number' || n.toString().length > 3) return false;
  let temp = n;
  let reversed = 0;
  if (temp < 10) return true;
  while (temp) {
    const digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.trunc(temp / 10);
  }
  return reversed === n;
}
