'use strict'

var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};

function multiplyNumeric(arg) {
  for (var key in arg) {
    if (typeof arg[key] === 'number') {
      arg[key] = arg[key] * 2;
    }
  }
  return arg;
}

multiplyNumeric(image);
console.log(image);

module.exports = multiplyNumeric;