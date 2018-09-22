'use strict';

function deleteClass(obj, cls) {
  let arr = obj.className.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(cls) >= 0) {
      arr = arr.splice(arr.indexOf(cls), 1);
    }
  }
  obj.className = arr.join(' ');
  return obj.className;
}
