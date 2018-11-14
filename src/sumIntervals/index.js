'use strict';

const sumIntervals = (intervals) => {
    return Object
        .assign([], intervals)
        .sort((a, b) => a[0] - b[0])
        .reduce((accumulator, iterator) => {
            const com = accumulator[accumulator.length - 1];
            if (com && (com[1] >= iterator[0] && iterator[0] >= com[0])) {
                let tmp = iterator.concat(com).sort((a, b) => a - b);
                accumulator[accumulator.length - 1] = [tmp[0], tmp[tmp.length - 1]];
            } else {
                accumulator.push(iterator);
            }
            return accumulator;
        }, []).map(item => {
            let counter = 0;
            for (let i = item[0]; i < item[1]; i++) {
                counter++;
            }
            return counter;
        }).reduce((accumulator, iterator) => accumulator + iterator, 0);
};

module.exports = sumIntervals;
