'use strict';
function isPal(str) {
  function elementDelete(element) {
    return element !== ' ' && element !== ',' && element !== '!' && element !== '?' && element !== '-';
  }

  var strOrigin = str.toLowerCase().split('').filter(elementDelete).join('');
  var strReverse = str.toLowerCase().split('').reverse().filter(elementDelete).join('');

  if (strOrigin === strReverse) {
    return true;
  }
  return false;
}

module.exports = isPal;