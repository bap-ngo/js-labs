function findSecret(code) {
  // your code here
  if (!code) return '';
  let result = '';
  let i = 0;
  while (i < code.length - 1) {
    if (code[i] !== code[i].toUpperCase()) {
      result += code[i];
    }
    i++;
  }
  return result;
}
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));
