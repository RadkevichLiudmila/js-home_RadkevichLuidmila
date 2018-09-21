const billEndCalc = require('./task1-v1');

describe('Test calculator bills + tips - file test1-v1', () => {
  it('Tips John and his family from really bills', () => {
    var billBeginner = [124, 48, 268, 180, 42];
    expect(billEndCalc(billBeginner)).toEqual([142.6, 57.6, 294.8, 207, 50.4]);
  });
  it('Tips John and his family, if bill <= 50 ', () => {
    var billBeginnerArr = [3, 10, 26, 34.5, 50];
    expect(billEndCalc(billBeginnerArr)).toEqual([3.6, 12, 31.2, 41.4, 60]);
  });
  it('Tips John and his family, if bill > 50 and  <= 200 ', () => {
    var billBeginnerArr = [50.5, 78, 120, 178.25, 200];
    expect(billEndCalc(billBeginnerArr)).toEqual([58.07, 89.7, 138, 204.99, 230]);
  });
  it('Tips John and his family, if bill > 200', () => {
    var billBeginnerArr = [234, 260, 299, 355.25, 400];
    expect(billEndCalc(billBeginnerArr)).toEqual([257.4, 286, 328.9, 390.77, 440]);
  });
});