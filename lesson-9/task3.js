'use strict';
function anClean(arr) {

  function modified(element) {
    return element.toLowerCase().split('').sort().join('');
  }

  function lookForRepeat(element, index, array) {
    var value = element;
    if (array.indexOf(value, index + 1) !== -1) {
      return 'repeat';
    }
    return element;
  }

  function elementDelete(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i] === 'repeat') {
        delete arr1[i];
      }
    }
    return arr1;
  }

  var arrModified = arr.map(modified).map(lookForRepeat);
  elementDelete(arr, arrModified);
  return arr.filter(elementDelete);
}

module.exports = anClean;