'use strict';

//var drinkStorage = new TLocalStorage("DRINKS");
var drinkStorage = new TAJAXStorage("drinks");

function addDrink() {
  var name = prompt('Введите название напитка', 'Test Drink').toLowerCase().trim();
  while (name === '') {
    name = prompt('Пожалуйста, введите название напитка', '');
  }
  if (name === null) return;

  if (drinkStorage.storage[name]) {
    alert('Такой напиток уже есть!');
    return;
  }

  var alcoholic = confirm('Напиток алкогольный?');
  var recipe = prompt('Кратко опишите рецепт напитка', '');
  var drinkInfo = {
    isAlco: alcoholic,
    recipe: recipe
  }

  if (drinkInfo) {
    document.getElementById('info').innerHTML = 'Напиток ' + name +
        ' успешно сохранен.';
  }

  drinkStorage.addValue(name, drinkInfo);
}

function showDrinkInfo() {
  var name = prompt('Введите название напитка', '');
  if (name === '' || name === null) return;

  if (drinkStorage.storage[name]) {
    document.getElementById('info').innerHTML = 'Напиток: ' + name + '<br>' +
        'алкогольный: ' + (drinkStorage.storage[name].isAlco ? 'да' : 'нет') + '<br>' +
        'рецепт: ' + drinkStorage.storage[name].recipe;
  } else {
    document.getElementById('info').innerHTML = 'Такого напитка нет.';
  }
}

function removeDrink() {
  var name = prompt('Введите название напитка, который хотите удалить', '');
  var message = '';
  while (name === '') {
    name = prompt('Пожалуйста, введите название напитка, который хотите удалить', '');
  }
  if (name === null) return;

  if (drinkStorage.storage[name]) {
    message = 'Напиток ' + name + ' удален.';
  } else {
    message = 'Информация не была удалена, т.к напиток под названием ' +
        name + ' не существует';
  }

  document.getElementById('info').innerHTML = message;
  drinkStorage.deleteValue(name);
}

function showDrinksMenu() {
  var allDrinks = drinkStorage.getKeys();
  allDrinks = allDrinks.join(', ');
  document.getElementById('info').innerHTML =  allDrinks;
}