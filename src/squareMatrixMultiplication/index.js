'use strict';

const getSquareMatrixMultiplication = (matrixA, matrixB) => {
    const order = matrixA.length;
    let counter, sum, matrix = new Array(order);

    for (let i = 0; i < order; i++) {
        matrix[i] = new Array(order);
    }

    for (let x = 0; x < order; x++) {
        counter = 0;

        while (counter < order) {
            sum = 0;
            for (let y = 0; y < order; y++) {
                sum = sum + (matrixA[x][y] * matrixB[y][counter]);
            }
            matrix[x][counter] = sum;
            counter++;
        }
    }

    return matrix;
};

module.exports = getSquareMatrixMultiplication;
