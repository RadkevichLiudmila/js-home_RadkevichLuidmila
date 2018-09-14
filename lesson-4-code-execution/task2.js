'use strict'

function multiplyNumeric(arg) {
  for (var key in arg) {
    if (typeof arg[key] === 'number') {
      arg[key] = arg[key] * 2;
    }
  }
  return arg;
}

module.exports = multiplyNumeric;