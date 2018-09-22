const multiplyNumeric = require('./task2');
describe('Test for task 2', () => {
  it('Real size image * 2', () => {
    var image = {width: 100, height: 400, title: 'Cool image' };
    expect(multiplyNumeric(image)).toEqual({ width: 200, height: 800, title: 'Cool image'});
  });
  it('Fictitious size image * 2', () => {
    var image = {width: 244, height: 650, title: 'Cool image'};
    expect(multiplyNumeric(image)).toEqual( {width: 488, height: 1300, title: 'Cool image'});
  });
  it('String size image * 2', () => {
    var image = {width: true, height: '', title: 'Cool image'};
    expect(multiplyNumeric(image)).toEqual( {width: true, height: '', title: 'Cool image'});
  });
  it('Empty size image * 2', () => {
    var image = {};
    expect(multiplyNumeric(image)).toEqual( {});
  });
});