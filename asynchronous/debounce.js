import debounce from 'lodash.debounce';
function log() {
  console.log('Kho vai cai lol');
}

// function debounce(callBack, wait) {
//   let id;
//   return function () {
//     if (id) clearTimeout(id);
//     id = setTimeout(log, wait);
//   };
// }

const debounceLog = debounce(log, 500);

debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
