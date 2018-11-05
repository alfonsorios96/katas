'use strict';

const assert = require('chai').assert;
const permutations = require('../../src/permutations');

suite('Permutations kata', () => {
    test('Case 1', () => {
        assert.deepEqual(permutations('a'), ['a']);
    });
    test('Case 2', () => {
        assert.deepEqual(permutations('ab').sort(), ['ab', 'ba'].sort());
    });
    test('Case 3', () => {
        assert.deepEqual(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
    });
});
