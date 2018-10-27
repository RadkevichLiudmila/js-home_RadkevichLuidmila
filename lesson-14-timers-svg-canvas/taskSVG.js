'use strict';

const baseRadius = 150; //радиус циферблата
const numbersBaseRadius = baseRadius / 1.25; //радиус оси цифр циферблата
const circleRadius = 15; // радиус кружков с цифрами
const dotSize = 10; //размер точки в центре часов
const svgClock = document.getElementById('svgClock');
const wrapper = document.getElementById('wrapper');

createWatch();
setInterval(tickTimer, 1000);
 
// UI
function createWatch() {
  svgClock.appendChild(createBase());
  svgClock.appendChild(createClockFace());
  svgClock.appendChild(createDigitalWatch());
  svgClock.appendChild(createDigitalText('hourstext', -15));
  svgClock.appendChild(createDigitalText('minutestext', 10));
  svgClock.appendChild(createDigitalText('secondstext', 40));
  svgClock.appendChild(createArrow('hours', 6, 'black'));
  svgClock.appendChild(createArrow('minutes', 4, 'black'));
  svgClock.appendChild(createArrow('seconds', 2, 'red'));
  svgClock.appendChild(createDecorativeDot(dotSize));
}
function createBase() {
  let base = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  base.setAttribute("fill", "#fff");
  base.setAttribute("stroke", "#f1f1f1");
  base.setAttribute("stroke-width", baseRadius / 15);
  base.setAttribute("r", baseRadius);
  base.setAttribute("cx", baseRadius + baseRadius / 15);
  base.setAttribute("cy", baseRadius + baseRadius / 15);
  return base;
}

function createClockFace() {
  let clockFace = document.createDocumentFragment();
  for (let number = 1; number <= 12; number++) {
    let angle = number * 30 / 180 * Math.PI;
    let x = baseRadius + Math.round(Math.sin(angle) * numbersBaseRadius);
    let y = baseRadius - Math.round(Math.cos(angle) * numbersBaseRadius);
    clockFace.appendChild(createHourCircle(x, y));
    clockFace.appendChild(createNumberCircle(x, y, number));
  }
  return clockFace;
}

function createHourCircle(circleX, circleY) {
  let circle =document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  circle.setAttribute("fill", "#f1f1f1");
  circle.setAttribute("r", circleRadius);
  circle.setAttribute("cx", circleX + baseRadius / 15);
  circle.setAttribute("cy", circleY + baseRadius / 15);
  return circle;
}

function createNumberCircle(circleX, circleY, number) {
  let text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  text.setAttribute("x", circleX - circleRadius / 3 + baseRadius / 15);
  text.setAttribute("y", circleY + circleRadius / 3 + baseRadius / 15);
  text.setAttribute("font-size", circleRadius);
  text.textContent = number;
  return text;
}

function createDigitalWatch() {
  let textClock = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
  textClock.setAttribute("width", baseRadius / 1.5);
  textClock.setAttribute("height", baseRadius / 3.5);
  textClock.setAttribute("x", baseRadius  + baseRadius / 15 - baseRadius / 3);
  textClock.setAttribute("y", baseRadius  + baseRadius / 15 + baseRadius / 5 );
  textClock.setAttribute("fill", "#f1f1f1");
  return textClock;
}

function createDigitalText(id, coord){
  let digitsH = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  digitsH.setAttribute("x", baseRadius + baseRadius / 15 - baseRadius / 6 + coord);
  digitsH.setAttribute("y", baseRadius + baseRadius / 15 + baseRadius / 2.7);
  digitsH.setAttribute("fill", "#B0C4DE");
  digitsH.setAttribute("id", id);
  digitsH.setAttribute("font-size", circleRadius * 1.5);
  return digitsH;
}

function createArrow(arrowType, arrowWidth, arrowColor) {
  let arrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
  arrow.setAttribute("x1", baseRadius + baseRadius / 15);
  arrow.setAttribute("y1", baseRadius + baseRadius / 15);
  arrow.setAttribute("x2", baseRadius + numbersBaseRadius - arrowWidth*arrowWidth*1.5);
  arrow.setAttribute("y2", baseRadius + baseRadius / 15);
  arrow.setAttribute("stroke-width", arrowWidth);
  arrow.setAttribute("stroke", arrowColor);
  arrow.setAttribute("stroke-linecap", "round");
  arrow.setAttribute("id", arrowType);
  return arrow;
}

function createDecorativeDot(size){
  let dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  dot.setAttribute("cx", baseRadius + baseRadius / 15);
  dot.setAttribute("cy", baseRadius + baseRadius / 15);
  dot.setAttribute("r", size);
  return dot;
}

// Logic
function tickTimer() {
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  let thisSecondRotate = (second / 60) * 360 - 90;
  let thisMinuteRotate = (minute) / 60 * 360 - 90;
  let thisHourRotate = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate );
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  let arrow = document.getElementById(handle);
  arrow.setAttribute("transform", `rotate(${degree} ${baseRadius + baseRadius / 15} ${baseRadius + baseRadius / 15})`);
}

function updateDigitalWatch(hour, minute, second) {
  let digitalWatchSeconds = document.getElementById('secondstext');
  let digitalWatchMinutes = document.getElementById('minutestext');
  let digitalWatchHours = document.getElementById('hourstext');
  digitalWatchSeconds.textContent = ':' + addZeroToNumber(second);
  digitalWatchMinutes.textContent = ':' + addZeroToNumber(minute);
  digitalWatchHours.textContent = addZeroToNumber(hour);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
