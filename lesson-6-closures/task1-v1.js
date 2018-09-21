function billEndCalc(billBeginnerArr) {
  var tipArr = [];
  var billEndArr = [];

  function tipCalc() {
    for (var i = 0; i < billBeginnerArr.length; i++) {
      if (billBeginnerArr[i] <= 50) {
        tipArr[i] = parseFloat((billBeginnerArr[i] * 0.2).toFixed(2));
      }  else if (billBeginnerArr[i] > 200) {
        tipArr[i] = parseFloat((billBeginnerArr[i] * 0.1).toFixed(2));
      }  else {
        tipArr[i] = parseFloat((billBeginnerArr[i] * 0.15).toFixed(2));
      }
    }
  }
  tipCalc();
  console.log('Arrey tips: ' + tipArr.join(', '));

  for (var j = 0; j < billBeginnerArr.length; j++) {
    billEndArr[j] = billBeginnerArr[j] + tipArr[j];
  }
  console.log('Arrey bills + tips: '  + billEndArr.join(', '));
  return billEndArr;
}

billEndCalc([124, 48, 268, 180, 42]);

module.exports = billEndCalc;
