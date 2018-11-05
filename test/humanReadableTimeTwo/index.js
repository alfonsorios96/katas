'use strict';

const assert = require('chai').assert;
const formatDuration = require('../../src/humanReadableTimeTwo');

suite('Human Readable Time Two kata', () => {
    test('Case 1', () => {
        assert.strictEqual(formatDuration(1), "1 second");
    });
    test('Case 2', () => {
        assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    });
    test('Case 3', () => {
        assert.strictEqual(formatDuration(120), "2 minutes");
    });
    test('Case 4', () => {
        assert.strictEqual(formatDuration(3600), "1 hour");
    });
    test('Case 5', () => {
        assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    });
});
