'use strict';

const assert = require('chai').assert;
const sumIntervals = require('../../src/sumIntervals');

suite('Sum of Intervals kata', () => {
    test('Case 1', () => {
        assert.strictEqual(sumIntervals([
            [1, 2],
            [6, 10],
            [11, 15]
        ]), 9);
    });
    test('Case 2', () => {
        assert.strictEqual(sumIntervals([
            [1, 4],
            [7, 10],
            [3, 5]
        ]), 7);
    });
    test('Case 3', () => {
        assert.strictEqual(sumIntervals([
            [1, 5],
            [10, 20],
            [1, 6],
            [16, 19],
            [5, 11]
        ]), 19);
    });
});
