'use strict';
var john = {
  bills: [124, 48, 268, 180, 42],
  tipCalc: function () {
    this.tip = [];
    var percent = 0;
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] <= 50) {
        percent = 0.2;
      } else if (this.bills[i] > 200) {
        percent = 0.1;
      } else {
        percent = 0.15;
      }
      this.tip[i] = parseFloat((this.bills[i] * percent).toFixed(2));
    }
    return  this.tip;
  },
  billEndCalc: function () {
    this.billEnd = [];
    for (var j = 0; j < this.bills.length; j++) {
      this.billEnd[j] = this.bills[j] + this.tip[j];
    }
    return this.billEnd;
  }
}

console.log('John\'s tips: ' + john.tipCalc().join(',   '));
console.log('The final John\'s bills: ' + john.billEndCalc().join(', '));

var mark = {
  bills: [77, 375, 110, 45],
  tipCalc: function () {
    this.tip = [];
    var percent = 0;
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] <= 100) {
        percent = 0.2;
      } else if (this.bills[i] > 300) {
        percent = 0.25;
      } else {
        percent = 0.1;
      }
      this.tip[i] = parseFloat((this.bills[i] * percent).toFixed(2));
    }
    return  this.tip;
  },
  billEndCalc: function () {
    this.billEnd = [];
    for (var j = 0; j < this.bills.length; j++) {
      this.billEnd[j] = this.bills[j] + this.tip[j];
    }
    return this.billEnd;
  }
}
console.log('Mark\'s tips: ' + mark.tipCalc().join(',   '));
console.log('The final Mark\'s bills: ' + mark.billEndCalc().join(', '));


function averageValueCalc(arr) {
  var averageValue =  0;
  for (var i = 0; i < arr.length; i++) {
    averageValue += arr[i];
  }
  return averageValue / arr.length;
}
john.average = averageValueCalc(john.tip);
mark.average = averageValueCalc(mark.tip);

if (john.average > mark.average) {
  console.log('The John family left more tips than the Mark family');
} else if (john.average < mark.average) {
  console.log('The Mark family left more tips than the John family');
}  else {
  console.log('Average tip equally');
}

module.exports.exportJohn = john;
module.exports.exportMark = mark;
module.exports.exportAverageValue = averageValueCalc;