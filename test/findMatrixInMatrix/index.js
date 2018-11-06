'use strict';

const assert = require('chai').assert;
const findMatrixIn = require('../../src/findMatrixInMatrix');

suite('Find Matrix in a Matrix Kata', () => {
    let matrix, answer;

    test('Case 1', () => {
        matrix = [
            [1, 1, 1],
            [0, 0, 0],
            [1, 1, 1]
        ];
        answer = [
            [1, 1],
            [0, 0]
        ];
        assert.deepEqual(findMatrixIn(matrix), answer);
    });

    test('Case 2', () => {
        matrix = [
            [1, 1, 1, 0],
            [0, 0, 0, 1],
            [1, 1, 1, 0],
            [0, 0, 0, 1]
        ];
        answer = [
            [1, 1, 1, 0],
            [0, 0, 0, 1],
            [1, 1, 1, 0],
            [0, 0, 0, 1]
        ];
        assert.deepEqual(findMatrixIn(matrix), answer);
    });

    test('Case 3', () => {
        matrix = [
            [1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1],
            [1, 1, 1, 1, 1]
        ];
        answer = [
            [1, 0, 1, 0],
            [0, 1, 0, 1],
            [1, 0, 1, 0],
            [0, 1, 0, 1]
        ];
        assert.deepEqual(findMatrixIn(matrix), answer);
    });

    test('Case 4', () => {
        matrix = [
            [1, 1, 1],
            [0, 1, 0],
            [1, 1, 1]
        ];
        answer = [];
        assert.deepEqual(findMatrixIn(matrix), answer);
    });

    test('Case 5', () => {
        matrix = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 1]];
        answer = [
            [1, 0],
            [1, 0]
        ];
        assert.deepEqual(findMatrixIn(matrix), answer);
    });

    test('Case 6', () => {
        matrix = [
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1],
            [0, 1, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0, 0]];
        answer = [
            [0, 0],
            [1, 1]
        ];
        assert.deepEqual(findMatrixIn(matrix), answer);
    });
});
