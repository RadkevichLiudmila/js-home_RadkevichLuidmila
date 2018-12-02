'use strict';

const baseRadius = 150; //радиус циферблата
const numbersBaseRadius = baseRadius / 1.25; //радиус оси цифр циферблата
const circleRadius = 15; // радиус кружков с цифрами
const dotSize = 10; //размер точки в центре часов
const canvasClock = document.getElementById('canvas');

setInterval(start, 1000);

function start() {
  createWatch();
  tickTimer();
}
 
// UI

function createWatch() {

  let base = canvasClock.getContext('2d');
  base.fillStyle = '#f1f1f1';
  base.beginPath();
  base.arc(baseRadius + 2, baseRadius + 2, baseRadius, 0, Math.PI * 2, false);
  base.fill();

  base.fillStyle = '#fff';
  base.beginPath();
  base.arc(baseRadius + 2, baseRadius + 2, baseRadius - 10, 0, Math.PI * 2, false);
  base.fill();
 
  createClockFace(base);
  createDigitalWatch(base);
  createDecorativeDot(base, dotSize);
}

function createClockFace(base) {
  for (let number = 1; number <= 12; number++){
    let angle = number * 30 / 180 * Math.PI;
    let x = baseRadius + Math.round(Math.sin(angle) * numbersBaseRadius);
    let y = baseRadius - Math.round(Math.cos(angle) * numbersBaseRadius);
    createHourCircle(base, x, y);
    createNumberCircle(base, x, y, number);
  }
}

function createHourCircle(circle, circleX, circleY) {
  circle.fillStyle = '#f1f1f1';
  circle.beginPath();
  circle.arc(circleX + baseRadius / 50, circleY + baseRadius / 50, circleRadius, 0, Math.PI * 2, false);
  circle.fill();
}

function createNumberCircle(text, circleX, circleY, number) {
  text.fillStyle = 'black';
  text.font = 'italic bold '+ circleRadius + 'px Arial';
  text.fillText(number, circleX - circleRadius / 3 + baseRadius / 50, circleY - circleRadius / 3 + baseRadius / 12);
}

function createDigitalWatch(textClock) {
  textClock.fillStyle = '#f1f1f1';
  textClock.fillRect(baseRadius + baseRadius / 40 - baseRadius / 3,
    baseRadius + baseRadius / 40 + baseRadius / 5, baseRadius / 1.5, baseRadius / 3.5);
}

function createDecorativeDot(dot, size){
  dot.fillStyle='black';
  dot.beginPath();
  dot.arc(baseRadius + baseRadius / 40, baseRadius + baseRadius / 40, size, 0, Math.PI * 2, false);
  dot.fill();
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
  let thisSecondRotate = 6 * second;
  let thisMinuteRotate = 6 * minute;
  let thisHourRotate = 30 * hour;
  rotateHandle(thisHourRotate, 6, 'black', baseRadius / 2);
  rotateHandle(thisMinuteRotate, 4, 'black', baseRadius / 1.5);
  rotateHandle(thisSecondRotate, 2, 'red', baseRadius / 1.2);
}

function rotateHandle(degree, arrowWidth, arrowColor, length) {
    let arrow = canvasClock.getContext('2d');
    arrow.strokeStyle = arrowColor;
    arrow.lineCap = 'round';
    arrow.beginPath();

    let x = baseRadius + baseRadius / 40;
    let y = baseRadius + baseRadius / 40;
    arrow.moveTo(x, y);
    arrow.lineTo(x + length * Math.cos(Math.PI / 2 - degree * (Math.PI / 180)), 
    y - length * Math.sin(Math.PI / 2 - degree*(Math.PI / 180)));
    arrow.lineWidth = arrowWidth;
    arrow.stroke();
}

function updateDigitalWatch(hour, minute, second) {
  let digitalWatchHours = canvasClock.getContext('2d');
  digitalWatchHours.fillStyle = '#B0C4DE';
  digitalWatchHours.font = 'italic bold ' + circleRadius * 1.4 + 'px Arial';
  digitalWatchHours.fillText(addZeroToNumber(hour) + ':' + addZeroToNumber(minute) + ':' + addZeroToNumber(second),
    baseRadius + baseRadius / 15 - baseRadius / 3, baseRadius + baseRadius / 15 + baseRadius / 3);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
