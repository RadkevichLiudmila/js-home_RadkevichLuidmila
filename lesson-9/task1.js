(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function (ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
      return function (ansTrue) {
        ansTrue++;
        return ansTrue;
      };
    } else {
      console.log('Wrong answer. Try again :)');
      return function (ansTrue) {
        return ansTrue;
      };
    }
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);

  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

  var questions = [q1, q2, q3];
  var answerTrue = 0;

  function funcRepeat() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var ch = prompt('Please select the correct answer.');
    var answer = parseInt(ch, 10);

    answerTrue = questions[n].checkAnswer(answer)(answerTrue);

    return ch;
  }

  var chek = funcRepeat();

  while (chek !== 'exit') {
    chek = funcRepeat();
  }

  Question.prototype.showResult = (function (ansTrue) {
    if (ansTrue === 0)  {
      console.log('You answered incorrectly to all the questions');
    }  else if (ansTrue === 1) {
      console.log('You answered correctly to ' + ansTrue + ' question');
    } else {
      console.log('You answered correctly to ' + ansTrue + ' questions');
    }
  })(answerTrue);

})();
