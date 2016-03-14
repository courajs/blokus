import Matrix from 'array-matrix';

export function rotateCW(matrix) {
  let height = matrix.length;
  let width = matrix[0].length;

  let newHeight = width;
  let newWidth = height;

  let result = Matrix(newWidth, newHeight);

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      let newRow = col;
      let newCol = (newWidth - 1) - row;
      result[newRow][newCol] = matrix[row][col];
    }
  }

  return result;
}

export function rotateCCW(matrix) {
  return rotateCW(rotateCW(rotateCW(matrix)));
}
