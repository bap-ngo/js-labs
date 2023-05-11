// for....i
// export function hasAlice(studentList) {
//   if (studentList.length === 0 || !Array.isArray(studentList)) return false;
//   for (let i = 0; i < studentList.length; i++) {
//     const student = studentList[i];
//     if (isAlice(student)) return true;
//   }
//   return false;
// }

//forEach
// export function hasAlice(studentList) {
//   if (studentList.length === 0 || !Array.isArray(studentList)) return false;
//   let flagAlice = false;
//   studentList.forEach((student) => {
//     if (isAlice(student)) flagAlice = true;
//   });
//   return flagAlice;
// }

//find
// export function hasAlice(studentList) {
//   if (studentList.length === 0 || !Array.isArray(studentList)) return false;
//   return studentList.find(isAlice) !== undefined;
// }

//findIndex
// export function hasAlice(studentList) {
//   if (studentList.length === 0 || !Array.isArray(studentList)) return false;
//   return studentList.findIndex(isAlice) !== -1;
// }

//filter
export function hasAlice(studentList) {
  if (studentList.length === 0 || !Array.isArray(studentList)) return false;
  return studentList.filter(isAlice).length > 0;
}

function isAlice(student) {
  if (!student) return false;
  if (student.gender === 'female' && student.name.toLowerCase() === 'alice') return true;
  return false;
}
