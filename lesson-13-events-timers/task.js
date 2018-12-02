'use strict';

const sizeClock = 400; // размер часов, размер можно меныть, часы уменьшатся/увеличатся пропорционально
let marginClock; // внешние отступы, нужно для координат часов
const centrClock = sizeClock / 2; // центр часов
let hours; // число часа на данный момент
let minutes; // число минут на данный момент
let seconds; // число секунд на данный момент

document.getElementsByTagName('body')[0].id = 'body';
let bodyClock = document.getElementById('body');
bodyClock.style.margin = '0px';
bodyClock.style.padding = '0px';
bodyClock.appendChild(createClock());
//вызываем таймер
setInterval(goTime, 1000);

function createClock() {
  //-- основа для часов --
  let baseClock = document.createElement('div');
  baseClock.id = 'base_clock';
  baseClock.style.margin = '30px';
  baseClock.style.padding = '0px';
  baseClock.style.background = '#C0C0C0';
  baseClock.style.borderRadius = '50%';
  baseClock.style.width = Math.round(sizeClock) + 'px';
  baseClock.style.height = Math.round(sizeClock) + 'px';

  marginClock = parseInt(bodyClock.style.margin) + parseInt(bodyClock.style.padding)
  + parseInt(baseClock.style.margin) + parseInt(baseClock.style.padding); // общий отступ margin и padding

  baseClock.appendChild(addImageForBaseClock());
  baseClock.appendChild(createClockFace());
  baseClock.appendChild(createHandsClosk('hour', '#191970', 33, 4));
  baseClock.appendChild(createHandsClosk('minutes', '#191970', 50, 3));
  baseClock.appendChild(createHandsClosk('seconds', 'red', 200, 2.5));
  baseClock.appendChild(createDigitalWatch());
  return baseClock;
}

//-- фон часов - кот --
function addImageForBaseClock() {
  let imageForClock = document.createElement('img');
  imageForClock.src = './img/cat.jpg';
  imageForClock.style.width = sizeClock + 'px';
  imageForClock.style.height = sizeClock + 'px';
  imageForClock.style.borderRadius = '50%';
  return imageForClock;
}

// --  циферблат --
function createClockFace() {
  let clockFace = document.createDocumentFragment();
  for (let i = 1; i <= 12; i++) {
    clockFace.appendChild(createHourCircle(i));
  }
  return clockFace;
}

function createHourCircle(i) {
  let circle = document.createElement('div');
  circle.style.width = Math.round(sizeClock / 8) + 'px';
  circle.style.height = Math.round(sizeClock / 8) + 'px';
  circle.style.background = '#FFF0F5';
  circle.style.borderRadius = '50%';
  circle.style.position = 'absolute';
  circle.style.left = marginClock + centrClock - parseInt(circle.style.width) / 2 + 'px';
  circle.style.top = marginClock + centrClock - parseInt(circle.style.height) / 2 + 'px';

  circle.style.transform = 
    'rotate(' + (i * 30 + 270) + 'deg) translateX(' + 
    Math.round(sizeClock / 2.6) + 'px) rotate(' + (-i * 30 + 90) + 'deg)';
    circle.appendChild(createTextСircle(i));
  return circle;
}
function createTextСircle(i) {
  let textСircle = document.createElement('p');
  textСircle.style.fontSize = Math.round(sizeClock/13.3) + 'px';
  textСircle.style.fontWeight = 'bold';
  textСircle.style.color = '#191970';
  textСircle.style.margin = '0px';
  textСircle.style.fontSize = Math.round(sizeClock / 10) + 'px';
  textСircle.style.display = 'flex';
  textСircle.style.justifyContent = 'center';
  textСircle.textContent = i;
  return textСircle;
}

// -- создает стрелки часов --
function createHandsClosk(id, color,cX, cY) {
  let handsClosk = document.createElement('div');
  handsClosk.id = id;
  handsClosk.style.width = Math.round(sizeClock / cX) + 'px';
  handsClosk.style.height = Math.round(sizeClock / cY) + 'px';
  handsClosk.style.background = color;
  handsClosk.style.borderRadius = '20%';
  handsClosk.style.position = 'absolute';
  handsClosk.style.left = marginClock + centrClock - parseInt(handsClosk.style.width) + 'px';
  handsClosk.style.top = marginClock + centrClock - parseInt(handsClosk.style.height) + 'px';
  return handsClosk;
}

// -- электронные часы --
function createDigitalWatch() {
  let timer = document.createElement('div');
  timer.style.width = Math.round(sizeClock / 3.6) + 'px';
  timer.style.height = Math.round(sizeClock / 10) + 'px';
  timer.style.position = 'absolute';
  timer.style.left = marginClock + centrClock - parseInt(timer.style.width) / 2 + 'px';
  timer.style.top =  marginClock + centrClock / 2 - parseInt(timer.style.height) / 2 + 'px';
  timer.appendChild(createTextTimer());
  return timer;
}
function createTextTimer() {
  let textTimer = document.createElement('p');
  textTimer.id = 'timer';
  textTimer.style.fontSize = Math.round(sizeClock / 13.3) + 'px';
  textTimer.style.fontWeight = 'bold';
  textTimer.style.color = '#FFFAFA';
  textTimer.style.textShadow = '#000 1px 1px 0, #000 2px 2px 0';
  return textTimer;
}

// Logic
// берем время и разбиваем его на часы, минуты и сек
function updateTime() {
  let CurrTime = new Date();
  hours = CurrTime.getHours();
  minutes = CurrTime.getMinutes();
  seconds = CurrTime.getSeconds();
  document.getElementById('timer').textContent = Str0L(hours, 2) + ':' + Str0L(minutes, 2) + ':' + Str0L(seconds, 2);
}

// добавляем нули, если минут или сек < 10
function Str0L(val, len) {
  var strVal = val.toString();
  while (strVal.length < len)
    strVal = '0' + strVal;
  return strVal;
}

// запускаем механизм (стрелки)
function goHandClock(cl, id) {
  document.getElementById(id).style.transform = 
    'rotate(' + cl * 6 + 'deg) translateX(-5px) rotate(' + 0 + 'deg)';
  document.getElementById(id).style.transformOrigin = '0 100%';
}
// собираем всю логику в одну функцию, чтобы потом повесить на один таймер
function goTime() {
  updateTime();
  let hour = hours > 12 ? hours - 12 : hours;
  goHandClock(hour * 5, 'hour');
  goHandClock(minutes, 'minutes');
  goHandClock(seconds, 'seconds');
}
