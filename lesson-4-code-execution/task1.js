'use strict'

function considersMax(obj) {
  var max = 0;
  var maxName = '';
  var index  = 0;

  for (var key in obj) {
    max = Math.max(max, obj[key]);
    index++;
  }
  // ищем всех  сотрудников, у кого мах значение   и записываем  в  строку
  for (var key in obj) {
    if (max === obj[key]) {
      maxName = maxName + key + ', ';
    }
  }
  // обрезаем последнюю запятую с пробелом
  maxName = maxName.substr(0, maxName.length - 2);

  if (maxName.split(', ').length === index) {
    return 'No max';
  }
  return maxName;
}

module.exports = considersMax;