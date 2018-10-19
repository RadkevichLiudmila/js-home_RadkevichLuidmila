'use strict';
(function clockShow() {

  const sizeClock = 400; // размер часов, размер можно меныть, часы уменьшатся/увеличатся пропорционально

  let clockArr = []; // массив для всех <div>
  let baseClock; // первый "самый главный <div>", который будет содержать все остальные <div>
  let hours; // число часа на данный момент
  let minutes; // число минут на данный момент
  let seconds; // число секунд на данный момент

  // ------------- CSS style for div ------------------ функция задает стили для некотрых элементов
  function addCSS(index, cX, cY, color, borRad) {
    clockArr[index].style.width = Math.round(sizeClock / cX) + 'px';
    clockArr[index].style.height = Math.round(sizeClock / cY) + 'px';
    clockArr[index].style.background = color;
    clockArr[index].style.borderRadius = borRad + '%';
    if (index !== 0) {
      clockArr[index].style.position = 'absolute';
    }
    if (index > 0) {
      clockArr[index].style.left = calcCoordElemX(index) + 'px';
      clockArr[index].style.top = calcCoordElemY(index) + 'px';
    }
  };

  // ------------- calc coord for element X ---- считает координаты элементов по Х относительно окна браузера
  function calcCoordElemX(val) {
    let centrElX = parseInt(clockArr[val].style.width) / 2; // центр элемента по Х
    let coordElX = marginClock + centrX - centrElX; // координаты элемента по Х
    return coordElX;
  }

  // ------------- calc coord for element Y ----- считает координаты элементов по Y относительно окна браузера
  function calcCoordElemY (val) {

    if (val < 13) {
      //координаты для циферблата (кружки + цифры)
      let centrElY = parseInt(clockArr[val].style.height)/2; // центр элемента Y
      let coordElY = marginClock + centrY - centrElY; // координаты элемента по Y
      return coordElY;
      //координаты для стрелок
    } else if (val >= 13 && val < 16) {
      let centrElY = parseInt(clockArr[val].style.height) - Math.round(sizeClock/20); // отступ стрелки по Y
      let coordElY = marginClock + centrY - centrElY; // координаты элемента по Y
      return coordElY;
      //координаты для электронных часов
    } else {
      let centrElY = parseInt(clockArr[val].style.height)/2; // центр элемента Y
      let coordElY = marginClock + centrY/2 - centrElY; // координаты элемента по Y
      return coordElY;
    }
  }

  //---------------- style for body -------- задаем отступы для body, нужно для того, чтобы часы можно было двигать
  document.getElementsByTagName('body')[0].id = 'body';
  document.getElementById('body').style.margin = '0px';
  document.getElementById('body').style.padding = '0px';
  let base = document.getElementById('body');

  //---------------- new div for clock ------------- основа для часов
  let clock = document.createElement('div');
  document.getElementById('body').appendChild(clock);

  clockArr[0] = document.getElementsByTagName('div')[0];
  clockArr[0].id = 'base_clock';
  baseClock = document.getElementById('base_clock');
  baseClock.style.margin = '30px';
  addCSS(0, 1, 1, '#C0C0C0', 50);

  //-- background image cat --
  let imageForClock = document.createElement('img');
  baseClock.appendChild(imageForClock);
  imageForClock.src = './img/cat.jpg';
  imageForClock.style.width = sizeClock + 'px';
  imageForClock.style.height = sizeClock + 'px';
  imageForClock.style.borderRadius = '50%';

  //--- const ---- здесь мы проверяем, заданы ли внешние отступы и ищем центр часов. 
  //надо для того, чтобы мы могли без проблем двигать часы, и задавать внешние отступы
  base.style.margin = base.style.margin || '0px';
  base.style.padding = base.style.padding || '0px';
  baseClock.style.margin = baseClock.style.margin || '0px';
  baseClock.style.padding = baseClock.style.padding || '0px';
  const marginClock = parseInt(base.style.margin) + parseInt(base.style.padding)
    + parseInt(baseClock.style.margin) + parseInt(baseClock.style.padding); // общий отступ margin и padding
  const centrX = parseInt(baseClock.style.width) / 2; // центр часов по Х
  const centrY = parseInt(baseClock.style.height) / 2; // центр часов по Y

  // -- create numbers (tag p) ----- функция создает циферблат (кружки + цифры)
  function createBaseForNumber(val) {

    let BaseForNumber = document.createElement('div');
    document.getElementById('base_clock').appendChild(BaseForNumber);
    clockArr[val] = document.getElementsByTagName('div')[val];

    // в функции создаются кружки размеров 8 на 8, с закруглегием на 50%
    addCSS(val, 8, 8, '#FFF0F5', 50);

    // расположение кружков циферблата
    clockArr[val].style.transform = 
      'rotate(' + (val * 30 + 270) + 'deg) translateX(' + 
      Math.round(sizeClock / 2.6) + 'px) rotate(' + (-val * 30 + 90) + 'deg)';
    
      // проставляются сами цифры на циферблате
   BaseForNumber.innerHTML = 
    '<p style="color: #191970; font-weight: bold; margin: 0; font-size:'
     + Math.round(sizeClock / 10) + 'px; display:flex; justify-content:center;">'
     + val + '</p>';
  }

  // вызывает функцию, которая создает циферблат
  for (let i = 1; i < 13; i++) {
    createBaseForNumber(i);
  }

  // ------------- create hour hands ------- создает стрелки часов
  function createHands() {
  
    // стрелка часов
    let hourHand = document.createElement('div');
    document.getElementById('base_clock').appendChild(hourHand);
    clockArr[13] = document.getElementsByTagName('div')[13];
    addCSS(13, 33, 4, '#191970', 20);
    
    // минутная стрелка 
    let minuteHand = document.createElement('div');
    document.getElementById('base_clock').appendChild(minuteHand);
    clockArr[14] = document.getElementsByTagName('div')[14];
    addCSS(14, 50, 3, '#191970', 20);

    // секундная стрелка
    let secondHand = document.createElement('div');
    document.getElementById('base_clock').appendChild(secondHand);
    clockArr[15] = document.getElementsByTagName('div')[15];
    addCSS(15, 200, 2.5, 'red', 20);
  }
  createHands();

  // ------------- create electronic clock ------------ электронные часы
  let timer = document.createElement('div');
  document.getElementById('base_clock').appendChild(timer);
  clockArr[16] = document.getElementsByTagName('div')[16];
  addCSS(16, 3.6, 10, 'none', 0);

  // Logic
  // берем время и разбиваем его на часы, минуты и сек
  function updateTime() {
    let CurrTime = new Date();
    hours = CurrTime.getHours();
    minutes = CurrTime.getMinutes();
    seconds = CurrTime.getSeconds();

    // прописываем время в электронные часы
    clockArr[16].innerHTML = '<p></p>';
    document.getElementsByTagName('p')[12].style.fontSize = Math.round(sizeClock/13.3) + 'px';
    document.getElementsByTagName('p')[12].style.fontWeight = 'bold';
    document.getElementsByTagName('p')[12].style.color = '#FFFAFA';
    document.getElementsByTagName('p')[12].style.textShadow = '#000 1px 1px 0, #000 2px 2px 0';
    document.getElementsByTagName('p')[12].style.color = '#FFFAFA';
    document.getElementsByTagName('p')[12].textContent = Str0L(hours, 2) + ':' + Str0L(minutes, 2) + ':' + Str0L(seconds, 2);
  }

  // добавляем нули, если минут или сек < 10
  function Str0L(val, len) {
    var strVal = val.toString();
    while (strVal.length < len)
      strVal = '0' + strVal;
    return strVal;
  }

  //----------- launch mechanism ------ запускаем механизм (стрелки)
  function goHandClock(cl, val) {
    clockArr[val].style.transform = 
      'rotate(' + cl * 6 + 'deg) translateX(-5px) rotate(' + 0 + 'deg)';
    clockArr[val].style.transformOrigin = '0 100%';
  }
  // собираем всю логику в одну функцию, чтобы потом повесить на один таймер
  function goTime() {
    updateTime();
    let hour = hours > 12 ? hours - 12 : hours;
    goHandClock(hour * 5, 13);
    goHandClock(minutes, 14);
    goHandClock(seconds, 15);
  }
  //вызываем таймер
  setInterval(goTime, 1000);
})();