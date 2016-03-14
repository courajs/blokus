export function rotateCW(grid) {
  let height = grid.length;
  let width = grid[0].length;

  let newHeight = width;
  let newWidth = height;

  let result = [];
  for (let i = 0; i < newHeight; i++) {
    result.push(new Array(newWidth));
  }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      let newRow = col;
      let newCol = (newWidth - 1) - row;
      result[newRow][newCol] = grid[row][col];
    }
  }

  return result;
}

export function rotateCCW(grid) {
  return rotateCW(rotateCW(rotateCW(grid)));
}
