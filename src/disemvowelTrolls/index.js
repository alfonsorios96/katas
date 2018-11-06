'use strict';

const getStringWithoutVowels = string => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const array = string.split('');
    const arrayWithoutVowels = array.filter(char => !vowels.includes(char));
    return arrayWithoutVowels.join('');
};

module.exports = getStringWithoutVowels;
