import { hasAlice } from './array-check-07';
describe('test function hasAlice(studentList)', () => {
  it('should return false if studentList is not an array or its empty', () => {
    expect(hasAlice([])).toBe(false);
    expect(hasAlice({})).toBe(false);
  });

  it("should return false if array doesn't have Alice", () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'female' },
      { id: 1, name: 'ALiCe', gender: 'male' },
    ];
    expect(hasAlice(studentList)).toBe(false);
  });

  it('should return true if array have Alice', () => {
    const studentList = [
      { id: 1, name: 'Bob', gender: 'male' },
      { id: 1, name: 'Alice', gender: 'female' },
    ];
    expect(hasAlice(studentList)).toBe(true);
  });
});
