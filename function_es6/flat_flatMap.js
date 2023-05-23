// const arr = [1, [2, [3, 4]], [5, 6]];
// const flatArr = arr.flat(2);
// console.log(flatArr);

function flat(arr, depth = 1) {
  if (depth === 0) return arr;
  let result = []; // [1,5,6]
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      const nestedArray = flat(element, depth - 1); //[2,3,4]
      result.push(...nestedArray);
    } else result.push(element);
  }
  return result;
}

const array = [1, [5, 6], [2, [3, 4]]];
console.log(flat(array, 2));

// function flat(array, depth = 1) {
//   const flattenedArray = []; //[1,5,6] [2,]

//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i]) && depth > 0) {
//       const nestedArray = flat(array[i], depth - 1); //
//       flattenedArray.push(...nestedArray);
//     } else {
//       flattenedArray.push(array[i]);
//     }
//   }

//   return flattenedArray;
// }
