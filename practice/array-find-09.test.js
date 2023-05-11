import { findStudentById } from './array-find-09';
describe('findStudentById(studentList, studentId)', () => {
  it('should return -1 when studentList is empty or not an array', () => {
    expect(findStudentById([])).toBe(-1);
    expect(findStudentById({}, 1)).toBe(-1);
    expect(findStudentById('', 2)).toBe(-1);
  });
  it('should return -1 when studentList does not have studentId', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 2, name: 'Alex', gender: 'male' },
    ];
    expect(findStudentById(studentList, 4)).toBe(-1);
    expect(findStudentById(studentList, 3)).toBe(-1);
    expect(findStudentById(studentList, -1)).toBe(-1);
  });
  it('should return correct index if studentList has studentId', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 2, name: 'Alex', gender: 'male' },
    ];
    expect(findStudentById(studentList, 1)).toBe(0);
    expect(findStudentById(studentList, 2)).toBe(1);
  });
});
