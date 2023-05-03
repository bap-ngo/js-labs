//Every even number
function checkAllEven(arr) {
  if (!Array.isArray(arr)) return false;
  for (const value of arr) {
    if (value % 2 !== 0) return false;
  }
  return true;
}

const numberList1 = [2, 1, 6];
const numberList2 = '';
console.log(checkAllEven(numberList1));
console.log(checkAllEven(numberList2));

//Some even number
function checkSomeEven(arr) {
  if (!Array.isArray(arr)) return false;
  for (const value of arr) {
    if (value % 2 === 0) return true;
  }
  return false;
}

console.log(checkSomeEven(''));
console.log(checkSomeEven([1, 2, 1]));
console.log(checkSomeEven([1, 1, 1]));

//indexOf() -> return index if condition is true, else return -1;
function findIndexOf(arr, value) {
  if (!Array.isArray) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(findIndexOf('', 1));
console.log(findIndexOf([2, 2, 1], 3));
console.log(findIndexOf([2, 2, 1], 1));
console.log(findIndexOf([2, 2, 1], 2));

//lastIndexOf
function findLastIndexOf(arr, value) {
  if (!Array.isArray(arr) || typeof value !== 'number') return -1;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) index = i;
  }
  return index;
}

console.log(findLastIndexOf([2, 1, 3, 2, 4, 5], 2)); // 3
console.log(findLastIndexOf([2, 1, 3, 6, 4, 5], 2)); // 0
console.log(findLastIndexOf([''], 1));


