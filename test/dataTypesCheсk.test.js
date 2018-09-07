describe('Number Check', () => {
  it('6 + 3 = 9 - toBe', () => {
    expect(6 + 3).toBe(9);
  })
  it('891 - 90 = 801 - toBe', () => {
    expect(891 - 90).toBe(801);
  })
  it('0 *  8 = 0 - toBe', () => {
    expect(0 * 8).toBe(0);
  })
  it('10 / 2 = 5  - toBe', () => {
    expect(10 / 2).toBe(5);
  })
  it('str / 2 = NaN - toBe', () => {
    expect('str' / 2).toBe(NaN);
  })
  it('1 / 0 = Infinity - toBe', () => {
    expect(1 / 0).toBe(Infinity);
  })
  it('0 / 2 = 0 - toBe', () => {
    expect(0 / 2).toBe(0);
  })
  it('0 * 7 = 0 - toEqual', () => {
    expect(0 * 7).toEqual(0);
  })
  it('5 - 3 != 3 - not.toBe', () => {
    expect(5 - 3).not.toBe(3);
  })
  it('100 / 2 != 51 - not.toBe', () => {
    expect(100 / 2).not.toBe(51);
  })
  it('2 * 4 > 7 - toBeGreaterThan', () => {
    expect(2 * 4).toBeGreaterThan(7);
  })
  it('0.0001 * 1 > 0 - toBeGreaterThanOrEqual', () => {
    expect(0.0001 * 1).toBeGreaterThanOrEqual(0);
  })
  it('100 / 17 > 5 - toBeGreaterThanOrEqual', () => {
    expect(100 / 17).toBeGreaterThanOrEqual(5);
  })
  it('4 - 2 < 3 - toBeLessThan', () => {
    expect(4 - 2).toBeLessThan(3);
  })
  it('0.5 - 0.2 < 0.31 - toBeLessThanOrEqual', () => {
    expect(0.5 - 0.2).toBeLessThanOrEqual(0.31);
  })
  it('100 / 17.1 < 6 - toBeLessThanOrEqual', () => {
    expect(100 / 17.1).toBeLessThanOrEqual(6);
  })
  it('0 / 2 != undefined - toBeDefined', () => {
    expect(0 / 2).toBeDefined();
  })
  it('str * 1 != undefined - toBeDefined', () => {
    expect('str' * 1).toBeDefined();
  })
  it('4 - 2 < 3 - toBeTruthy', () => {
    expect(4 - 2 < 3).toBeTruthy();
  })
  it('1 && 2 - toBeTruthy', () => {
    expect(1 && 2).toBeTruthy();
  })
  it('1 || 2 - toBeTruthy', () => {
    expect(1 || 2).toBeTruthy();
  })
  it('1 && 0 - toBeFalsy', () => {
    expect(1 && 0).toBeFalsy();
  })
  it('0 || null - toBeFalsy', () => {
    expect(0 || null).toBeFalsy();
  })
  it('isFinite(NaN) - toBeFalsy', () => {
    expect(isFinite(NaN)).toBeFalsy();
  })
  it('isNaN(Number(\'\')) - toBeFalsy', () => {
    expect(isNaN(Number(''))).toBeFalsy();
  })
  it('isNaN(parseInt(\'\')) - toBeTruthy', () => {
    expect(isNaN(parseInt(''))).toBeTruthy();
  })
  it('parsrInt(\'5$\') - toBe', () => {
    expect(parseInt('5$')).toBe(5);
  })
  it('parseFloat(\'5.2$\') > 5.1 - toBeGreaterThanOrEqual', () => {
    expect(parseFloat('5.2$')).toBeGreaterThanOrEqual(5.1);
  })
  it('Math.floor(\'5.2\').toBeCloseTo(5.1) - toBeCloseTo', () => {
    expect(Math.floor('5.2')).toBeCloseTo(5);
  })
  it('1.23456.toFixed(2) < 1.23456  - toBeLessThanOrEqual', () => {
    const a = +(1.23456).toFixed(2);
    expect(a).toBeLessThanOrEqual(1.23456);
  })
});
describe('String Check', () => {
  it('butter + fly = butterfly - toBe', () => {
    expect('butter' + 'fly').toBe('butterfly');
  })
  it('a > A - true toBeTruthy', () => {
    expect('a' > 'A').toBeTruthy();
  })
  it('"0" - tru, т к не пустая строка toBeTruthy', () => {
    expect('0').toBeTruthy();
  })
  it('Строка с пробелом - не пустая строка  toBeTruthy', () => {
    expect(' ').toBeTruthy();
  })
  it('Пустая строка = false  toBeFalsy', () => {
    expect('').toBeFalsy();
  })
  it('е > ё - false toBeFalsy', () => {
    expect('е' > 'ё').toBeFalsy();
  })
  it('in the butterfly is but - toMatch', () => {
    expect('butterfly').toMatch(/but/);
  })
  it('in the butterfly there is no play - toMatch', () => {
    expect('butterfly').not.toMatch(/play/);
  })
  it('String(2) + String(5) - not.toMatch(/7/)', () => {
    expect(String(2) + String(5)).not.toMatch(/7/);
  })
  it('butterfly.length  > 10 - toBeLessThan', () => {
    expect('butterfly'.length).toBeLessThan(10);
  })
  it('butterfly.charAt(1) != b - not.toBe', () => {
    expect('butterfly'.charAt(1)).not.toBe('b');
  })
  it('butterfly.toUpperCase < butterfly - toBeTruthy', () => {
    let a = 'butterfly'.toUpperCase();
    expect(a < 'butterfly').toBeTruthy();
  })
  it('butterfly[0].toUpperCase == BU - toBeTruthy', () => {
    let a = 'butterfly'[0].toUpperCase();
    expect(a === 'B').toBeTruthy();
  })
  it('мухобойка.slice(0,4) + мор = мухомор - toMatch', () => {
    const c = 'мухобойка'.slice(0, 4) + 'мор';
    expect(c).toMatch(/мухомор/);
  })
});
describe('Boolean Check', () => {
  it('Boolean(1) - toBeTruthy', () => {
    expect(Boolean(1)).toBeTruthy();
  })
  it('Boolean(undefined) - toBeDefined', () => {
    expect(Boolean(undefined)).toBeDefined();
  })
  it('!0 - toBeTruthy', () => {
    expect(!0).toBeTruthy();
  })
  it('!!0 - not.toBeTruthy', () => {
    expect(!!0).not.toBeTruthy();
  })
  it(' a = true || false - toBeTruthy', () => {
    const a = true || false;
    expect(a).toBeTruthy();
  })
  it(' a = true && false - false toBe', () => {
    const a = true && false;
    expect(a).toBe(false);
  })
  it(' a = 0  || 0.1 - вернет 0.1 toBe', () => {
    const a = 0 || 0.1;
    expect(a).toBe(0.1);
  })
  it(' a = 0 && 0.1 - toBeFalsy', () => {
    const a = 0 && 0.1;
    expect(a).toBeFalsy();
  })
  it(' NaN === NaN - toBe(false)', () => {
    expect(NaN === NaN).toBe(false);
  })
  it(' NaN || undefined - toBeUndefined()', () => {
    const a = NaN || undefined;
    expect(a).toBeUndefined();
  })
  it('isNaN(\'\') - toBeFalsy', () => {
    expect(isNaN('')).toBeFalsy();
  })
  it('isNaN(0/0) - toBeTruthy', () => {
    expect(isNaN(0/0)).toBeTruthy();
  })
});
describe('Null Check', () => {
  it('Null = 0 - toBeFalsy', () => {
    expect(null == 0).toBeFalsy();
  })
  it('Null >= 0 - true toBe', () => {
    expect(null >= 0).toBe(true);
  })
  it('a = null || 1 вернет 1 toBe', () => {
    const a = null || 1;
    expect(a).toBe(1);
  })
  it('a = null && 1, Boolean(a) toBeFalsy', () => {
    const a = null && 1;
    expect(Boolean(a)).toBeFalsy();
  })
  it('a = null || 0, Boolean(a) toBeFalsy', () => {
    const a = null || 0;
    expect(Boolean(a)).toBeFalsy();
  })
  it('a = null || undefined, toBeUndefined', () => {
    const a = null || undefined;
    expect(a).toBeUndefined();
  })
});
describe('Undefined Check', () => {
  it('undefined - false - toBeFalsy', () => {
    expect(undefined).toBeFalsy();
  })
  it('undefined -  toBeUndefined', () => {
    expect(undefined).toBeUndefined();
  })
  it('undefined not Null -  toBeNull', () => {
    expect(undefined).not.toBeNull();
  })
  it('"" + undefined = undefined - toBe', () => {
    const a = '';
    expect(a + undefined).toBe('undefined');
  })
  it('1 + undefined = NaN - toBe', () => {
    const a = 1;
    expect(a + undefined).toBe(NaN);
  })
  it('a = undefined || NaN - toBeFalsy', () => {
    const a = undefined || NaN;
    expect(a).toBeFalsy();
  })
});
describe('Object Check', () => {
  it('{user: \'Ivan\', age: 28, admin: true }', () => {
    const a = { user: 'Ivan', age: 28 };
    a['admin'] = true;
    expect(a).toEqual({user: 'Ivan', age: 28, admin: true });
  })
  it('is there a lesson in physics', () => {
    const lesson = ['mathematics', 'physics', 'biology', 'literature'];
    expect(lesson).toContain('physics');
  })
  it('object a = b, change b => change a', () => {
    const a = {user: 'Ivan', age: 28, admin: true };
    const b = a;
    b.admin = false;
    expect(a).not.toEqual({user: 'Ivan', age: 28, admin: true });
  })
  it('delete flowers[1] = toBeUndefined', () => {
    const flowers = ['rose', 'chamomile', 'tulip'];
    delete flowers[1];
    expect(flowers[1]).toBeUndefined();
  })
  it('extend flowers: flowers.lenght === 4 - toBe(true)', () => {
    const flowers = ['rose', 'chamomile', 'tulip'];
    flowers.splice(2, 0, 'grass');
    expect(flowers.length === 4).toBe(true);
  })
  it('seeking true in arr, if not value < 0 - toBeLessThan', () => {
    const arr = [1, false, 0, -1];
    const value = arr.indexOf(true);
    expect(value).toBeLessThan(0);
  })
  it('change - to +', () => {
    const arr = [1, 2, 0, -1, -6, -3];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0) arr[i] = -arr[i];
    }
    expect(arr).toEqual([1, 2, 0, 1, 6, 3]);
  })
});
