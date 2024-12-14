const { NotImplementedError } = require('../extensions/index.js');

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
	let newMatrix = [];
	let count = 0;

	for (let i = 0; i < matrix.length; i++) {
		let subArray = [];                                    							//на каждой итерации делаю подмассив пустым
		for (let j = 0; j < matrix[i].length; j++) {
			if (i > 0) {
				if (matrix[i - 1][j - 1] || matrix[i - 1][j] || matrix[i - 1][j + 1]) { //проверяю предыдущий элемент во всех столбцах
					count++;
				}
			} else if (i === 0 && i < matrix.length - 1) {
				if (matrix[i + 1][j - 1] || matrix[i + 1][j] || matrix[i + 1][j + 1]) { //проверяю следующий элемент во всех столбцах
					count++;
				}
			}
			if (matrix[i][j - 1]) { //проверяю элемент с текущим индексом в предыдущем столбце
				count += 1;
			}
			if (matrix[i][j + 1]) { //проверяю элемент с текущим индексом в следующем столбце
				count += 1;
			}
			subArray.push(count);
			count = 0;
		}
		newMatrix.push(subArray);
	}
	return newMatrix;
}

module.exports = {
	minesweeper
};
