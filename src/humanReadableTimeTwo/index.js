'use strict';

const getHumanReadableTime = (second) => {
    if (second === 0) {
        return 'now';
    }
    let time = {second};
    const generatorTime = format(time);
    for (const iterable of generatorTime) {
        time = Object.assign(time, iterable);
    }
    time = {
        year: time.year,
        day: time.day,
        hour: time.hour,
        minute: time.minute,
        second: time.second
    };
    return parseMessage(time);
};

const parseMessage = time => {
    let message = '';
    const COMMA = ',';
    const PLURAL = 's';
    let index = 0;
    let map = new Map();

    for (const prop in time) {
        if (time[prop] !== '0') {
            message += `${message !== '' ? COMMA : ''} ${time[prop]} ${prop}${time[prop] !== '1' ? PLURAL : ''}`;
            map.set(index, prop);
            index++;
        }
    }
    const prop = map.get(index - 2);
    message = message.substr(1, message.length - 1);
    if (prop !== undefined) {
        message = message.replace(`${prop}, `, `${prop} and `);
        message = message.replace(`${prop}s, `, `${prop}s and `);
    }
    return message;
};

const getMinutes = number => {
    const time = {
        minute: formatNumber(number / 60),
        second: formatNumber(number % 60)
    };
    return time;
};

const getHours = number => {
    const time = {
        hour: formatNumber(number / 60),
        minute: formatNumber(number % 60)
    };
    return time;
};

const getDays = number => {
    const time = {
        hour: formatNumber(number % 24),
        day: formatNumber(number / 24)
    };
    return time;
};

const getYears = number => {
    const time = {
        year: formatNumber(number / 365),
        day: formatNumber(number % 365)
    };
    return time;
};

const formatNumber = number => {
    const stringNumber = number.toString().split('.')[0];
    return stringNumber;
};

function* format(time) {
    yield getMinutes(time.second);
    yield getHours(time.minute);
    yield getDays(time.hour);
    yield getYears(time.day);
}

module.exports = getHumanReadableTime;
