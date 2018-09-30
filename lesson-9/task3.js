'use strict';
function anClean(arr) {
  var arrModified = arr.map(modified);

  function modified(element) {
    return element.toLowerCase().split('').sort().join('');
  }
  for (var i = 0; i  < arrModified.length; i++) {
    var value = arrModified[i];
    if (arrModified.indexOf(value, i + 1) !== -1) {
      arrModified[i] = 'repeat';
    }
  }
  for (i = 0; i  < arr.length; i++) {
    if (arrModified[i] ===  'repeat') {
      delete arr[i];
    }
  }
  function elementDelete(element) {
    return element !== '';
  }
  return arr.filter(elementDelete);
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log(anClean(arr));

module.exports = anClean;