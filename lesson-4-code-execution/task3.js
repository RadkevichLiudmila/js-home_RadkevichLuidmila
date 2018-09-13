'use strict'

var arr = [];

while (true) {
  var value =  prompt('Введите любое число', 0);
  if (value  === null ||  isNaN(value) === true || value === '') {
    break;
  }
  arr.push(+value);
}

var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
alert(sum);

