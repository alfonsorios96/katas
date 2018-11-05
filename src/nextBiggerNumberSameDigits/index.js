'use strict';

const getNextBiggerNumberSameDigits = number => {
    let result = -1;
    let permutations = getArrayPermutations(number);
    permutations = orderArray(permutations);
    permutations = permutations.map(item => Number(item));
    const index = permutations.indexOf(number);
    if (index === -1) {
        result = index;
    } else {
        result = permutations[index - 1];
    }
    return result;
};

const getArrayPermutations = number => {
    let array = number.toString().split('');
    array = array.map(item => Number(item));
    let arrayPermutated = permutations(array);
    arrayPermutated = arrayPermutated.map(item => item.join(''));
    return arrayPermutated;
};

const orderArray = array => {
    const result = [];
    do {
        const biggest = getBiggestNumber(array);
        array.splice(array.indexOf(biggest), 1);
        result.push(biggest);
    }
    while (array.length > 0);
    return result;
};

const getBiggestNumber = array => {
    return array.reduce((accumulator, item) => item > accumulator ? item : accumulator);
};

const permutations = array => {
    let result = [];

    for (const index in array) {
        let rest = permutations(array.slice(0, index).concat(array.slice(index + 1)));

        if (!rest.length) {
            result.push([array[index]]);
        } else {
            for (const j in rest) {
                result.push([array[index]].concat(rest[j]));
            }
        }
    }
    result = result.filter(item => item.length === array.length);
    return result;
};


module.exports = getNextBiggerNumberSameDigits;
