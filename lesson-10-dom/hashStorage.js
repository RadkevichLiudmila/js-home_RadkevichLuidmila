'use strict';
function THashStorage(nameDrink, info) {
  this.nameDrink = nameDrink;
  this.info = info;
}

var d1 = new THashStorage('маргарита',
  ['да',
    'текила 60 мл.\n' +
    'сок лайма 60 мл.\n' +
    'апельсиновый ликер Cointreau 30 мл.\n' +
    'колотый лед\n' +
    'ломтики лайма\n' +
    'Сделай на бокале для маргариты соленую окаемку\n' +
    'Налей в шейкер лаймовый сок 30 мл, сахарный сироп 10 мл, ликер трипл сек 25 мл и серебряную текилу 50 мл\n' +
    'Наполни шейкер кубиками льда и взбей\n' +
    'Перелей через стрейнер в охлажденный бокал для маргариты\n' +
    'Укрась кружком лайма']);
var d2 = new THashStorage('манхэттен',
  ['да',
    'Необходимые ингредиенты\n' +
    'Бурбон Jim Beam 50 мл\n' +
    'Красный вермут Martini 25 мл\n' +
    'Ангостура биттер 1 мл\n' +
    'Коктейльная вишня красная 5 г\n' +
    'Лед в кубиках 300 г\n' +
    'Налей в стакан для смешивания красный вермут 25 мл и бурбон 50 мл\n' +
    'Добавь ангостуру биттер 1 дэш\n' +
    'Наполни стакан кубиками льда и размешай коктейльной ложкой\n' +
    'Перелей через стрейнер в охлажденный коктейльный бокал\n' +
    'Укрась коктейльной вишней']);
var d3 = new THashStorage('коктейль тропический',
  ['нет',
    'Молоко 400 мл\n' +
    'Бананы 3-4 шт.\n' +
    'Апельсиновый сок 400 мл\n' +
    'Сахар 1 ст. л. (по вкусу)\n' +
    'Лед по вкусу\n' +
    'Всё взбить блендером или миксером.\n' +
    'После того, как взбили, добавить кусочки льда и продолжить дальше взбивать до тех пор, пока лёд не станет крошкой.'
  ]);

var drinkStorage = [d1, d2, d3];

THashStorage.addValue = function (key, value) {

};
THashStorage.getValue = function (key, arr) {
  var valueDrink = 'нет такого напитка';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].nameDrink.indexOf(key) > -1) {
      valueDrink = 'напиток ' + arr[i].nameDrink + '\n' +
          'алкогольный ' + arr[i].info[0] + '\n' +
          'рецепт ' + arr[i].info[1];
    }
  }
  return valueDrink;
};

THashStorage.deleteValue = function (key) {

};

THashStorage.getKey = function (arr) {
  var arrND = [];
  for (var i = 0; i < arr.length; i++) {
    arrND[i] = arr[i].nameDrink;
  }
  return arrND;
};

var nameDr;
var newLi = document.createElement('li');

//---------------------- ADD NEW DRINK --------------------------------
document.querySelector('.btn-input').addEventListener('click', function () {
  console.log('btn-input');
  btnDisplayNone();

  document.querySelector('.name-drink').style.display = 'block';

  document.querySelector('.btn-name-drink').addEventListener('click', function () {
    document.querySelector('.alco-or-no').style.display = 'block';
    document.querySelector('.name-drink').style.display = 'none';
  });
  document.querySelector('.btn-yes').addEventListener('click', function () {
    document.querySelector('.recipe').style.display = 'block';
    document.querySelector('.alco-or-no').style.display = 'none';
  });
  document.querySelector('.btn-no').addEventListener('click', function () {
    document.querySelector('.recipe').style.display = 'block';
    document.querySelector('.alco-or-no').style.display = 'none';
  });

  document.querySelector('.btn-recipe').addEventListener('click', function () {
    document.querySelector('.recipe').style.display = 'none';
    btnDisplayBlock();
  });
  document.querySelector('.btn-cancel-1').addEventListener('click', function () {
    document.querySelector('.name-drink').style.display = 'none';
    document.querySelector('.alco-or-no').style.display = 'none';
    document.querySelector('.recipe').style.display = 'none';
    btnDisplayBlock();
  });
});
//-------------------------- SHOW DRINK -----------------------------------
document.querySelector('.btn-show').addEventListener('click', function () {
  btnDisplayNone();
  document.querySelector('.bl-2').style.display = 'block';

  document.querySelector('.btn-show-drink').addEventListener('click', function () {

    nameDr = document.getElementById('txt-2').value;
    var show = THashStorage.getValue(nameDr, drinkStorage);

    newLi.innerHTML = show;
    document.querySelector('.list-2').appendChild(newLi);

  });

  document.querySelector('.btn-cancel-2').addEventListener('click', function () {
    document.querySelector('.bl-2').style.display = 'none';
    btnDisplayBlock();
  });
});
//-------------------------- DELETE DRINK -----------------------------------
document.querySelector('.btn-delete').addEventListener('click', function () {
  btnDisplayNone();
  document.querySelector('.bl-3').style.display = 'block';
  document.querySelector('.btn-cancel-3').addEventListener('click', function () {
    document.querySelector('.bl-3').style.display = 'none';
    btnDisplayBlock();
  });
});
//-------------------------- SHOW LIST DRINK -----------------------------------
document.querySelector('.btn-list-drinks').addEventListener('click', function () {
  btnDisplayNone();
  document.querySelector('.bl-4').style.display = 'block';
//----------------------- list drinks ---------------------
  var arrNameDrink = '';
  arrNameDrink = THashStorage.getKey(drinkStorage);
  for (var i = 0; i < arrNameDrink.length; i++) {
    newLi = document.createElement('li');
    newLi.innerHTML = arrNameDrink[i];
    document.querySelector('.list-4').appendChild(newLi);
  }
//--------------------------- cansel ----------------------
  document.querySelector('.btn-cancel-4').addEventListener('click', function () {
    document.querySelector('.bl-4').style.display = 'none';
    btnDisplayBlock();
  });
});

function btnDisplayNone() {
  document.querySelector('.btn-input').style.display = 'none';
  document.querySelector('.btn-show').style.display = 'none';
  document.querySelector('.btn-delete').style.display = 'none';
  document.querySelector('.btn-list-drinks').style.display = 'none';
}
function btnDisplayBlock() {
  document.querySelector('.btn-input').style.display = 'block';
  document.querySelector('.btn-show').style.display = 'block';
  document.querySelector('.btn-delete').style.display = 'block';
  document.querySelector('.btn-list-drinks').style.display = 'block';
}



