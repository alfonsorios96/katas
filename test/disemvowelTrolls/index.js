'use strict';

const assert = require('chai').assert;
const disemvowel = require('../../src/disemvowelTrolls');

suite('Disemvowel Trolls Kata', () => {
    test('Case', () => {
        assert.strictEqual(disemvowel("This website is for losers LOL!"),
            "Ths wbst s fr lsrs LL!");
    });
});
