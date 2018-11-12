"use strict";

function TAJAXStorage(name) {
    var self = this;
    self.name = name;
    self.myName = 'Radkevich_DRINKS';
    self.storage = {};
    
    var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";

    // забрали данные с сервера
  self.readStorage = function() {
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {f: 'READ', n: self.myName},
        cache: false,
        success: writeReady,
        error: self.ErrorHandler
      }
    );
  }
      
    // сохранили данные в массив
    function writeReady(ResultH) {
      self.storage = JSON.parse(ResultH.result);
    }

  self.readStorage();
    
  // подготавливаем сервер к изменениям
  self.trainingToChange = function() {
    self.updatePassword = Math.random();
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        data: {
          f: 'LOCKGET', n: self.myName,
          p: self.updatePassword
        },
        cache: false,
        success: (obj) => console.log(obj),
        error: self.ErrorHandler
      }
    );
  }

  // посылаем измененный массив на сервер
  self.Update = function() {
  
    $.ajax( {
      url : AjaxHandlerScript, 
      type : 'POST', 
      data: {f: 'UPDATE', n: self.myName, 
          v : JSON.stringify(self.storage), p: self.updatePassword},
      cache: false,
      success: (obj) => console.log(obj), 
      error: self.ErrorHandler
      }
    );
  }

//-----------------------------------------------
    self.addValue = function(key, value) {
      
      self.trainingToChange();
      self.storage[key] = value;
      self.Update();

    };
  
    self.getValue = function (key) {

      self.readStorage();
      return self.storage[key];

    };

    self.deleteValue = function(key) {

     self.trainingToChange();
      if (self.storage[key]) {
        delete self.storage[key];
        self.Update();
        return true;
      } else {
        return false;
      }
    };

    self.getKeys = function () {

      self.readStorage();
      var keys = [];
      for (var i in self.storage) {
        keys.push(i);
      }
      return keys;

    }

    self.ErrorHandler =  function (jqXHR, StatusStr, ErrorStr) {
        alert(StatusStr + ' ' + ErrorStr);
    }
  }
