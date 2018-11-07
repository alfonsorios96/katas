'use strict';

const assert = require('chai').assert;
const matrixMultiplication = require('../../src/squareMatrixMultiplication');

suite('Square Matrix Multiplication kata', () => {
    test('Case', () => {
        assert.deepEqual(matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]]), [[5, 4], [11, 8]]);
    });
});
