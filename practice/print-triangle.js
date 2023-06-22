// In tam giác rỗng
function printTriangle() {
  const n = parseInt(prompt('Type high of triangle: '));
  for (let i = 1; i <= n; i++) {
    let result = '';
    if (i === 1) {
      for (let i = 1; i <= 2 * n - 1; i++) {
        if (i < n || i > n) result += '  ';
        else result += '* ';
      }
    } else if (i === n) {
      for (let i = 1; i <= 2 * n - 1; i++) {
        result += '* ';
      }
    } else {
      for (let j = 1; j <= 2 * n - 1; j++) {
        if (j === n - (i - 1) || j === n + (i - 1)) result += '* ';
        else result += '  ';
      }
    }
    console.log(result);
  }
  return n;
}

console.log('High of triangle:', printTriangle());
