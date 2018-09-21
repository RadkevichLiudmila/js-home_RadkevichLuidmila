const billJohn.tipCalc = require('./task1');
const billJohn.billEndCalc = require('./task1');

describe('Test calculator tips - file test1', () => {
  it('Tips John and his family from really bills', () => {
    expect(billJohn.tipCalc().toEqual([18.6, 9.6, 26.8, 27, 8.4]);
  });
});
describe('Test calculator bills + tips - file test1', () => {
  it('Tips John and his family from really bills', () => {
    expect(billJohn.billEndCalc()).toEqual([142.6, 57.6, 294.8, 207, 50.4]);
  });
});