'use strict';

const solverSudoku = matrix => {
    for (const row of matrix) {
        const missingNumbers = getNumbersMissing(row);
        const options = getOptions(row, missingNumbers);
    }
};

const getPermutations = array => {
    if (array.length === 1) {
        return [array];
    }
    let permutationsResult = [];

    const smallerPermutations = getPermutations(array.slice(1));

    const firstOption = array[0];

    for (const permIndex in smallerPermutations) {
        const smallerPermutation = smallerPermutations[permIndex];
        for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
            const permutationPrefix = smallerPermutation.slice(0, positionIndex);
            const permutationSuffix = smallerPermutation.slice(positionIndex);
            permutationsResult.push(permutationPrefix.concat([firstOption], permutationSuffix));
        }
    }
    permutationsResult = new Set(permutationsResult);
    permutationsResult = [...permutationsResult];
    return permutationsResult;

};

const getOptions = (row, missingNumbers) => {
    const permutations = getPermutations(missingNumbers);
    for (const permutation of permutations) {
        /*
        * for (const number of missingNumbers) {
            permutation.splice(row.indexOf(0), 1, number);
        }*/
        console.log(permutation);
    }
};

const getNumbersMissing = row => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = numbers.filter(number => !row.includes(number));
    return result;
};

module.exports = solverSudoku;
