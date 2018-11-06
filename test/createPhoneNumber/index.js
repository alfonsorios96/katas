'use strict';

const assert = require('chai').assert;
const createPhoneNumber = require('../../src/createPhoneNumber');

suite('Create Phone Number Kata', () => {
    test('Case', () => {
        assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
});
