'use strict';
function isPal(str) {
  function itemsDelete(item) {
    return item !== ' ' && item !== ',' && item !== '!' && item !== '?' && item !== '-';
  }

  var strOrigin = str.toLowerCase().split('').filter(itemsDelete).join('');
  var strReverse = str.toLowerCase().split('').reverse().filter(itemsDelete).join('');

  if (strOrigin === strReverse) {
    return true;
  }
  return false;
}

module.exports = isPal;