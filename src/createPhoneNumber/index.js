'use strict';

const getPhoneNumber = numbers => {
    numbers = numbers.map(number => number.toString());
    numbers.splice(0, 0, '(');
    numbers.splice(4, 0, ')');
    numbers.splice(5, 0, ' ');
    numbers.splice(9, 0, '-');
    return numbers.join('');
};

module.exports = getPhoneNumber;
