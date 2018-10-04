'use strict';

function considersMax(obj) {
  var max = 0;
  var maxName = '';

  //ищем мах значение
  for (var key in obj) {
    max = Math.max(max, obj[key]);
  }

  //ищем  имя с мах значением, если их несколько вернем 'No max'
  for (var key in obj) {
    if (max === obj[key]) {
      if (maxName === '') {
        maxName = key;
      } else {
        return 'No max';
      }
    }
  }
  return maxName;
}

module.exports = considersMax;