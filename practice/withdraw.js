// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
  // your code here
  if (amount % BASE_UNIT !== 0) return 'Invalid balance';
  const total =
    K500_VALUE * K500_QUANTITY +
    K200_VALUE * K200_QUANTITY +
    K100_VALUE * K100_QUANTITY +
    K50_VALUE * K50_QUANTITY;
  if (amount > total) return 'Insufficient balance from ATM';
  let remaining = amount;
  const k500 =
    amount > K500_QUANTITY * K500_VALUE
      ? K500_QUANTITY
      : Math.trunc(remaining / K500_VALUE);
  remaining = remaining - k500 * K500_VALUE;
  const k200 =
    amount > K200_VALUE * K200_QUANTITY
      ? K200_QUANTITY
      : Math.trunc(remaining / K200_VALUE);
  remaining = remaining - k200 * K200_VALUE;
  console.log(remaining);
  const k100 =
    amount > K100_VALUE * K100_QUANTITY
      ? K100_QUANTITY
      : Math.trunc(remaining / K100_VALUE);
  remaining = remaining - k100 * K100_VALUE;
  console.log(remaining);
  const k50 = Math.trunc(remaining / K50_VALUE);
  console.log(k50);
  return { k500, k200, k100, k50 };
}
console.log(withdraw(750000));

function chunkArray(array, size) {
  // your code here ...
  const chunks = Math.round(array.length / size);
  if (!Array.isArray(array) || size <= 0 || array.length === 0) return [];
  if (chunks > 20) throw new Error('Too many chunks');
  let newArr = [];
  let start = 0;
  let end = size;
  for (let i = 0; i < chunks; i++) {
    newArr.push(array.slice(start, end));
    start = end;
    end += size;
  }
  return newArr;
}
console.log(chunkArray([2, 3, 4], 2));
