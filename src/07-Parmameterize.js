//Write a Javascript function to parameterize a string
//Eg: Code JS Is Fun ->  code-js-is-fun

function parameterize(str) {
  if (!str) return '';
  //return str.toLowerCase().replaceAll(' ', '-');
  return str.toLowerCase().split(' ').join('-');
}

console.log(parameterize('Code JS Is Fun'));
