'use strict';

const getPermutations = array => {
    if (array.length === 1) {
        return [array];
    }
    let permutationsResult = [];

    const smallerPermutations = getPermutations(array.slice(1));

    const firstOption = array[0];

    for(const permIndex in smallerPermutations) {
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

module.exports = getPermutations;
