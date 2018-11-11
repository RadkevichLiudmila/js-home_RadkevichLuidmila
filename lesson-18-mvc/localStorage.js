'use strict';
function TLocalStorage(name) {
  var self = this;
  self.name = name;
  self.storage = JSON.parse(localStorage.getItem(self.name)) || {};

  self.addValue = function(key, value) {
    this.storage[key] = value;
    localStorage.setItem(self.name, JSON.stringify(self.storage));
  };

  self.getValue = function (key) {
    return self.storage[key];
  };

  self.deleteValue = function(key) {
    if (this.storage[key]) {
      delete self.storage[key];
      localStorage.setItem(self.name, JSON.stringify(self.storage));
      return true;
    } else {
      return false;
    }
  };
  self.getKeys = function () {
    var keys = [];

    for (var i in self.storage) {
      keys.push(i);
    }

    return keys;
  }
}
