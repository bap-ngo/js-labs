//Array excercises
//Print number : 1->10
//Print even numbers
//Print even number but less than n

//Print number : 1->10
function printOneToTen() {
  for (let i = 0; i < 10; i++) console.log(i + 1);
}
printOneToTen();

// //Print even numbers
// function printEven(arr) {
//   arr.forEach((element) => {
//     if (element % 2 === 0) {
//       console.log(element);
//     }
//   });
// }

// function printEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) console.log(arr[i]);
//   }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// printEven(arr);

function printEven(arr) {
  arr.forEach((element) => {
    if (element % 2 === 0) console.log(element);
  });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
printEven(arr);
