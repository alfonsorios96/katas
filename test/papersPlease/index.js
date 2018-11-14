'use strict';

const assert = require('chai').assert;
const Inspector = require('../../src/papersPlease');

const inspector = new Inspector();
const bulletin = 'Entrants require passport\nAllow citizens of Arstotzka, Obristan';
inspector.receiveBulletin(bulletin);

const josef = {
    passport: 'ID#: GC07D-FU8AR\nNATION: Arstotzka\nNAME: Costanza, Josef\nDOB: 1933.11.28\nSEX: M\nISS: East Grestin\nEXP: 1983.03.15'
};
const guyovich = {
    acces_permit: 'NAME: Guyovich, Russian\nNATION: Obristan\nID#: TE8M1-V3N7R\nPURPOSE: TRANSIT\nDURATION: 14 DAYS\nHEIGHT: 159cm\nWEIGHT: 60kg\nEXP: 1983.07.13'
};
const roman = {
    passport: 'ID#: WK9XA-LKM0Q\nNATION: United Federation\nNAME: Dolanski, Roman\nDOB: 1933.01.01\nSEX: M\nISS: Shingleton\nEXP: 1983.05.12',
    grant_of_asylum: 'NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20'
};

suite('Papers, Please Kata', () => {
    test('Case 1', () => {
        assert.strictEqual(inspector.inspect(josef), 'Glory to Arstotzka.');
    });
    test('Case 2', () => {
        assert.strictEqual(inspector.inspect(guyovich), 'Entry denied: missing required passport.');
    });
    test('Case 3', () => {
        assert.strictEqual(inspector.inspect(roman), 'Detainment: ID number mismatch.');
    });
});
