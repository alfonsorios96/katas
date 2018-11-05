'use strict';

const assert = require('chai').assert;
const nextBigger = require('../../src/nextBiggerNumberSameDigits');

suite('Next Bigger kata', () => {
    test('Case 1', () => {
        assert.strictEqual(nextBigger(12), 21);
    });
    test('Case 2', () => {
        assert.strictEqual(nextBigger(513), 531);
    });
    test('Case 3', () => {
        assert.strictEqual(nextBigger(2017), 2071);
    });
    test('Case 4', () => {
        assert.strictEqual(nextBigger(414), 441);
    });
    test('Case 5', () => {
        assert.strictEqual(nextBigger(144), 414);
    });
});
