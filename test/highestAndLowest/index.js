'use strict';

const assert = require('chai').assert;
const highAndLow = require('../../src/highestAndLowest');

suite('High And Low kata', () => {
    test('Case', () => {
        assert.strictEqual(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
    });
});
