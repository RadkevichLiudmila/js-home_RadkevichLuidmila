'use strict';

var THashStorage = function () {
  var storage = {};

  this.addValue = function (key, value) {
    return storage[key] = value;
  };

  this.getValue = function (key) {
   return storage[key];
  };

  this.deleteValue = function (key) {
    return delete storage[key];
  };

  this.getKey = function () {
    return Object.keys(storage);
  };
};