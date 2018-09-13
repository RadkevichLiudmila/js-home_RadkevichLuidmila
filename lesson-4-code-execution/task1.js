'use strict'

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

function considersMax(obj) {
  var max = 0;
  for (var key in obj) {
    max = Math.max(max, obj[key]);
  }
  return max;
}

console.log(considersMax(tasksCompleted));

module.exports = considersMax;