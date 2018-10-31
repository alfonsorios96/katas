'use strict';

const getHighestAndLowestNumber = string => {
    let array = string.split(' ');
    array = array.map(number => Number(number));
    const highest = array.reduce((accumulator, item) => item > accumulator ? item : accumulator);
    const lowest = array.reduce((accumulator, item) => item < accumulator ? item : accumulator);
    return `${highest} ${lowest}`;
};

module.exports = getHighestAndLowestNumber;
