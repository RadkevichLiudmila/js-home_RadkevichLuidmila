'use strict';
(function clockShow() {

  const sizeClock = 400; // размер часов

  let clockArr = []; // массив для всех <div>
  let baseClock; // первый "самый главный <div>", который будет содержать все остальные <div>
  let hours ; // число часа на данный момент
  let minutes ; // число минут на данный момент
  let seconds ; // число секунд на данный момент

  // ------------- CSS style for div ------------------
  function addCSS(index, cX, cY, color, borRad){
    clockArr[index].style.width = Math.round(sizeClock/cX) + 'px';
    clockArr[index].style.height = Math.round(sizeClock/cY) + 'px';
    clockArr[index].style.background = color;
    clockArr[index].style.borderRadius = borRad + '%';
    if (index !== 0) {
      clockArr[index].style.position = 'absolute';
    }
    if (index > 0){
      clockArr[index].style.left =  calcCoordElemX(index) + 'px';
      clockArr[index].style.top =  calcCoordElemY(index) + 'px';
    }
  };

  // ------------- calc coord for element X ------------------
  function calcCoordElemX(val) {
    let centrElX = parseInt(clockArr[val].style.width)/2; // центр элемента по Х
    let coordElX = marginClock + centrX - centrElX; // координаты элемента по Х
    return coordElX;
  }

  // ------------- calc coord for element Y ------------------
  function calcCoordElemY (val) {
    if (val < 13) {
      let centrElY = parseInt(clockArr[val].style.height)/2; // центр элемента Y
      let coordElY = marginClock + centrY - centrElY; // координаты элемента по Y
      return coordElY;
    } else if (val >= 13 && val < 16) {
      let centrElY = parseInt(clockArr[val].style.height) - Math.round(sizeClock/20); // отступ стрелки по Y
      let coordElY = marginClock + centrY - centrElY; // координаты элемента по Y
      return coordElY;
    } else {
      let centrElY = parseInt(clockArr[val].style.height)/2; // центр элемента Y
      let coordElY = marginClock + centrY/2 - centrElY; // координаты элемента по Y
      return coordElY;
    }
  }

  //---------------- style for body -----------------
  document.getElementsByTagName('body')[0].id = 'body';
  document.getElementById('body').style.margin = '0px';
  document.getElementById('body').style.padding = '0px';
  let base = document.getElementById('body');

  //---------------- new div for clock -------------
  let clock = document.createElement('div');
  document.getElementById('body').appendChild(clock);

  // -------------- create baseClock ---------------
  clockArr[0] = document.getElementsByTagName('div')[0];
  clockArr[0].id = 'base_clock';
  baseClock = document.getElementById('base_clock');

  baseClock.innerHTML =   //-- background image cat --
      '<img src="./img/cat.jpg" style="width:'+ sizeClock + 'px; height:' + 
      sizeClock + 'px; border-radius:50%; ">';

  baseClock.style.margin = '30px';
  addCSS(0, 1, 1, '#C0C0C0', 50);

  //--------------- const --------------------
  const marginClock = parseInt(base.style.margin) + parseInt(baseClock.style.margin); // общий отступ margin
  const centrX = parseInt(baseClock.style.width)/2; // центр часов по Х
  const centrY = parseInt(baseClock.style.height)/2; // центр часов по Y

  // ----------- create numbers (tag p) -----------------
  function createBaseForNumber(val) {

    let BaseForNumber = document.createElement('div');
    document.getElementById('base_clock').appendChild(BaseForNumber);
    clockArr[val] = document.getElementsByTagName('div')[val];

    addCSS(val, 8, 8, '#FFF0F5', 50);

    clockArr[val].style.transform = 
      'rotate(' + (val * 30 + 270) + 'deg) translateX(' + 
      Math.round(sizeClock/2.6) + 'px) rotate(' + (-val * 30 + 90) + 'deg)';
  
   BaseForNumber.innerHTML = 
   '<p style="color: #191970; font-weight: bold; margin: 0; font-size:'+ 
   Math.round(sizeClock/10) + 'px; display:flex; justify-content:center;">' + val + '</p>';
  }

  for (let i = 1; i < 13; i++) {
    createBaseForNumber(i);
  }

  // ------------- create hour hands ------------------
function createHands() {
  
  let hourHand = document.createElement('div');
    document.getElementById('base_clock').appendChild(hourHand);
    clockArr[13] = document.getElementsByTagName('div')[13];
    addCSS(13, 33, 4, '#191970', 20);
    
  let minuteHand = document.createElement('div');
  document.getElementById('base_clock').appendChild(minuteHand);
  clockArr[14] = document.getElementsByTagName('div')[14];
  addCSS(14, 50, 3, '#191970', 20);

  let secondHand = document.createElement('div');
  document.getElementById('base_clock').appendChild(secondHand);
  clockArr[15] = document.getElementsByTagName('div')[15];
  addCSS(15, 200, 2.5, 'red', 20);
}
createHands();

//function makeTime() {
  let timer = document.createElement('div');
  document.getElementById('base_clock').appendChild(timer);
  clockArr[16] = document.getElementsByTagName('div')[16];
  addCSS(16, 3.6, 10, 'none', 0);

  function updateTime() {
    let CurrTime = new Date();
    hours = CurrTime.getHours();
    minutes = CurrTime.getMinutes();
    seconds = CurrTime.getSeconds();

    clockArr[16].innerHTML = 
      '<p style="font-size: ' + Math.round(sizeClock/13.3) + 'px; font-weight: bold; color: #FFFAFA; text-shadow: #000000 1px 1px 0, #000000 2px 2px 0;" >' +
      Str0L(hours, 2) + ':' + Str0L(minutes, 2) + ':' + Str0L(seconds, 2) + '</p>';
  }

  function Str0L(val, len) {
    var strVal = val.toString();
    while (strVal.length < len)
      strVal = '0' + strVal;
    return strVal;
  }

  function goHandClock(cl, val) {
    clockArr[val].style.transform = 
      'rotate(' + cl * 6 + 'deg) translateX(-5px) rotate(' + 0 + 'deg)';
    clockArr[val].style.transformOrigin = '0 100%';
  }
  
  function goTime() {
    updateTime();
    let hour = hours > 12 ? hours - 12 : hours;
    goHandClock(hour * 5, 13);
    goHandClock(minutes, 14);
    goHandClock(seconds, 15);
  }
  setInterval(goTime, 1000);
})();