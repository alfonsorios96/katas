'use strict';

const getAlphabetPosition = string => {
    return string
            .split('')
            .filter(char => {
                const ascii = char.charCodeAt(0);
                if((ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123)) {
                    return true;
                } else {
                    return false;
                }
            })
            .map(char => {
                const ascii = char.charCodeAt(0);
                if (ascii > 64 && ascii < 91) {
                    return ascii - 64;
                } else {
                    return ascii - 96;
                }
            }).join(' ');
};

module.exports = getAlphabetPosition;
