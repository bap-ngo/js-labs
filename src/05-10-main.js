//Write a function to classify student
//Init mark, If mark>8 -> Excellence
//If 7<=mark<=8 -> Good
//If 4<=mark<7 -> Not good
//If mark<4 -> Bad

//With pre-defined

function toClassifyStudent(mark) {
  let res = '';
  switch (mark) {
    case 0:
    case 1:
    case 2:
    case 3:
      res = 'Bad';
      break;
    case 4:
    case 5:
    case 6:
      res = 'Not Good';
      break;
    case 7:
    case 8:
      res = 'Good';
      break;
    case 9:
    case 10:
      res = 'Excellence';
      break;
    default:
      res = 'Invalid number~~';
  }
  return res;
}

console.log(toClassifyStudent(11));
console.log(toClassifyStudent(-1));
console.log(toClassifyStudent(9));
console.log(toClassifyStudent(7));
console.log(toClassifyStudent(6));
console.log(toClassifyStudent(3));
console.log(toClassifyStudent('a'));
