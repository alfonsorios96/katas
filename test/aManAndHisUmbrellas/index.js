'use strict';

const assert = require('chai').assert;
const minUmbrellas = require('../../src/aManAndHisUmbrellas');

suite('A Man And Hist Umbrellas Kata', () => {
  test('Case 1', () => {
    assert.strictEqual(minUmbrellas(["cloudy"]), 0);
  });
  test('Case 2', () => {
    assert.strictEqual(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]), 1);
  });
  test('Case 3', () => {
    assert.strictEqual(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]), 2);
  });
  test('Case 4', () => {
    assert.strictEqual(minUmbrellas(["sunny","clear","sunny","sunny","clear","clear","sunny","rainy","clear","clear","windy","clear","clear","windy","sunny","clear","cloudy","clear","clear","sunny","sunny","rainy","thunderstorms","sunny","clear","windy","thunderstorms","windy","windy","clear","windy","clear","clear","clear","windy","clear","windy","sunny","windy","clear","windy","sunny","sunny","sunny","windy","sunny","sunny","sunny","windy","windy","sunny","sunny","rainy","thunderstorms","rainy","rainy","clear","windy","windy","thunderstorms","windy","clear","windy","clear","sunny","windy","cloudy","sunny","clear","clear","clear","sunny","cloudy","clear","windy","rainy","windy","clear","clear","sunny","sunny","sunny","sunny","cloudy","clear","clear","sunny","windy","windy","windy","thunderstorms","windy","windy","clear","thunderstorms","sunny","sunny","sunny","sunny","clear"]), 3);
  });
});
