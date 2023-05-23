//Write a function to classify student
//Init mark, If mark>8 -> Excellence
//If 7<=mark<=8 -> Good
//If 4<=mark<7 -> Not good
//If mark<4 -> Bad

//v1
function toClassifyStudentV1(mark) {
  let res;
  if (mark < 0 || mark > 10) return 'Invalid mark';
  if (mark > 8) res = 'Excellence';
  else if (mark >= 7) res = 'Good';
  else if (mark >= 4) res = 'Not Good';
  else res = 'Bad';
  return res;
}

// console.log(toClassifyStudent(11));
// console.log(toClassifyStudent(-1));
// console.log(toClassifyStudent(9));
// console.log(toClassifyStudent(8));
// console.log(toClassifyStudent(6));
// console.log(toClassifyStudent(3));
// console.log(toClassifyStudent('a'));

//v2

function toClassifyStudentV2(mark) {
  let res = 'Bad';
  if (mark < 0 || mark > 10) return 'Invalid';
  if (mark > 8) res = 'Excellence';
  else if (mark >= 7) res = 'Good';
  else if (mark >= 4) res = 'Not Good';
  return res;
}

// console.log(toClassifyStudent(11));
// console.log(toClassifyStudent(-1));
// console.log(toClassifyStudent(9));
// console.log(toClassifyStudent(8));
// console.log(toClassifyStudent(6));
// console.log(toClassifyStudent(3));
// console.log(toClassifyStudent('a'));

//v3
function toClassifyStudentV3(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark';
  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';
  return 'Bad';
}

// console.log(toClassifyStudent(11));
// console.log(toClassifyStudent(-1));
// console.log(toClassifyStudent(9));
// console.log(toClassifyStudent(8));
// console.log(toClassifyStudent(6));
// console.log(toClassifyStudent(3));
// console.log(toClassifyStudent('a'));
export default toClassifyStudentV3;
