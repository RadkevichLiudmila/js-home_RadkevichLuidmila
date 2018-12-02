var isPal = require('./task2');

describe('File test2.js', () => {
  it('Сhecks the string \'Anna\' for a polindrom', () => {
    expect(isPal('Anna')).toBe(true);
  });
  it('Сhecks the string \'А роза упала на лапу Азора\' for a polindrom', () => {
    expect(isPal('А роза упала на лапу Азора')).toBe(true);
  });
  it('Сhecks the string \'Вася\' for a polindrom', () => {
    expect(isPal('\'Вася\'')).toBe(false);
  });
  it('Сhecks the string \'12321\' for a polindrom', () => {
    expect(isPal('12321')).toBe(true);
  });
  it('Сhecks the string \'123212\' for a polindrom', () => {
    expect(isPal('123212')).toBe(false);
  });
  it('Сhecks the string \'Иди, Сеня, не сиди!\' for a polindrom', () => {
    expect(isPal('Иди, Сеня, не сиди!')).toBe(true);
  });
  it('Сhecks the string \'А щи - пища?\' for a polindrom', () => {
    expect(isPal('А щи - пища?')).toBe(true);
  });
});