var importData = require('./task1');

describe('File test1.js', () => {
  it('Tips John and his family from, if his bills 124, 48, 268, 180, 42', () => {
    expect(importData.exportJohn.tipCalc()).toEqual([18.6, 9.6, 26.8, 27, 8.4]);
  });
  it('Final bills John and his family, if his bills 124, 48, 268, 180, 42 and tips 142.6, 57.6, 294.8, 207, 50.4', () => {
    expect(importData.exportJohn.billEndCalc()).toEqual([142.6, 57.6, 294.8, 207, 50.4]);
  });
  it('Tips Mark and his family from, if his bills 77, 375, 110, 45', () => {
    expect(importData.exportMark.tipCalc()).toEqual([15.4, 93.75, 11, 9]);
  });
  it('Final bills Mark and his family, if his bills 77, 375, 110, 45 and tips 15.4, 93.75, 11, 9', () => {
    expect(importData.exportMark.billEndCalc()).toEqual([92.4, 468.75, 121, 54]);
  });
  it('Average value John\'s tips < average value Mark\'s tips, under the given conditions', () => {
    expect(importData.exportAverageValue(importData.exportJohn.tipCalc())).toBeLessThanOrEqual(importData.exportAverageValue(importData.exportMark.tipCalc()));
  });
});