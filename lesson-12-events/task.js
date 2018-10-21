'use strict';

(function imageValue() {
  var DragShiftX;
  var DragShiftY;
  var elements = document.getElementsByTagName('img');
  
  for (var i = elements.length - 1; i >= 0; i--) {
    elements[i].style.left = elements[i].offsetLeft + 'px';
    elements[i].style.top = elements[i].offsetTop + 'px';
    elements[i].style.zIndex = '0';
    elements[i].style.position = 'absolute';
    elements[i].addEventListener('mousedown', Drag_Start, false);
  }

  function Drag_Start(EO) {   
    EO = EO || window.event;
    const DragImage = EO.target;
    var mouseX = EO.pageX;
    var mouseY = EO.pageY;
    var imageX = DragImage.offsetLeft;
    var imageY = DragImage.offsetTop;
    DragShiftX = mouseX - imageX;
    DragShiftY = mouseY - imageY;
    window.addEventListener('mousemove', Drag_Move, false);
    window.addEventListener('mouseup', Drag_Stop, false);
    window.removeEventListener('mouseout', Drag_Stop, false);
  };

  function Drag_Move(EO) {
    if (DragShiftX && DragShiftY) {
      EO = EO || window.event;
      EO.preventDefault();
      const DragImage = EO.target;
      var mouseX = EO.pageX;
      var mouseY = EO.pageY;
      DragImage.style.zIndex = '1';
      var imageX = mouseX - DragShiftX;
      var imageY = mouseY - DragShiftY;
      DragImage.style.left = imageX + 'px';
      DragImage.style.top = imageY + 'px';
    };
  };

  function Drag_Stop(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    const DragImage = EO.target;
    DragImage.style.zIndex = '0';
    window.removeEventListener('mousemove', Drag_Move, false);
    window.removeEventListener('mouseup', Drag_Stop, false);
    window.removeEventListener('mouseout', Drag_Stop, false);
  };
})();