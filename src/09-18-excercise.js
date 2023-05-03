// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  // your code here
  if (n < 1 || n > 1000) return [];
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  return arr;
}

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  // your code here
  if (n < 1 || n > 1000) return [];
  return Array.from({ length: n }, (_, i) => i + 1).filter((x) => n % x === 0);
}

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  // your code here
  if (n < 1 || n > 1000) return [];
  const result = [];
  const arr = Array.from({ length: Math.sqrt(n) }, (_, i) => i + 1);
  arr.forEach((value) => {
    if (n % value === 0) {
      result.push(value);
      if (value !== n / value) result.push(n / value);
    }
  });
  return result.sort((a, b) => a - b);
}

// const arr = [1, 3, 2, 5, 4];
// arr.sort((a, b) => a - b).pop();
// console.log(arr.reduce((sum,number) => sum +number));
