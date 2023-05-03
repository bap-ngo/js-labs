function print() {
  for (let i = 1; i <= 10; i++) console.log(i);
}
print();

function printEvent(arr) {
  arr.forEach((element) => {
    if (element % 2 === 0) console.log(element);
  });
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvent(arr);

function printEvent(n) {
  for (let index = 2; index < n; index += 2) {
    console.log(index);
  }
}

printEvent(100);
