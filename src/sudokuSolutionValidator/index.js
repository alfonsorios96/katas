'use strict';

const sudokuIsValid = matrix => {
    let isValid;
    const grids = getAllSubMatrixByOrder(matrix, 3);
    for (const row of matrix) {
        isValid = isValidLine(row);
        if (!isValid) {
            return false;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        const column = [];
        for (let j = 0; j < matrix.length; j++) {
            column.push(matrix[i][j]);
        }
        isValid = isValidLine(column);
        if (!isValid) {
            return false;
        }
    }
    for (const subMatrix of grids) {
        isValid = isValidGrid(subMatrix);
        if (!isValid) {
            return false;
        }
    }
    return isValid;
};

const getAllSubMatrixByOrder = (matrix, order) => {
    const matrices = [];
    const vectors = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
    let x = 0, y = 0;
    for (const vector of vectors) {
        x = 0;
        const i = vector[0];
        const j = vector[1];
        const row = [];
        while (x < order) {
            const column = [];
            y = 0;
            while (y < order) {
                column.push(matrix[i + x][j + y]);
                y++;
            }
            x++;
            row.push(column);
        }
        matrices.push(row);
    }
    return matrices;
};

const isValidLine = line => line.reduce((accumulator, iterator) => accumulator + iterator) === 45 ? !line.includes(0) : false;

const isValidGrid = matrix => matrix
    .map(row => row
        .reduce((accumulator, iterator) => accumulator + iterator))
    .reduce((accumulator, iterator) => accumulator + (iterator === 0 ? -1 : iterator)) === 45;

module.exports = sudokuIsValid;
