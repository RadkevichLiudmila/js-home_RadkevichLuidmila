'use strict';
function isPal(str) {
  function itemsDelete(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === ' ' || arr[i] === ',' || arr[i] === '-' || arr[i] === '!' || arr[i] === '?') {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }

  var strOrigin = str.toLowerCase().split('');
  itemsDelete(strOrigin);
  strOrigin =  strOrigin.join('');

  var strReverse = str.toLowerCase().split('');
  itemsDelete(strReverse);
  strReverse =  strReverse.reverse().join('');

  if (strOrigin === strReverse) {
    return true;
  }
  return false;
}

module.exports = isPal;