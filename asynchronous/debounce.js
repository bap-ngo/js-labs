const debounce = require('lodash.debounce');

const debounceLog = debounce(() => console.log('Kho vai cai lol'), 3000);

debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();

// import debounce from 'lodash.debounce';
// function log() {
//   console.log('Kho vai cai lol');
// }

// // function debounce(callBack, wait) {
// //   let id;
// //   return function () {
// //     if (id) clearTimeout(id);
// //     id = setTimeout(log, wait);
// //   };
// // }

// const debounceLog = debounce(log, 10000);

// debounceLog();
// debounceLog();
// debounceLog();
// debounceLog();
// debounceLog();
// debounceLog();

// let a = 1;
// const b = ++a + ++a;
// console.log(a);
// console.log(b);
