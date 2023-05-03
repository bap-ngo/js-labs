function isPerfectNumber(n) {
  // your code here
  if (n <= 1 || n >= 1000) return false;
  const divisiorList = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      divisiorList.push(i);
      if (i !== n / i) divisiorList.push(n / i);
    }
  }
  divisiorList.sort((a, b) => a - b).pop();
  return n === divisiorList.reduce((sum, number) => sum + number);
}

//v2
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}

//v3
function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == -0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}

console.log(isPerfectNumber(8));
