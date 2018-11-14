'use strict';

const assert = require('chai').assert;
const dirReduc = require('../../src/directionsReduction');

suite('Directions Reduction Kata', () => {
    test('Case 1', () => {
        assert.deepEqual(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
    });

    test('Case 2', () => {
        assert.deepEqual(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]), []);
    });
});
