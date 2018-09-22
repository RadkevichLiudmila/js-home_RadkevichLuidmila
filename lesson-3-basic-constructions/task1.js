var str  = prompt( 'Введите предложение русскими буквами', '');

function calculatorLetters(line) {
  if (line === '' || !line) {
    return 'Вы ничего не ввели!';
  } else {
    line = line.toLowerCase();
  }
  var sum = 0;
  var vowels = ['а', 'о', 'и', 'е', 'ё', 'у', 'э', 'ы', 'я', 'ю'];
  for (var i = 0; i < line.length; i++) {
    if (vowels.indexOf(line.charAt(i)) >= 0) {
      sum++;
    }
  }
  return 'В строке: "' +  line + '" ' + sum + ' русских гласных.';
}

alert(calculatorLetters(str));
