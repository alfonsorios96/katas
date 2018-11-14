'use strict';

const reduce = array => {
    const stack = [];
    for (const direction of array) {
        if (isOpossite(direction, getLastElement(stack))) {
            stack.pop();
        } else {
            stack.push(direction);
        }
    }
    return stack;
};

const getLastElement = array => {
    return array.length > 0 ? array[array.length - 1] : '';
};

const isOpossite = (a, b) => {
    switch (a) {
        case 'NORTH':
            return b === 'SOUTH';
        case 'SOUTH':
            return b === 'NORTH';
        case 'WEST':
            return b === 'EAST';
        case 'EAST':
            return b === 'WEST';
    }
};

module.exports = reduce;
