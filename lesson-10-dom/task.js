'use strict';

var storageDrink = new THashStorage();
var nameDr, alc, rec;
var newLi = document.createElement('li');

//---------------------- ADD NEW DRINK --------------------------------
document.querySelector('.btn-input').addEventListener('click', function () {
  btnDisplayNone();
  document.querySelector('.name-drink').style.display = 'block';
});

document.querySelector('.btn-name-drink').addEventListener('click', function () {
  nameDr = document.getElementById('txt-01').value;
  if (nameDr) {
    document.getElementById('txt-01').value = '';
    document.querySelector('.alco-or-no').style.display = 'block';
    document.querySelector('.name-drink').style.display = 'none';
  } else {
    newLi.innerHTML = 'вы ничего не ввели';
    document.querySelector('.list-01').appendChild(newLi);
  }
});

document.querySelector('.btn-yes').addEventListener('click', function () {
  alc = 'да';
  document.querySelector('.recipe').style.display = 'block';
  document.querySelector('.alco-or-no').style.display = 'none';
});

document.querySelector('.btn-no').addEventListener('click', function () {
  alc = 'нет';
  document.querySelector('.recipe').style.display = 'block';
  document.querySelector('.alco-or-no').style.display = 'none';
});

document.querySelector('.btn-recipe').addEventListener('click', function () {
  rec = document.getElementById('txt-11').value;
  if (rec) {
    document.getElementById('txt-11').value = '';
    storageDrink.addValue(nameDr, [alc, rec]);
    document.querySelector('.recipe').style.display = 'none';
    btnDisplayBlock();
  } else {
    newLi.innerHTML = 'вы ничего не ввели';
    document.querySelector('.list-11').appendChild(newLi);
  }
});

document.querySelector('.btn-cancel-1').addEventListener('click', function () {
  document.querySelector('.name-drink').style.display = 'none';
  document.getElementById('txt-01').value = '';
  btnDisplayBlock();
});

//-------------------------- SHOW DRINK -----------------------------------
document.querySelector('.btn-show').addEventListener('click', function () {
  btnDisplayNone();
  document.querySelector('.bl-2').style.display = 'block';
});

document.querySelector('.btn-show-drink').addEventListener('click', function () {
  nameDr = document.getElementById('txt-2').value;
  document.getElementById('txt-2').value = '';
  newLi.innerHTML = showInfoAboutDrink(nameDr);
  document.querySelector('.list-2').appendChild(newLi);
});

function showInfoAboutDrink(name) {
  var info = storageDrink.getValue(name);
  var valueDrink = 'в списке нет напитка ' + name;
   if (name === '') {
     valueDrink = 'вы ничего не ввели';
   } else if (info) {
     valueDrink = 'напиток ' + name +
         ', алкогольный: ' + info[0] +
         ', рецепт: ' + info[1];
   }
   return valueDrink;
}

document.querySelector('.btn-cancel-2').addEventListener('click', function () {
  document.getElementById('txt-2').value = '';
  document.querySelector('.bl-2').style.display = 'none';
  btnDisplayBlock();
});

//-------------------------- DELETE DRINK -----------------------------------
document.querySelector('.btn-delete').addEventListener('click', function () {
  btnDisplayNone();
  document.querySelector('.bl-3').style.display = 'block';
});

document.querySelector('.btn-delete-drink').addEventListener('click', function () {
  nameDr = document.getElementById('txt-3').value;
  document.getElementById('txt-3').value = '';
  newLi.innerHTML = deleteDrink(nameDr);
  document.querySelector('.list-3').appendChild(newLi);
});

function deleteDrink(name) {
  var info = storageDrink.getValue(name);
  var valueDrink = 'в списке нет напитка ' + name;
   if (name === '') {
     valueDrink = 'вы ничего не ввели';
   } else if (info) {
    storageDrink.deleteValue(name);
     valueDrink = 'вы удалили ' + name;
   }
   return valueDrink;
}

document.querySelector('.btn-cancel-3').addEventListener('click', function () {
  document.getElementById('txt-3').value = '';
  document.querySelector('.bl-3').style.display = 'none';
  btnDisplayBlock();
});

//-------------------------- SHOW LIST DRINK -----------------------------------
document.querySelector('.btn-list-drinks').addEventListener('click', function () {
  btnDisplayNone();
  document.querySelector('.bl-4').style.display = 'block';

  var arrNameDrink = storageDrink.getKey();
  for (var i = 0; i < arrNameDrink.length; i++) {
    newLi = document.createElement('li');
    newLi.innerHTML = arrNameDrink[i];
    document.querySelector('.list-4').appendChild(newLi);
  }
});

document.querySelector('.btn-cancel-4').addEventListener('click', function () {
  document.querySelector('.bl-4').style.display = 'none';
  btnDisplayBlock();
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

