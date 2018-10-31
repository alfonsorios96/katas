'use strict';

const assert = require('chai').assert;
const digital_root = require('../../src/rootNumber');

suite('Root Number kata', () => {
    test('Case 1', () => {
        assert.strictEqual(digital_root(16), 7);
    });

    test('Case 2', () => {
        assert.strictEqual(digital_root(456), 6);
    });
});
