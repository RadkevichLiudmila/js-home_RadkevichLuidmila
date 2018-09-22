'use strict';

var arr = [];

do {
  var value =  prompt('Введите любое число', 0);
  if (typeof (parseInt(value, 10)) === 'number') {
    arr.push(parseInt(value, 10));
  }
} while (!isNaN(parseInt(value, 10)) );

arr.pop();

var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
if (arr.length > 0) {
  alert('Сумма всех введенных чисел: ' + sum);
} else {
  alert('Вы не ввели ни одного числа');
}


