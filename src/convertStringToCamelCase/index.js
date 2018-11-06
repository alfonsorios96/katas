'use strict';

const getCamelCaseString = string => {
    let result = string;
    result = string
        .split(/[\-\_]/g)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    result = string.charAt(0) + result.slice(1);
    return result;
};

module.exports = getCamelCaseString;
