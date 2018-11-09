'use strict';

const validator = require('../sudokuSolutionValidator');

const solverSudoku = matrix => {
    while (!validator(matrix)) {
        const zeros = getZerosPosition(matrix);
        const solutions = [];
        for (const zeroPostion of zeros) {
            const numbers = getNumbersByZero(matrix, zeroPostion);
            if (!Array.isArray(numbers)) {
                solutions.push({
                    position: zeroPostion,
                    value: numbers
                });
            }
        }
        for (const solution of solutions) {
            matrix[solution.position.x][solution.position.y] = solution.value;
        }
    }
    return matrix;
};

const getNumbersByZero = (matrix, position) => {
    const row = getRowByPosition(matrix, position);
    const column = getColumnByPosition(matrix, position);
    const grid = getGridByPosition(matrix, position);
    const result = intersection(row, column, grid);
    return result.length === 1 ? result[0] : result;
};

const getZerosPosition = matrix => {
    const zeros = [];
    for (const x in matrix) {
        for (const y in matrix[x]) {
            if (matrix[x][y] === 0) {
                zeros.push({x: Number(x), y: Number(y)});
            }
        }
    }
    return zeros;
};

const getColumnByPosition = (matrix, position) => {
    const column = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < matrix.length; i++) {
        const number = matrix[i][position.y];
        if (number !== 0) {
            column.push(number);
        }
    }

    return numbers.filter(number => !column.includes(number));
};

const getGridByPosition = (matrix, position) => {
    let grid = [];
    const result = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const grids = [
        [
            {
                x: 0,
                y: 0
            }, {
            x: 0,
            y: 1
        },
            {
                x: 0,
                y: 2
            },
            {
                x: 1,
                y: 0
            }, {
            x: 1,
            y: 1
        },
            {
                x: 1,
                y: 2
            },
            {
                x: 2,
                y: 0
            }, {
            x: 2,
            y: 1
        },
            {
                x: 2,
                y: 2
            }],
        [
            {
                x: 0,
                y: 3
            }, {
            x: 0,
            y: 4
        },
            {
                x: 0,
                y: 5
            },
            {
                x: 1,
                y: 3
            }, {
            x: 1,
            y: 4
        },
            {
                x: 1,
                y: 5
            },
            {
                x: 2,
                y: 3
            }, {
            x: 2,
            y: 4
        },
            {
                x: 2,
                y: 5
            }],
        [
            {
                x: 0,
                y: 6
            }, {
            x: 0,
            y: 7
        },
            {
                x: 0,
                y: 8
            },
            {
                x: 1,
                y: 6
            }, {
            x: 1,
            y: 7
        },
            {
                x: 1,
                y: 8
            },
            {
                x: 2,
                y: 6
            }, {
            x: 2,
            y: 7
        },
            {
                x: 2,
                y: 8
            }],
        [
            {
                x: 3,
                y: 0
            }, {
            x: 3,
            y: 1
        },
            {
                x: 3,
                y: 2
            },
            {
                x: 4,
                y: 0
            }, {
            x: 4,
            y: 1
        },
            {
                x: 4,
                y: 2
            },
            {
                x: 5,
                y: 0
            }, {
            x: 5,
            y: 1
        },
            {
                x: 5,
                y: 2
            }],
        [
            {
                x: 3,
                y: 3
            }, {
            x: 3,
            y: 4
        },
            {
                x: 3,
                y: 5
            },
            {
                x: 4,
                y: 3
            }, {
            x: 4,
            y: 4
        },
            {
                x: 4,
                y: 5
            },
            {
                x: 5,
                y: 3
            }, {
            x: 5,
            y: 4
        },
            {
                x: 5,
                y: 5
            }],
        [
            {
                x: 3,
                y: 6
            }, {
            x: 3,
            y: 7
        },
            {
                x: 3,
                y: 8
            },
            {
                x: 4,
                y: 6
            }, {
            x: 4,
            y: 7
        },
            {
                x: 4,
                y: 8
            },
            {
                x: 5,
                y: 6
            }, {
            x: 5,
            y: 7
        },
            {
                x: 5,
                y: 8
            }],
        [
            {
                x: 6,
                y: 0
            }, {
            x: 6,
            y: 1
        },
            {
                x: 6,
                y: 2
            },
            {
                x: 7,
                y: 0
            }, {
            x: 7,
            y: 1
        },
            {
                x: 7,
                y: 2
            },
            {
                x: 8,
                y: 0
            }, {
            x: 8,
            y: 1
        },
            {
                x: 8,
                y: 2
            }],
        [
            {
                x: 6,
                y: 3
            }, {
            x: 6,
            y: 4
        },
            {
                x: 6,
                y: 5
            },
            {
                x: 7,
                y: 3
            }, {
            x: 7,
            y: 4
        },
            {
                x: 7,
                y: 5
            },
            {
                x: 8,
                y: 3
            }, {
            x: 8,
            y: 4
        },
            {
                x: 8,
                y: 5
            }],
        [
            {
                x: 6,
                y: 6
            }, {
            x: 6,
            y: 7
        },
            {
                x: 6,
                y: 8
            },
            {
                x: 7,
                y: 6
            }, {
            x: 7,
            y: 7
        },
            {
                x: 7,
                y: 8
            },
            {
                x: 8,
                y: 6
            }, {
            x: 8,
            y: 7
        },
            {
                x: 8,
                y: 8
            }]
    ];
    grid = grids
        .filter(iterator => {
            const aux = iterator.filter(pos => {
                return pos.x === position.x && pos.y === position.y;
            });
            return aux.length > 0;
        });
    grid = grid[0];
    for (const item of grid) {
        const number = matrix[item.x][item.y];
        if (number !== 0) {
            result.push(number);
        }
    }
    return numbers.filter(number => !result.includes(number));
};

const getRowByPosition = (matrix, position) => {
    const row = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < matrix.length; i++) {
        const number = matrix[position.x][i];
        if (number !== 0) {
            row.push(number);
        }
    }

    return numbers.filter(number => !row.includes(number));
};

const intersection = (row, column, grid) => row.filter(item => column.indexOf(item) !== -1).filter(item => grid.indexOf(item) !== -1);

module.exports = solverSudoku;
