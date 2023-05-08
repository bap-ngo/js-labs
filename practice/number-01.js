// export function isIncreasingNumber(n) {
//   if (n < 10) return false;
//   let nextDigit = 10;
//   while (n / 10) {
//     const digit = n % 10;
//     if (digit >= nextDigit) return false;
//     nextDigit = digit;
//     n = Math.trunc(n / 10);
//   }
//   return true;
// }

export function isIncreasingNumber(n) {
  if (n < 10) return false;
  n = n.toString();
  for (let i = 1; i < n.length; i++) {
    if (n[i] <= n[i - 1]) return false;
  }
  return true;
}
