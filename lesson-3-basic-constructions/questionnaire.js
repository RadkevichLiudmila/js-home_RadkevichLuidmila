var lastName = prompt('Ваша фамилия?', '');
do {
  if (!!lastName === true && lastName !== ' ') {
    break;
  }
  lastName = prompt('Вы ввели некоректные данные! \n' +
      'Ваша фамилия?', '');
} while (true);


var firstName = prompt('Ваше имя?', '');
do {
  if (!!firstName === true && firstName !== ' ') {
    break;
  }
  firstName = prompt('Вы ввели некоректные данные! \n' +
      'Ваше имя?', '');
} while (true);


var patronymic = prompt('Ваше отчество?', '');
do {
  if (!!patronymic === true && patronymic !== ' ') {
    break;
  }
  patronymic = prompt('Вы ввели некоректные данные! \n' +
      'Ваше отчество?', '');
} while (true);


var age = parseInt(prompt('Сколько вам лет?', ''), 10);
do {
  if (!!age === true)  {
    break;
  }
  age = parseInt(prompt('Вы ввели некоректные данные! \n' +
      'Сколько вам лет?', ''), 10);
} while (true);

var gender = confirm('Вы мужчина?') ? 'мужской' : 'женский';

var pension = 'нет';
if ((gender === 'мужской' && age >= 60) || (gender === 'женский' && age >= 55)) {
  pension = 'да';
}

alert('ваше ФИО: '  + lastName +  ' ' + firstName + ' ' + patronymic + '\n' +
    'ваш возраст в годах: ' + age  + '\n' +
    'ваш возраст в днях: ' + age * 365  + '\n' +
    'через 5 лет вам будет: '  + (age + 5)  + '\n' +
    'ваш пол: ' + gender + '\n' +
    'вы на пенсии: ' + pension);


