'use strict';

const widthField = 500;
const heightField = 320;
const sizeBall = 20;

document.getElementsByTagName('body')[0].id = 'body';
let body = document.getElementById('body');
body.appendChild(createContainer());

function createContainer() {
  let container = document.createElement('div');
  container.appendChild(createButton());
  container.appendChild(createGoal(0, 0));
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
function createGoal(one, two) {
  let goal = document.createElement('p');
  goal.textContent = one + ':' + two;
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

let fieldSize = {
  Width: widthField,
  Height: heightField,

  Update: function () {
    let playingField = document.getElementById('playingField');
    playingField.style.width = this.Width + 'px';
    playingField.style.height = this.Height + 'px';
  }
}

let BallH =
    {
      PosX: widthField / 2 - sizeBall / 2,
      PosY: heightField / 2 - sizeBall / 2,
      SpeedX: function () {
        let x = (Math.random() * 50) - 25;
        if (x > -15 &&  x < 0) {
          x = -15;
        } else if (x >= 0 &&  x < 15) {
          x = 15;
        }
        this.SpeedX = x;
      },
      SpeedY: Math.random() * 30 - 15,
      Width: sizeBall,
      Height: sizeBall,

      Update: function () {
        let BallObj = document.getElementById('ball');
        BallObj.style.width = this.Width + 'px';
        BallObj.style.height = this.Height + 'px';
        BallObj.style.left = this.PosX + 'px';
        BallObj.style.top = this.PosY + 'px';
      }
    };
    let racket1 = {
      Width: parseInt(widthField / 50),
      Height: parseInt(heightField / 4),
      PosX: 0,
      PosY:  function () {
        this.PosY = heightField / 2 - this.Height / 2;
      },
      Speed: 10,
      Update: function () {
        let racketObj = document.getElementById('racket1');
        racketObj.style.width = this.Width + 'px';
        racketObj.style.height = this.Height + 'px';
        racketObj.style.left = this.PosX + "px";
        racketObj.style.top = this.PosY + "px";
        
      }
    }
    racket1.PosY();
    let racket2 = {
      Width: parseInt(widthField / 50),
      Height: parseInt(heightField / 4),
      PosX: function () {
        this.PosX = widthField - this.Width;
      },
      PosY: function () {
        this.PosY = heightField / 2 - this.Height / 2;
      },
      Speed: 10,
      Update: function () {
        let racketObj2 = document.getElementById('racket2');
        racketObj2.style.width = this.Width + 'px';
        racketObj2.style.height = this.Height + 'px';
        racketObj2.style.left = this.PosX + "px";
        racketObj2.style.top = this.PosY + "px";
      }
    }
    racket2.PosX();
    racket2.PosY();

  document.getElementById('button').addEventListener('click', function () {
  setInterval(Tick, 40);
  });

function Tick() {
  BallH.PosX += BallH.SpeedX;

  if (BallH.PosX + BallH.Width > fieldSize.Width) {
    BallH.SpeedX = -BallH.SpeedX;
    BallH.PosX = fieldSize.Width - BallH.Width;
  }
  if (BallH.PosX < 0) 
  {
    BallH.SpeedX = -BallH.SpeedX;
    BallH.PosX = 0;
  }
  BallH.PosY += BallH.SpeedY;

  if (BallH.PosY + BallH.Height > fieldSize.Height) {
    BallH.SpeedY = -BallH.SpeedY;
    BallH.PosY = fieldSize.Height - BallH.Height;
  }

  if (BallH.PosY < 0) {
    BallH.SpeedY = -BallH.SpeedY;
    BallH.PosY = 0;
  }

  BallH.Update();
}
fieldSize.Update();
BallH.Update();
BallH.SpeedX();
racket1.Update();
racket2.Update();

window.addEventListener('keydown', myEventHandler, false);


  function myEventHandler(EO) {
  let event = EO || window.event;
    if(event.keyCode == 16){
      if (racket1.PosY > 0) {
      racket1.PosY -= racket1.Speed;
      racket1.Update();
      }
       
    } else if(event.keyCode == 17){
      if (racket1.PosY + racket1.Height <  fieldSize.Height) {
      racket1.PosY += racket1.Speed;
      racket1.Update();
      }
  }
  if(event.keyCode == 38){
    if (racket2.PosY > 0) {
    racket2.PosY -= racket2.Speed;
    racket2.Update();
    }
} else if(event.keyCode == 40){
  if (racket2.PosY + racket2.Height <  fieldSize.Height) {
  racket2.PosY += racket2.Speed;
  racket2.Update();
  }
}
}

