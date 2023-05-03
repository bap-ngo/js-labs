// sort
// const numberList = [40, 50, 5, 2, 1, 3];
// console.log(numberList.sort((a, b) => a - b));

function bubleSort(arr) {
  if (!Array.isArray(arr)) return new Error('Not an array');
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numberList = [40, 50, 5, 2, 3, 1];
console.log(bubleSort(numberList));
