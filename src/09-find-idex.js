// Find Index

//v1
function findEven(numberList) {
  let index = -1;
  if (!Array.isArray(numberList)) return -1;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(findEven([1, 3, 4, 2, 5]));
console.log(findEven([1, 3, 1, 1, 5]));
console.log(findEven(1));

//v2
function findEven(numberList) {
  if (!Array.isArray(numberList)) return -1;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      return i;
    }
  }
  return -1;
}

console.log(findEven([1, 8, 4, 2, 5]));
console.log(findEven(1));
console.log(findEven([1, 3, 1, 1, 5]));

//v3
function findIndex(numberList, callBackFn) {
  if (!Array.isArray(numberList)) return -1;
  for (let i = 0; i < numberList.length; i++) {
    if (callBackFn(numberList[i])) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 3, 2, 4, 5], (x) => x % 2 === 0)); //2
console.log(findIndex([1, 3, 2, 4, 5], (x) => x > 3)); //3
console.log(findIndex('a', (x) => x > 3)); //-1
console.log(findIndex([1, 3, 2, 4, 5], (x) => x > 6)); //-1

const ojblist = [
  { c: 1, d: 2, e: 3 },
  { c: 4, d: 5, e: 6 },
];

ojblist.forEach(({ c, d, e }) => {
  //console.log(x);
  console.log('c:', c);
  console.log('d:', d);
  console.log('e:', e);
});

// const ojblist2 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// ojblist2.forEach(([a, b, c]) => {
//   console.log('%d %d %d', a, b, c);
// });
