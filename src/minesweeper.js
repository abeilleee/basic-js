/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const rows = matrix.length;
  const cols = matrix[0].length;

  return matrix.map((row, i) => {
    return row.map((_, j) =>
      dirs.reduce((acc, [rowShift, colShift]) => {
        const neighborRow = i + rowShift;
        const neighborCol = j + colShift;

        if (
          neighborRow >= 0 &&
          neighborRow < rows &&
          neighborCol >= 0 &&
          neighborCol < cols &&
          matrix[neighborRow][neighborCol]
        ) {
          acc++;
        }

        return acc;
      }, 0),
    );
  });
}

module.exports = {
  minesweeper,
};
