'use strict';
var question = [];
var answer = [];
var correctAnswer = [];

function Question(quest, ans, corAns) {
  this.question = question.push(quest);
  this.answerShow =  function () {
    var a = '';
    for (var key  in ans) {
      a +=  key + ' - '  + ans[key] + '\n';
    }
    return a;
  };
  this.answer = answer.push(this.answerShow());
  this.correctAnswer  = correctAnswer.push(corAns);
}

Question.prototype.show = function () {
  var rand = Math.floor(Math.random() * question.length);
  console.log((rand + 1)  + '. ' + question[rand] + '\n' + answer[rand]);
  var inputResponse = prompt('Введите номер ответа', '');
  return +inputResponse === correctAnswer[rand];
};

Question.prototype.result = function () {
  var info = Question.prototype.show() ? 'Совершенно верно!' : 'Не верно!';
  console.log(info);
}

var q1 = new Question('Сколько на Земле материков начинаются на букву «А»?', {1: '3 материка', 2: '4 материка', 3: '5 материков', 4: '6 материков'}, 3);
var q2 = new Question('Сколько глаз у обыкновенной мухи?',  {1: '4 глаза', 2: '5 глаз', 3: '6 глаз', 4: '8 глаз'}, 2);
var q3 = new Question('Сколько полей-квадратиков на шахматной доске?', {1: '32 квадрата', 2: '36 квадратов', 3: '64 квадрата', 4: '72 квадрата'}, 3);
var q4 = new Question('Сколько продолжался полет Ю. Гагарина?', {1: '42 мин', 2: '1 ч 12 мин', 3: '2 ч 15  мин', 4: '1 ч 48  мин'}, 2);

Question.prototype.result();


