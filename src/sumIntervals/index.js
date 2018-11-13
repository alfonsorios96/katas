'use strict';

const sumIntervals = (matrix) => {

};

const reduceSeries = series => {

};

const getCompleteSeries = matrix => {
    const series = [];
    for (const row of matrix) {
        const min = row[0];
        const max = row[1];
        const numbers = [];
        for (let i = 0; i < matrix.length; i++) {
            const a = matrix[i][0];
            const b = matrix[i][1];
            if (row !== matrix[i]) {
                if (max < a || b < min) {
                    numbers[0] = min;
                    numbers[1] = max;
                } else {

                }
            }
        }
    }
    return series;
};

module.exports = sumIntervals;
