'use strict';
var billJohn = {
  billBeginner: [124, 48, 268, 180, 42],
  tipCalc: function () {
    this.tip = [];
    for (var i = 0; i < this.billBeginner.length; i++) {
      if (this.billBeginner[i] <= 50) {
        this.tip[i] = parseFloat((this.billBeginner[i] * 0.2).toFixed(2));
      } else if (this.billBeginner[i] > 200) {
        this.tip[i] = parseFloat((this.billBeginner[i] * 0.1).toFixed(2));
      } else {
        this.tip[i] = parseFloat((this.billBeginner[i] * 0.15).toFixed(2));
      }
    }
    return  this.tip;
  },
  billEndCalc: function () {
    this.billEnd = [];
    for (var j = 0; j < this.billBeginner.length; j++) {
      this.billEnd[j] = this.billBeginner[j] + this.tip[j];
    }
    return this.billEnd;
  }
}

console.log('John\'s tips: ' + billJohn.tipCalc().join(',   '));
console.log('The final John\'s bills: ' + billJohn.billEndCalc().join(', '));

var billMark = {
  billBeginner: [77, 375, 110, 45],
  tipCalc: function () {
    this.tip = [];
    for (var i = 0; i < this.billBeginner.length; i++) {
      if (this.billBeginner[i] <= 100) {
        this.tip[i] = parseFloat((this.billBeginner[i] * 0.2).toFixed(2));
      } else if (this.billBeginner[i] > 300) {
        this.tip[i] = parseFloat((this.billBeginner[i] * 0.25).toFixed(2));
      } else {
        this.tip[i] = parseFloat((this.billBeginner[i] * 0.1).toFixed(2));
      }
    }
    return  this.tip;
  },
  billEndCalc: function () {
    this.billEnd = [];
    for (var j = 0; j < this.billBeginner.length; j++) {
      this.billEnd[j] = this.billBeginner[j] + this.tip[j];
    }
    return this.billEnd;
  }
}
console.log('Mark\'s tips: ' + billMark.tipCalc().join(',   '));
console.log('The final Mark\'s bills: ' + billMark.billEndCalc().join(', '));


function averageValueCalc(arr) {
  var averageValue =  0;
  for (var i = 0; i < arr.length; i++) {
    averageValue += arr[i];
  }
  return averageValue / arr.length;
}
var averageJohn = parseFloat(averageValueCalc(billJohn.tip).toFixed(2));
var averageMark = parseFloat(averageValueCalc(billMark.tip).toFixed(2));

if (averageJohn > averageMark) {
  console.log('The John family left more tips than the Mark family');
} else if (averageJohn < averageMark) {
  console.log('The Mark family left more tips than the John family');
}  else {
  console.log('Average tip equally');
}

module.exports = billJohn.tipCalc;
module.exports = billJohn.billEndCalc;
