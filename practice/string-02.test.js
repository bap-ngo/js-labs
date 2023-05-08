import { statisticWords } from './string-02';

describe('Test function statisticWords(str)', () => {
  it('should return empty object when str is empty', () => {
    expect(statisticWords('')).toEqual({});
  });

  it("should return correct statistic when str does'n have redundant spaces", () => {
    expect(statisticWords('easy frontend easy')).toEqual({
      easy: 2,
      frontend: 1,
    });
  });

  it('should return correct statistic when str have redundant spaces', () => {
    expect(statisticWords('easy      frontend is      very      easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      very: 1,
    });
  });
});
