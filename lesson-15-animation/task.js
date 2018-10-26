'use strict';

const fieldWidth = 600; // ширина игрового поля
const fieldHeight = 320; // высота игрового поля
const sizeBall = 30; // размер шарика
const racketWidth = parseInt(fieldWidth / 40); // ширина ракетки
const racketHeight = parseInt(fieldHeight / 3); // высота ракетки

document.getElementsByTagName('body')[0].id = 'body';
let body = document.getElementById('body');
body.appendChild(createContainer());

function createContainer() {
  let container = document.createElement('div');
  container.appendChild(createButton());
  container.appendChild(createGoal());
  container.appendChild(createPlayingField());
  return container;
}

function createButton() {
  let button = document.createElement('input');
  button.id = 'button';
  button.type = 'button';
  button.value = 'Старт!';
  return button;
}

function createGoal() {
  let goal = document.createElement('p');
  goal.id = 'goal';
  goal.textContent = '0:0';
  return goal;
}

function createPlayingField() {
  let playingField = document.createElement('div');
  playingField.id = 'playingField';
  playingField.appendChild(createBall());
  playingField.appendChild(createRacketOne());
  playingField.appendChild(createRacketTwo());
  return playingField;
}

function createBall() {
  let ball = document.createElement('div');
  ball.id = 'ball';
  return ball;
}

function createRacketOne() {
  let racketOne = document.createElement('div');
  racketOne.id = 'racket1';
  return racketOne;
}

function createRacketTwo() {
  let racketTwo = document.createElement('div');
  racketTwo.id = 'racket2';
  return racketTwo;
}

//-----------------------------------------------------------
let field = {
  Width: fieldWidth,
  Height: fieldHeight,

  Update: function () {
    let playingField = document.getElementById('playingField');
    playingField.style.width = this.Width + 'px';
    playingField.style.height = this.Height + 'px';
  }
}

let goal = {
  player1: 0,
  player2: 0,
  Update: function () {
    let goal = document.getElementById('goal');
    goal.textContent = this.player1 + ':' + this.player2;
  }
}

function DescriptionOfObject(Width, Height, PosX, PosY, SpeedX, SpeedY, Id) {
  this.PosX = PosX;
  this.PosY = PosY;
  this.Width = Width;
  this.Height = Height;
  this.SpeedX = SpeedX;
  this.SpeedY = SpeedY;
  this.Update = function () {
    let Obj = document.getElementById(Id);
    Obj.style.width = this.Width + 'px';
    Obj.style.height = this.Height + 'px';
    Obj.style.left = this.PosX + 'px';
    Obj.style.top = this.PosY + 'px';
    Obj.style.transform = 'translateZ(0)';
  }
}
 
let ball = new DescriptionOfObject(sizeBall, sizeBall, fieldWidth / 2 - sizeBall / 2, fieldHeight / 2 - sizeBall / 2, 0, 0, 'ball'); 
let racket1 = new DescriptionOfObject(racketWidth, racketHeight, 0, fieldHeight / 2 - racketHeight / 2, 0, 0, 'racket1');
let racket2 = new DescriptionOfObject(racketWidth, racketHeight, fieldWidth - racketWidth, fieldHeight / 2 - racketHeight / 2, 0, 0, 'racket2');

function Tick() {
  
  ball.PosX += ball.SpeedX;
  // проверка, отбился ли мячик от левой ракетки
  if ((ball.PosX < racket1.Width) &&
    (ball.PosY - ball.Height / 2 > racket1.PosY) &&
    (ball.PosY + ball.Height / 2 < racket1.PosY + racket1.Height)){
    ball.SpeedX = -ball.SpeedX;
    ball.PosX = racket1.Width;
  } else if (ball.PosX < 0) { // ограничение слева
    ball.SpeedX = 0;
    ball.SpeedY = 0;
    ball.PosX = 0;
    goal.player2++;
    goal.Update();
  }

  // проверка, отбился ли мячик от правой ракетки
  if ((ball.PosX + ball.Width > field.Width - racket2.Width) &&
    (ball.PosY - ball.Height / 2 > racket2.PosY) &&
    (ball.PosY + ball.Height / 2 < racket2.PosY + racket2.Height)){
    ball.SpeedX = -ball.SpeedX;
    ball.PosX = field.Width - ball.Width - racket2.Width;
  } else if (ball.PosX + ball.Width > field.Width) { // ограничение справа
    ball.SpeedX = 0;
    ball.SpeedY = 0;
    ball.PosX = field.Width - ball.Width;
    goal.player1++;
    goal.Update();
  }

  ball.PosY += ball.SpeedY;
  // ограничение сверху
  if (ball.PosY < 0) {
    ball.SpeedY = -ball.SpeedY;
    ball.PosY = 0;
  }
  // ограничение снизу
  if (ball.PosY + ball.Height > field.Height) {
    ball.SpeedY = -ball.SpeedY;
    ball.PosY = field.Height - ball.Height;
  }

   // движение левой ракетки + ограничение сверху и снизу
  racket1.PosY += racket1.SpeedY;
  if (racket1.PosY < 0) {
    racket1.SpeedY = 0;
    racket1.PosY = 0;
  }
  if (racket1.PosY + racket1.Height >  field.Height) {
    racket1.SpeedY = 0;
    racket1.PosY = field.Height - racket1.Height;
  }
  // движение правой ракетки + ограничение сверху и снизу
  racket2.PosY += racket2.SpeedY;
  if (racket2.PosY < 0) {
    racket2.SpeedY = 0;
    racket2.PosY = 0;
  }
  if (racket2.PosY + racket2.Height >  field.Height) {
    racket2.SpeedY = 0;
    racket2.PosY = field.Height - racket2.Height;
  }
  // проверяем может кто-то уже выиграл
  if (goal.player1 === 10 || goal.player2 === 10) {
    if (goal.player1 > goal.player2) {
      goal.player1 = 'Выиграл!';
      goal.player2 = 'Проиграл(';
    } else {
      goal.player1 = 'Проиграл(';
      goal.player2 = 'Выиграл!';
    }
    goal.Update();
    goal.player1 = 0;
    goal.player2 = 0;
  }
  ball.Update();
  racket1.Update('racket1');
  racket2.Update('racket2');
}

function rasketMove(EO) {
  let event = EO || window.event;

  if (event.keyCode == 16){
    racket1.SpeedY = -10;
  }
  if (event.keyCode == 17){
    racket1.SpeedY = 10;
  }
  if (event.keyCode == 38){
    racket2.SpeedY = -10;
  }
  if (event.keyCode == 40){
    racket2.SpeedY = 10;
  }
}

function rasketStop(EO) {
  let event = EO || window.event;

  if (event.keyCode === 16 || event.keyCode === 17) {
    racket1.SpeedY = 0;
  }
  if (event.keyCode === 38 || event.keyCode === 40) {
    racket2.SpeedY = 0;
  }
}

document.getElementById('button').addEventListener('click', function () {
  ball.PosX = fieldWidth / 2 - sizeBall / 2;
  ball.PosY = fieldHeight / 2 - sizeBall / 2;
  attachedSpeed();
  goal.Update();
});

function attachedSpeed() {
  ball.SpeedX = calcSpeedX();
  ball.SpeedY = Math.random() * 30 - 15;
}

// считаем ускорение для мячика по X. Диапозон от -25 до + 25. исключаем промежуток -15 - +15 
//т к, если скорость по Х будет меньше скорости по Y (скорость по Y -15 - +15), 
//то мячик будет лететь больше вверх/вниз, а нам надо вправо/влево. 
//Тем более, если скорость по Х будет стремиться к 0, то мячик будет двигаться очень медленно. Заодно исключаем и это.
function calcSpeedX() {
  let x = (Math.random() * 50) - 25;
  if (x > -15 &&  x < 0) {
    x = -15;
  } else if (x >= 0 &&  x < 15) {
    x = 15;
  }
  return x;
}

field.Update();
ball.Update();
racket1.Update();
racket2.Update();
setInterval(Tick, 40);
window.addEventListener('keydown', rasketMove, false);
window.addEventListener('keyup', rasketStop, false);