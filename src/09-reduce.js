// const numberList = [1, 2, 3, 4, 5, 6];
// console.log(numberList.reduce((sum, number) => sum + number));
// console.log(numberList.reduce((sum, number) => sum + number, 1));
// console.log(numberList.reduce((sum, number) => sum + number, 2));

// reduce
function reduce(arr, callBackFn, initialValue) {
  if (!Array.isArray(arr)) throw new Error('Must have array');
  if (typeof callBackFn !== 'function') throw new Error('Must have function');
  const haveInitial = typeof initialValue === 'number' && !isNaN(initialValue);
  if (arr.length === 0) {
    if (haveInitial) return initialValue;
    else throw new Error('Must have initialValue to return value');
  }
  if (initialValue !== undefined && !haveInitial)
    throw new Error('Must be number or dont have initial');
  let accumulator = haveInitial ? initialValue : arr[0];
  const start = haveInitial ? 0 : 1;
  for (let index = start; index < arr.length; index++) {
    accumulator = callBackFn(accumulator, arr[index]);
  }
  return accumulator;
}

//console.log(reduce([], 'a', 1));
//console.log(reduce([], (sum, x) => sum + x));
//console.log(reduce([1, 2, 3, 4, 5, 6], (sum, x) => sum + x));
console.log(reduce([1, 2, 3, 4, 5, 6], (sum, x) => sum + x, 1));
