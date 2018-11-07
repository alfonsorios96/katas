'use strict';

const getSubMatrixLargest = (matrix = [], matrices = []) => {
    const order = matrix.length;

    if (matrix.length > 0) {
        const isValid = sameZerosAndOnes(matrix, order);
        if (isValid) {
            return matrix;
        }
    }

    if (matrices.length > 0) {
        for (const mat of matrices) {
            matrices.splice(matrices.indexOf(mat), 1);
            const aux = getSubMatrixLargest(mat, matrices);
            if (aux) {
                return aux;
            }
        }
    } else {
        const isValid = sameZerosAndOnes(matrix, order);
        if (isValid) {
            return matrix;
        } else {
            const decrement = order % 2 === 0 ? 2 : 1;
            const otherMatrices = getAllSubMatrixByOrder(matrix, order - decrement);
            return getSubMatrixLargest(otherMatrices[0], otherMatrices);
        }
    }
};

const getAllSubMatrixByOrder = (matrix, order) => {
    const matrices = new Set();
    if (order === 0) {
        return [];
    }
    const vectors = getVectorPositions(matrix, order);
    for (const vector of vectors) {
        const subMatrix = [];
        for (let i = 0; i < order; i++) {
            const rowSubMatrix = [];
            for (let j = 0; j < order; j++) {
                rowSubMatrix.push(matrix[vector.x + i][vector.y + j]);
            }
            subMatrix.push(rowSubMatrix);
        }
        matrices.add(subMatrix);
    }
    return [...matrices];
};

const getVectorPositions = (matrix, order) => {
    const origins = [];
    const dimension = matrix.length;
    const vector = dimension - order + 1;
    let x, y;
    for (x = 0, y = 0; y < vector; x++) {
        origins.push({x, y});
        if ((x + 1) % vector === 0) {
            x = -1;
            y++;
        }
    }
    return origins;
};

const sameZerosAndOnes = (matrix, order) => {
    let zeros = 0, ones = 0;
    for (const array of matrix) {
        for (const number of array) {
            if (number === 0) {
                zeros++;
            }
            if (number === 1) {
                ones++;
            }
            let limit = Math.pow(order, 2);
            limit = limit / 2;
            if (zeros > limit || ones > limit) {
                return false;
            }
        }
    }
    return true;
};

module.exports = getSubMatrixLargest;
