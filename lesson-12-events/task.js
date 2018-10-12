'use strict';

(function imageValue() {
  var DragImage = null;
  var DragShiftX;
  var DragShiftY;
  var elements = document.getElementsByTagName('img');
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.left = elements[i].offsetLeft + 'px';
    elements[i].style.top = elements[i].offsetTop + 'px';
    elements[i].style.zIndex = '0';
  }
  for (i = 0; i < elements.length; i++) {
    elements[i].style.position = 'absolute';
  }

  document.querySelector('div').addEventListener('mousedown', function (EO) {
    EO = EO || window.event;
    DragImage = EO.target.id;
    var imageObj = document.getElementById(DragImage);
    imageObj.addEventListener('mousedown', Drag_Start, false);
    document.querySelector('div').addEventListener('mousemove', Drag_Move, false);
    document.querySelector('div').addEventListener('mouseup', Drag_Stop, false);
  });
  
  function Drag_Start(EO) {
    EO = EO || window.event;
    var mouseX = EO.pageX;
    var mouseY = EO.pageY;
    var imageObj = document.getElementById(DragImage);
    var imageX = imageObj.offsetLeft;
    var imageY = imageObj.offsetTop;
    DragShiftX = mouseX - imageX;
    DragShiftY = mouseY - imageY;

    for (i = 0; i < elements.length; i++) {
      elements[i].style.zIndex = '0';
    }
    imageObj.style.zIndex = '1';
  };

  function Drag_Move(EO) {
    if (DragShiftX && DragShiftY) {
      EO = EO || window.event;
      var mouseX = EO.pageX;
      var mouseY = EO.pageY;
      var imageObj = document.getElementById(DragImage);
      var imageX = mouseX - DragShiftX;
      var imageY = mouseY - DragShiftY;
      imageObj.style.left = imageX + 'px';
      imageObj.style.top = imageY + 'px';
    };
  };

  function Drag_Stop(EO) {
    if (DragShiftX && DragShiftY) {
      EO = EO || window.event;
      var mouseX = EO.pageX;
      var mouseY = EO.pageY;
      var imageObj = document.getElementById(DragImage);
      var imageX = mouseX - DragShiftX;
      var imageY = mouseY - DragShiftY;
      imageObj.style.left = imageX + 'px';
      imageObj.style.top = imageY + 'px';
      DragImage = null;
      DragShiftX = null;
      DragShiftY = null;
    };
  };

})();