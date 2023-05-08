import { checkIfAllEvenV1, checkIfAllEvenV2 } from '../src/09-07-check-exist';

describe('Test function checkIfAllEvenV1()', () => {
  test('should return false if not an array', () => {
    expect(checkIfAllEvenV1(0)).toBe(false);
    expect(checkIfAllEvenV1(1)).toBe(false);
    expect(checkIfAllEvenV1({})).toBe(false);
    expect(checkIfAllEvenV1(null)).toBe(false);
    expect(checkIfAllEvenV1(undefined)).toBe(false);
    expect(checkIfAllEvenV1(NaN)).toBe(false);
    expect(checkIfAllEvenV1('abc')).toBe(false);
    expect(checkIfAllEvenV1('')).toBe(false);
    expect(checkIfAllEvenV1(false)).toBe(false);
    expect(checkIfAllEvenV1(0n)).toBe(false);
  });

  test('should return false if array is emty', () => {
    expect(checkIfAllEvenV1([])).toBe(false);
  });

  test('should return false if array has not even number', () => {
    expect(checkIfAllEvenV1([1, 3, 5, 7, 9])).toBe(false);
  });

  test('should return false if array has some even number', () => {
    expect(checkIfAllEvenV1([1, 2, 3, 4, 5, 6])).toBe(false);
  });

  test('should return true if array have all even number', () => {
    expect(checkIfAllEvenV1([2, 4, 6, 8, 10])).toBe(true);
  });
});

describe('Test function checkIfAllEvenV2()', () => {
  test('should return false if not an array', () => {
    expect(checkIfAllEvenV2(0)).toBe(false);
    expect(checkIfAllEvenV2(1)).toBe(false);
    expect(checkIfAllEvenV2({})).toBe(false);
    expect(checkIfAllEvenV2(null)).toBe(false);
    expect(checkIfAllEvenV2(undefined)).toBe(false);
    expect(checkIfAllEvenV2(NaN)).toBe(false);
    expect(checkIfAllEvenV2('abc')).toBe(false);
    expect(checkIfAllEvenV2('')).toBe(false);
    expect(checkIfAllEvenV2(false)).toBe(false);
    expect(checkIfAllEvenV2(0n)).toBe(false);
  });

  test('should return false if array is emty', () => {
    expect(checkIfAllEvenV2([])).toBe(false);
  });

  test('should return false if array has not even number', () => {
    expect(checkIfAllEvenV2([1, 3, 5, 7, 9])).toBe(false);
  });

  test('should return false if array has some even number', () => {
    expect(checkIfAllEvenV2([1, 2, 3, 4, 5, 6])).toBe(false);
  });

  test('should return true if array have all even number', () => {
    expect(checkIfAllEvenV2([2, 4, 6, 8, 10])).toBe(true);
  });
});
