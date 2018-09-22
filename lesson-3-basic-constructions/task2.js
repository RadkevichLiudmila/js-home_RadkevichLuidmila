var lastName = prompt('Ваша фамилия?', '');
while (!lastName) {
  lastName = prompt('Вы ввели некоректные данные! \n' +
      'Ваша фамилия?', '');
};

var firstName = prompt('Ваше имя?', '');
while (!firstName) {
  firstName = prompt('Вы ввели некоректные данные! \n' +
      'Ваше имя?', '');
};

var patronymic = prompt('Ваше отчество?', '');
while (!patronymic) {
  patronymic = prompt('Вы ввели некоректные данные! \n' +
      'Ваше отчество?', '');
};

var age = parseInt(prompt('Сколько вам лет?', ''), 10);
while (!age) {
  age = parseInt(prompt('Вы ввели некоректные данные! \n' +
      'Сколько вам лет?', ''), 10);
};

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


