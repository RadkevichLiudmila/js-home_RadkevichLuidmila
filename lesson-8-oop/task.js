'use strict';
(function () {
  function Question(quest, ans, corAns) {
    this.question = quest;
    this.answer = ans;
    this.correctAnswer  = corAns;
  }

  Question.prototype.show = function (quest) {
    console.log((quest + 1)  + '. ' + this.question);
    var a = '';
    for (var key  in this.answer) {
      a +=  key + ' - '  + this.answer[key] + '\n';
    }
    console.log(a);
  };
  Question.prototype.checkAnswer = function (ans) {
    if (+ans === this.correctAnswer) {
      console.log('Совершенно верно!');
    } else {
      console.log('Не верно!');
    }
  };
  var q1 = new Question('Сколько на Земле материков начинаются на букву «А»?', {1: '3 материка', 2: '4 материка', 3: '5 материков', 4: '6 материков'}, 3);
  var q2 = new Question('Сколько глаз у обыкновенной мухи?',  {1: '4 глаза', 2: '5 глаз', 3: '6 глаз', 4: '8 глаз'}, 2);
  var q3 = new Question('Сколько полей-квадратиков на шахматной доске?', {1: '32 квадрата', 2: '36 квадратов', 3: '64 квадрата', 4: '72 квадрата'}, 3);
  var q4 = new Question('Сколько продолжался полет Ю. Гагарина?', {1: '42 мин', 2: '1 ч 12 мин', 3: '2 ч 15  мин', 4: '1 ч 48  мин'}, 2);

  var question = [q1, q2, q3, q4];

  var rand = Math.floor(Math.random() * question.length);
  question[rand].show(rand);

  var inputResponse = prompt('Введите номер ответа', '');
  question[rand].checkAnswer(inputResponse);
})();

