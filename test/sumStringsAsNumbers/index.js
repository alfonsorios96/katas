'use strict';

const assert = require('chai').assert;
const sum = require('../../src/sumStringsAsNumbers');

suite('Sum Strings as Numbers', () => {
    test('Case', () => {
        assert.strictEqual(sum('123', '456'), '579');
    });

    test('Case 2', () => {
        assert.strictEqual(sum('8797', '45'), '8842');
    });

    test('Case 3', () => {
        assert.strictEqual(sum('800', '9567'), '10367');
    });

    test('Case 4', () => {
        assert.strictEqual(sum('99', '1'), '100');
    });
});
