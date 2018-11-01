'use strict';
function TLocalStorage(dr) {
  var self = this,
      pHash = {};

  self.reset = function() {
    if (window.localStorage.getItem(dr)) {
      pHash = JSON.parse(window.localStorage.getItem(dr));
      return pHash;
    } else {
      return '';
    }
  }

  self.addValue = function(key, value) {
    if (window.localStorage.getItem(dr)) {
      pHash = JSON.parse(window.localStorage.getItem(dr));
    }
    pHash[key] = value;
    window.localStorage.setItem(dr, JSON.stringify(pHash));
  };

  self.deleteValue = function(key) {
    pHash = JSON.parse(window.localStorage.getItem(dr));
    console.log(pHash);
    delete pHash[key];
    window.localStorage.setItem(dr, JSON.stringify(pHash));
  };
}