'use strict'

var arr = [];

do{
  var value =  prompt('Введите любое число', 0);
  if (isNaN(parseInt(value, 10)) !== true) {
    arr.push(parseInt(value, 10));
  }
}while (isNaN(parseInt(value, 10)) === true)

var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
alert(sum);

