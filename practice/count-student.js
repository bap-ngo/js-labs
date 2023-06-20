function countStudents(studentList) {
  // your code here
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  return studentList.filter((student) => student.gender === 'male').length;
}
