//Random [0, n]
function randomV(n) {
  return Math.round(Math.random() * n);
}
console.log(randomV(3));
console.log(randomV(3));

//Random in range
//min = a
function randomInRange(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}

console.log(randomInRange(10, 12));
console.log(randomInRange(10, 12));
console.log(randomInRange(10, 12));
console.log(randomInRange(10, 12));
console.log(randomInRange(10, 12));

const obj = {};
console.log(Boolean(obj));
