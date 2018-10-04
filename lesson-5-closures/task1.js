'use strict';

let sizeMatrix = prompt('Введите размер матрицы', 8);
sizeMatrix = sizeMatrix || 8;

function buildMatrix(size) {
  let matrix = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
        matrix += '#';
      } else {
        matrix += ' ';
      }
    }
    matrix += '\n';
  }
  return matrix;
}
console.log(buildMatrix(sizeMatrix));
