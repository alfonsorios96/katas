'use strict';

const assert = require('chai').assert;
const toCamelCase = require('../../src/convertStringToCamelCase');

suite('Convert String To Camel Case Kata', () => {
    test('Case 1', () => {
        assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
    });
    test('Case 2', () => {
        assert.strictEqual(toCamelCase(''), '');
    });
    test('Case 3', () => {
        assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
    });
    test('Case 4', () => {
        assert.strictEqual(toCamelCase("A-B-C"), "ABC");
    });
});
