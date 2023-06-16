import toClassifyStudentV3 from '../src/05-09-classify-student';

describe('Test function toClassifyStudentV3()', () => {
  test('should return Invalid mark when mark<0', () => {
    expect(toClassifyStudentV3(-1)).toBe('Invalid mark');
  });

  test('should return Invalid mark when mark>10', () => {
    expect(toClassifyStudentV3(11)).toBe('Invalid mark');
  });

  test('should return Excellence when mark in [9-10]', () => {
    expect(toClassifyStudentV3(9)).toBe('Excellence');
    expect(toClassifyStudentV3(10)).toBe('Excellence');
  });

  test('should return Good when mark in [7-8]', () => {
    expect(toClassifyStudentV3(7)).toBe('Good');
    expect(toClassifyStudentV3(8)).toBe('Good');
  });

  test('should return Not Good when mark in [4,6]', () => {
    [4, 5, 6].forEach((mark) =>
      expect(toClassifyStudentV3(mark)).toBe('Not Good')
    );
  });

  test('should return Bad when mark in [1,3]', () => {
    [1, 2, 3].forEach((mark) => expect(toClassifyStudentV3(mark)).toBe('Bad'));
  });
});
