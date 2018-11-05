'use strict';

const assert = require('chai').assert;
const humanReadable = require('../../src/humanReadableTime');

suite('Human Readable Time kata', () => {
    test('Case 1', () => {
        assert.strictEqual(humanReadable(0), '00:00:00');
    });
    test('Case 2', () => {
        assert.strictEqual(humanReadable(5), '00:00:05');
    });
    test('Case 3', () => {
        assert.strictEqual(humanReadable(60), '00:01:00');
    });
    test('Case 4', () => {
        assert.strictEqual(humanReadable(86399), '23:59:59');
    });
    test('Case 5', () => {
        assert.strictEqual(humanReadable(359999), '99:59:59');
    });
});
