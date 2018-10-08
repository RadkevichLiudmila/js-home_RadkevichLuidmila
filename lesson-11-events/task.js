'use strict';
(function () {

  var dataObj = [
    {'p': 'Для внесения вашего сайта в каталог, заполните форму:', 'colspan': '2'},
    {'label': 'Разработчики:', 'type': 'text'},
    {'label': 'Название сайта:', 'type': 'text'},
    {'label': 'URL сайта:', 'type': 'url'},
    {'label': 'Дата запуска сайта:', 'type': 'text'},
    {'label': 'Посетителей в сутки:', 'type': 'text'},
    {'label': 'E-mail для связи:', 'type': 'text'},
    {'label': 'Рубрика каталога:', 'type': 'select', 'option': {'здоровье': true, 'бытовая техника': true,'домашний уют': true}},
    {'label': 'Размещение:', 'type': 'radio', 'radio': {'бесплатное': true, 'платное': true, 'VIP': true}},
    {'label': 'Разрешить отзывы:', 'type': 'checkbox', 'checkbox': {'checked': true}},
    {'label': 'Описание сайта:', 'colspan': '2'},
    {'type': 'textarea', 'size': {'rows': '10', 'cols': '45'}, 'colspan': '2'},
    {'value': 'Опубликовать', 'type': 'submit'}
  ];

  function formDynamic(arr) {
    document.write('<table border=0 cellpadding=2 cellspacing=0>');

    for (var i = 0; i < arr.length; i++) {
      var col = '';
      if (!!arr[i].colspan) {
        col = ' colspan=' + arr[i].colspan;
      }
      document.write('<tr>');

      if (!!arr[i].p) {
        document.write('<td' + col + '>');
        addText(arr[i].p);
        document.write('</td>');
      }

      if (!!arr[i].label) {
        document.write('<td' + col + '>');
        addLabel(arr[i].label);
        document.write('</td>');
      }

      if (arr[i].type === 'select') {
        document.write('<td' + col + '>');
        addSelect(arr[i].option);
        document.write('</td>');

      } else if (arr[i].type === 'radio') {
        document.write('<td' + col + '>');
        addRadio(arr[i].radio);
        document.write('</td>');

      } else if (arr[i].type === 'checkbox') {
        document.write('<td' + col + '>');
        addCheckbox(arr[i].checkbox);
        document.write('</td>');

      } else if (arr[i].type === 'textarea') {
        document.write('<td colspan=2>');
        addTextarea(arr[i].size);
        document.write('</td>');

      } else if (arr[i].type === 'submit') {
        document.write('<td' + col + '>');
        addSumbit(arr[i].value);
        document.write('</td>');

      } else if (!!arr[i].type) {
        document.write('<td' + col + '>');
        addInput(arr[i].type);
        document.write('</td>');
      }

      document.write('</tr>');
    }
    document.write('</table>');
  }

  formDynamic(dataObj);
  
  function addInput(type) {
	  document.write('<input type=' + type + '>');
  }

  function addText(val) {
	  document.write('<p>' + val + '</p>');
  }
  
  function addLabel(val) {
	  document.write('<label>' + val + '</label>');
  }
  
  function addSelect(obj) {
	  document.write('<select>');
	  for (var key in obj) {
		  document.write('<option>' + key + '</option>');
	  }
	  document.write('</select>');
  }
  
  function addRadio(obj) {
	  for (var key in obj) {
		  document.write('<input type="radio">' + key);
  	}
  }
  
  function addCheckbox(obj) {
	  var chek = '';
	  if (obj.checked) {
		  chek = 'checked';
	  }
	  document.write('<input type="checkbox"' + chek + '>');
  }
  
  function addTextarea(obj) {
	  document.write('<textarea rows=' + obj.rows + ' cols=' + obj.cols + '></textarea>');
  }
  
  function addSumbit(val) {
	  document.write('<input  type=submit value=' + val + '>');
  }
})();