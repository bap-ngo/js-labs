export function calculateS1(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

export function calculateS2(n) {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
}
