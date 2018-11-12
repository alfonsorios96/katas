'use strict';

const assert = require('chai').assert;
const valuate = require('../../src/valuateMathematicalExpression');

suite('Valuate Mathematical Expression kata', () => {
    test('Case sum simple', () => {
        assert.strictEqual(valuate('5 - -1'), 5 - -1);
    });

    test('Case sum simple 2', () => {
        assert.strictEqual(valuate('5 + -1'), 4 + -1);
    });

    test('Case multiply simple', () => {
        assert.strictEqual(valuate('5*1'), 5 * 1);
    });

    test('Case multiply simple 2', () => {
        assert.strictEqual(valuate('(8)(9)'), 72);
    });

    test('Jerarchy test', () => {
        assert.strictEqual(valuate('(2 / (2 + 3.33) * 4) - -6'), (2 / (2 + 3.33) * 4) - -6);
    });
});
