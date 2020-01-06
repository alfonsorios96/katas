'use strict';

const assert = require('chai').assert;
const removeNb = require('../../src/isMyFriend');

suite('Is my friend cheating kata', () => {
    test('Case 1', () => {
        assert.deepEqual(removeNb(26), [[15, 21], [21, 15]]);
    });
    test('Case 2', () => {
        assert.deepEqual(removeNb(100), []);
    });
});
