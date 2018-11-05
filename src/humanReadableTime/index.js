'use strict';

const getHumanReadableTime = (seconds) => {
    let time = getMinutes(seconds);
    time = Object.assign(time, getHours(time.minutes));
    return `${time.hours}:${time.minutes}:${time.seconds}`;
};

const getMinutes = number => {
    const time = {
        minutes: formatNumber(number / 60),
        seconds: formatNumber(number % 60)
    };
    return time;
};

const getHours = number => {
    const time = {
        hours: formatNumber(number / 60),
        minutes: formatNumber(number % 60)
    };
    return time;
};

const formatNumber = number => {
    const stringNumber = number.toString().split('.')[0];
    let result = '';
    if (Number(stringNumber) < 10) {
        result = `0${stringNumber}`;
    } else {
        result = stringNumber;
    }
    return result;
};

module.exports = getHumanReadableTime;
