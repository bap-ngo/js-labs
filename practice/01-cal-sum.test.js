// S(n) = 1 + 2 + 3 + .... + n
//n<=0 ---> sum = 0
//n>0 ---> sum 1->n

import { calculateS1, calculateS2 } from './01-cal-sum';

describe('calculateS1', () => {
  it('should return 0 if n<=0', () => {
    expect(calculateS1(-1)).toBe(0);
    expect(calculateS1(0)).toBe(0);
  });

  it('should return sum of 1 to n when n>0', () => {
    expect(calculateS1(1)).toBe(1);
    expect(calculateS1(3)).toBe(6);
    expect(calculateS1(4)).toBe(10);
    expect(calculateS1(10)).toBe(55);
    expect(calculateS1(11)).toBe(66);
  });
});

describe('calculateS2', () => {
  it('should return 0 if n<=0', () => {
    expect(calculateS2(-1)).toBe(0);
    expect(calculateS2(0)).toBe(0);
  });

  it('should return sum of 1 to n when n>0', () => {
    expect(calculateS2(1)).toBe(1);
    expect(calculateS2(3)).toBe(6);
    expect(calculateS2(4)).toBe(10);
    expect(calculateS2(10)).toBe(55);
    expect(calculateS2(11)).toBe(66);
  });
});
