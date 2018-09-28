'use strict';
function Question(quest, ans, corAns) {
  this.question = quest;
  this.answerShow =  function () {
    var a = '';
    for (var key  in ans) {
      a +=  key + ' - '  + ans[key] + '\n';
    }
    return a;
  };
  this.answer = this.answerShow();
  this.correctAnswer  = corAns;
}

Question.prototype.show = function (quest) {
  var rand = Math.floor(Math.random() * quest.length);
  console.log((rand + 1)  + '. ' + quest[rand].question + '\n' + quest[rand].answer);
  var inputResponse = prompt('Введите номер ответа', '');
  // в задаче было написано для проверки правильного ответа сделать отдельный метод, поэтому сделала отдельную функцию
  return function () {
    if (+inputResponse === quest[rand].correctAnswer) {
      console.log('Совершенно верно!');
    } else {
      console.log('Не верно! Правильный ответ - ' + quest[rand].correctAnswer);
    }
  };
};

var q1 = new Question('Сколько на Земле материков начинаются на букву «А»?', {1: '3 материка', 2: '4 материка', 3: '5 материков', 4: '6 материков'}, 3);
var q2 = new Question('Сколько глаз у обыкновенной мухи?',  {1: '4 глаза', 2: '5 глаз', 3: '6 глаз', 4: '8 глаз'}, 2);
var q3 = new Question('Сколько полей-квадратиков на шахматной доске?', {1: '32 квадрата', 2: '36 квадратов', 3: '64 квадрата', 4: '72 квадрата'}, 3);
var q4 = new Question('Сколько продолжался полет Ю. Гагарина?', {1: '42 мин', 2: '1 ч 12 мин', 3: '2 ч 15  мин', 4: '1 ч 48  мин'}, 2);

var question = [];
question.push(q1, q2, q3, q4);

Question.prototype.show(question)();

