'use strict';

const getRootNumber = (number) => {
    let result = 0;
    const base = baseCase(number);
    if (base > 9) {
        result = getRootNumber(base);
    } else {
        result = base;
    }
    return Number(result);
};

const baseCase = (number) => {
    const string = number.toString();
    const array = [...string];
    return array.reduce((accumulator, digit) => {
        return Number(accumulator) + Number(digit);
    });
};

module.exports = getRootNumber;
