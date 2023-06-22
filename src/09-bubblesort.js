// sort
// const numberList = [40, 50, 5, 2, 1, 3];
// console.log(numberList.sort((a, b) => a - b));

function bubbleSort(arr) {
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

// const numberList = [40, 50, 5, 2, 3, 1];
// console.log(bubleSort(numberList));

function bubbleSort(numberList) {
  let left = 0;
  let right = numberList.length - 1;
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (numberList[i] > numberList[i + 1]) {
        swap(numberList, i, i + 1);
      }
    }
    right--;
  }
  return numberList;
}

function swap(numberList, a, b) {
  const temp = numberList[a];
  numberList[a] = numberList[b];
  numberList[b] = temp;
}

// Ví dụ sử dụng:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log('Mảng trước khi sắp xếp: ' + array);
const sortedArray = bubbleSort(array);
console.log('Mảng sau khi sắp xếp: ' + sortedArray);
