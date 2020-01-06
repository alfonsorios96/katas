'use strict';

const removeNb = n => {
    return _getCombinations(n);
};

const _getArray = n => {
    let array = [];
    let x = 1;

    while (x <= n) {
        array = [...array, x];
        x++;
    }

    return array;
};

const _getSum = n => {
    return _getArray(n).reduce((acc, number) => acc + number, 0);
};

const _existArray = (set, array) => {
    return set.some(_array => array[0] === _array[0] && array[1] === _array[1]);
};

const _getCombinations = n => {
    let array = _getArray(n);
    const results = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let a = array[i], b = array[j];
            if (((a * b) + a + b) === _getSum(n)) {
                results.push([a, b]);
            } else {
                continue;
            }
            b = array[i], a = array[j];
            if (!_existArray(results, [a, b]) && ((a * b) + a + b) === _getSum(n)) {
                results.push([
                    a, b
                ]);
            }
        }
    }
    return results;
};

module.exports = removeNb;
