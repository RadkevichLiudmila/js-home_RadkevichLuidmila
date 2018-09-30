var anClean = require('./task3');

describe('File test3.js', () => {
  it('Cleans the array from annograms, leaves only one last word from the pair. Option 1', () => {
    expect(anClean(['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'])).toEqual(['ЗОВ', 'гробик', 'сектор']);
  });
  it('Cleans the array from annograms, leaves only one last word from the pair. Option 2', () => {
    expect(anClean(['колба', 'карта', 'игры', 'карат', 'блок', 'бокал', 'катар'])).toEqual(['игры', 'блок', 'бокал', 'катар']);
  });
  it('Cleans the array from annograms, leaves only one last word from the pair. Option 3', () => {
    expect(anClean(['монета', 'немота', 'Отмена', 'клоун', 'колун', 'уклон', 'кулон'])).toEqual(['Отмена', 'кулон']);
  });
  it('Checks an empty array. Returns an empty array.', () => {
    expect(anClean([])).toEqual([]);
  });

});