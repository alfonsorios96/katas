'use strict';

const validator = require('../sudokuSolutionValidator');

const solverSudoku = matrix => {
    const options = getAllOptions(matrix);
    const matrices = combineOptions(options);
    console.log(matrices);
};

const combineOptions = options => {
    const matrices = [];

    const paths = generatePaths(options);
    let counter = 0;
    do {
        const matrix = [];
        for (const option of options) {
            const position = paths[counter];
            while (option[position] === undefined) {
                counter++;
            }
            matrix.push(option[position]);
            counter++;
        }
        if (validator(matrix)) {
            matrices.push(matrix);
        }
    } while (counter < paths.length);

    return matrices;
};

const generatePaths = options => {
    let paths = [];
    let major = options.reduce((accumulator, iterator) => {
        if (Array.isArray(accumulator)) {
            return accumulator.length < iterator.length ? iterator.length : accumulator.length;
        } else {
            return accumulator < iterator.length ? iterator.length : accumulator;
        }
    });
    const numbers = [];
    major--;
    while (major >= 0) {
        numbers.push(major);
        major--;
    }
    for (const permutation of getPermutationsWithRepeats(numbers, options.length)) {
        paths.push(permutation);
    }
    return paths;
};

// PERMUTATION GENERATOR ------------------------------

// getPermutationsWithRepeats :: [a] -> Int -> Generator [a]
function* getPermutationsWithRepeats(xs, intGroup) {
    const
        vs = Array.from(xs),
        intBase = vs.length,
        intSet = Math.pow(intBase, intGroup);
    if (0 < intBase) {
        let index = 0;
        while (index < intSet) {
            const
                ds = unfoldr(
                    v => 0 < v ? (() => {
                        const rd = quotRem(v, intBase);
                        return Just(Tuple(vs[rd[1]], rd[0]))
                    })() : Nothing(),
                    index++
                );
            yield replicate(
                intGroup - ds.length,
                vs[0]
            ).concat(ds);
        }

    }
}

// GENERIC FUNCTIONS ----------------------------------

// Just :: a -> Maybe a
const Just = x => ({
    type: 'Maybe',
    Nothing: false,
    Just: x
});

// Nothing :: Maybe a
const Nothing = () => ({
    type: 'Maybe',
    Nothing: true,
});

// Tuple (,) :: a -> b -> (a, b)
const Tuple = (a, b) => ({
    type: 'Tuple',
    '0': a,
    '1': b,
    length: 2
});

// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    0 < xs.length ? (() => {
        const unit = 'string' !== typeof xs[0] ? (
            []
        ) : '';
        return unit.concat.apply(unit, xs);
    })() : [];

// index (!!) :: [a] -> Int -> a
// index (!!) :: String -> Int -> Char
const index = (xs, i) => xs[i];

// quotRem :: Int -> Int -> (Int, Int)
const quotRem = (m, n) =>
    Tuple(Math.floor(m / n), m % n);

// replicate :: Int -> a -> [a]
const replicate = (n, x) =>
    Array.from({
        length: n
    }, () => x);

// show :: a -> String
const show = x => JSON.stringify(x);

// toLower :: String -> String
const toLower = s => s.toLocaleLowerCase();

// unfoldr(x => 0 !== x ? Just([x, x - 1]) : Nothing(), 10);
// --> [10,9,8,7,6,5,4,3,2,1]

// unfoldr :: (b -> Maybe (a, b)) -> b -> [a]
const unfoldr = (f, v) => {
    let
        xr = [v, v],
        xs = [];
    while (true) {
        const mb = f(xr[1]);
        if (mb.Nothing) {
            return xs
        } else {
            xr = mb.Just;
            xs.push(xr[0])
        }
    }
};

const getPermutationsNoRepeats = array => {
    if (array.length === 1) {
        return [array];
    }
    let permutationsResult = [];

    const smallerPermutations = getPermutationsNoRepeats(array.slice(1));

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

const getAllOptions = matrix => {
    const options = [];
    for (const row of matrix) {
        const alternatives = getOptionsByRow(row);
        options.push(alternatives);
    }
    return options;
};

const getOptionsByRow = row => {
    const result = [];
    const missingNumbers = getNumbersMissing(row);
    const permutations = getPermutationsNoRepeats(missingNumbers);
    const originalRow = row.slice();
    for (const permutation of permutations) {
        for (const number of permutation) {
            row.splice(row.indexOf(0), 1, number);
        }
        result.push(row);
        row = originalRow.slice();
    }
    return result;
};

const getNumbersMissing = row => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = numbers.filter(number => !row.includes(number));
    return result;
};

module.exports = solverSudoku;
