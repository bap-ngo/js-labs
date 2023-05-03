function createArrayInRangeV1(a, b) {
  // your code here
  if (a <= -100 || a >= 100 || b <= -100 || b >= 100) return [];
  const arr = [];
  //const lengthOfArr = b - a + 1;
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(createArrayInRangeV1(1, 5));

// using Array.from()
function createArrayInRangeV2(a, b) {
  // your code here
  if (a <= -100 || a >= 100 || b <= -100 || b >= 100) return [];
  const length = b - a + 1;
  return Array.from({ length }, (v, i) => a++);
}

console.log(createArrayInRangeV2(-2, 3));

const foo = 123;
const obj = { foo }; // tương đương với { foo: foo }
console.log(obj); // { foo: 123 }

console.log(Math.sqrt(12));

console.log(Array.from({ length: Math.sqrt(12) }, (_, i) => i + 1));
