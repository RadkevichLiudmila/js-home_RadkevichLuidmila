'use strict';

const sizeMatrix = prompt('Введите размер матрицы', '');
let matrix = '';

for (let i = 0; i < sizeMatrix; i++) {
  for (let j = 0; j < sizeMatrix; j++) {
    if ((i % 2 === 0  && j % 2 === 0) || (i % 2 === 1  && j % 2 === 1)) {
      matrix += '#';
    } else {
      matrix += ' ';
    }
  }
  matrix += '\n';
}

alert(matrix);
