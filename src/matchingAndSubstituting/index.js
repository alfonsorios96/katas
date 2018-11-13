'use strict';

const matchAndSubstituting = (s, prog, version) => {
    const rows = s.split('\n');
    if (!isValidPhone(rows[3]) || !isValidVersion(rows[5])) {
        return 'ERROR: VERSION or PHONE';
    }
    let result = [
        parseTitle(prog),
        AUTHOR,
        PHONE,
        DATE,
        rows[5].split(':')[1].trim() === '2.0' ? `Version: ${rows[5].split(':')[1].trim()}` : `Version: ${version}`
    ].join(' ');
    return result;
};

const AUTHOR = 'Author: g964';
const PHONE = 'Phone: +1-503-555-0090';
const DATE = 'Date: 2019-01-01';

const parseDate = date => {
    date = date.split(':')[1].trim();
    date = new Date(date);
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const result = [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join('-');
    return `Date: ${result}`;
};

const parseTitle = title => {
    return `Program: ${title}`;
};

const isValidPhone = phone => {
    const value = phone.split(':')[1].trim();
    const regex = /(\+1-)[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    return regex.test(value);
};

const isValidVersion = version => {
    const value = version.split(':')[1].trim();
    const regex = /^[0-9]+[.][0-9]+$/;
    return regex.test(value);
};

module.exports = matchAndSubstituting;

