'use strict';

const sum = (a, b) => {
    const arrayA = a.split('').reverse();
    const arrayB = b.split('').reverse();
    const arrayC = [];
    let index = 0;
    let aux = 0;
    while (arrayA[index] !== undefined || arrayB[index] !== undefined) {
        const valueA = arrayA[index] !== undefined ? arrayA[index] : 0;
        const valueB = arrayB[index] !== undefined ? arrayB[index] : 0;
        let sum = Number(valueA) + Number(valueB) + aux;
        aux = 0;
        if (sum > 9) {
            sum = sum - 10;
            aux = 1;
        }
        arrayC.push(sum);
        index++;
    }
    if (aux !== 0) {
        arrayC.push(aux);
    }
    return arrayC.reverse().join('').replace(/^0*/, '');
};

module.exports = sum;
