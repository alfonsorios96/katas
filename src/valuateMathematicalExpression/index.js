'use strict';

const executeFunctionAsString = string => {
    const expression = getExpression(string);
    console.log('expression', expression);
};

const multiplicate = (a, b) => a * b;
const divide = (a, b) => a / b;
const sum = (a, b) => a + b;
const rest = (a, b) => a - b;

const getExpression = string => {
    let expression = '';
    const indexOfJerarchyOpen = string.indexOf('(');
    if (indexOfJerarchyOpen !== -1) {
        const otherIndexOFJerarchyOpen = string.indexOf('(', indexOfJerarchyOpen + 1);
        if (otherIndexOFJerarchyOpen !== -1) {
            expression = getExpression(string.substring(otherIndexOFJerarchyOpen, string.length - 1));
            const result = executeExpression(expression);
        } else {
            const indexOfJerarchyClose = string.indexOf(')', indexOfJerarchyOpen + 1);
            expression = string.substring(indexOfJerarchyOpen + 1, indexOfJerarchyClose - 1);
        }
        return expression;
    }
};

const executeExpression = expression => {
    if (expression !== undefined) {
        expression = expression.trim();
        // Evaluate the first priority (* & /)
        const operations = expression.match(/[\*\/]/g);
        const numbers = expression.match(/[.0-9]/g);
        const operation = '';
        let a, b;
        switch (operation) {
            case '+':
                return sum(a, b);
                break;
            case '-':
                return rest(a, b);
                break;
            case '*':
                return multiplicate(a, b);
                break;
            case '/':
                return divide(a, b);
                break;
            default:
                return Number(expression);
        }
    }
};

module.exports = executeFunctionAsString;
