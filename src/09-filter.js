// Filter
// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.filter(x => x%2===0)); // [ 2, 4, 6, 8, 10 ]

function fiter(arr, callBackFn) {
  if (!Array.isArray(arr)) return [];
  if (typeof callBackFn !== 'function') throw new Error('Must a function');
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBackFn(arr[i])) newArray.push(arr[i]);
  }
  return newArray;
}

console.log(fiter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x % 2 === 0));

function isEven(number) {
  if (!(typeof number === 'number' && !isNaN(number))) return false;
  if (number % 2 === 0) return true;
  return false;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter(isEven));
