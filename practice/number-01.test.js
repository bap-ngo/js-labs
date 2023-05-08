import { isIncreasingNumber } from './number-01';

describe('Test function isIncreasingNumber(n)', () => {
  it('should return false when n<10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((number) =>
      expect(isIncreasingNumber(number)).toBe(false)
    );
  });

  it('should return false when n is not an increasing number ', () => {
    [231, 132, 222, 111, 4563].forEach((number) => expect(isIncreasingNumber(number)).toBe(false));
  });

  it('should return true when n is an increasing number', () => {
    [123, 345, 678, 234, 456].forEach((number) => expect(isIncreasingNumber(number)).toBe(true));
  });
});
