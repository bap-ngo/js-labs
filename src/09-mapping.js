//Map

function map(arr, callBack) {
  if (!Array.isArray(arr) || typeof callBack !== 'function') return undefined;
  //   const result = Array(arr.length).fill(0);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i]));
  }
  //   result.splice(0, arr.length);
  return newArr;
}

console.log(map([1, 2, 3], (number) => number * 2)); // [2,4,6]
console.log(map([1, 2, 3, 4], (number) => number * 2)); // [2,4,6,8]
console.log(map([1, 2, 3, 4], (number) => number + 2)); // [3,4,5,6]
console.log(map('[1, 2, 3, 4]', (number) => number + 2)); //undefined
console.log(map(['khang', 'ngo'], (x) => x.length)); // [5,3]
console.log(map(['khang', 'ngo'], (x) => `super ${x}`)); // [super khang, super ngo]
