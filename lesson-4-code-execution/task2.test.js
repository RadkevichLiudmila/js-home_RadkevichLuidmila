const multiplyNumeric = require('./task2');
describe('Test for task 2', () => {
  it('width: 100, height: 400, title: \'Cool image\'', () => {
    var image = {width: 100, height: 400, title: 'Cool image' };
    expect(multiplyNumeric(image)).toEqual({ width: 200, height: 800, title: 'Cool image'});
  });
  it(' a: 5, b: 3, c: 45, d: 0 ', () => {
    var image = { a: 5, b: 3, c: 45, d: 0 };
    expect(multiplyNumeric(image)).toEqual( { a: 10, b: 6, c: 90, d: 0 });
  });
  it('a: true, b: \'\', c: -8, d: false', () => {
    var image = { a: true, b: '', c: -8, d: false };
    expect(multiplyNumeric(image)).toEqual( { a: true, b: '', c: -16, d: false });
  });
  it('пустой {}', () => {
    var image = {};
    expect(multiplyNumeric(image)).toEqual( {});
  });
});