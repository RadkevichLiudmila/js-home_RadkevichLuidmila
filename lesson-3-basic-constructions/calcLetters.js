var str  = prompt( 'Введите предложение русскими буквами', '');
var summa = 0;
if (str != null && str != undefined && str != '' && str !=NaN){
  function calculatorLetters(str, letter) {
    var sum = 0;
    var  pos = str.indexOf(letter);
    while (pos !== -1) {
      sum++;
      pos = str.indexOf(letter, pos + 1);
    }
    return sum;
  }
  summa += calculatorLetters(str.toLowerCase(), 'а');
  summa += calculatorLetters(str.toLowerCase(), 'о');
  summa += calculatorLetters(str.toLowerCase(), 'и');
  summa += calculatorLetters(str.toLowerCase(), 'е');
  summa += calculatorLetters(str.toLowerCase(), 'ё');
  summa += calculatorLetters(str.toLowerCase(), 'у');
  summa += calculatorLetters(str.toLowerCase(), 'э');
  summa += calculatorLetters(str.toLowerCase(), 'ы');
  summa += calculatorLetters(str.toLowerCase(), 'я');
  summa += calculatorLetters(str.toLowerCase(), 'ю');

  alert('В строке: "' +  str + '" ' + summa + ' русских гласных.');
} else {
  alert('Вы ничего не ввели!');
}
