'use strict';

class Person {
    constructor(documents) {
        const passport = documents.passport.split('\n');
        
        this.id = passport[0].trim().split(':')[1];
        this.nation = passport[1].trim().split(':')[1];
        this.name = passport[2].trim().split(':')[1];
        this.dob = passport[3].trim().split(':')[1];
        this.sex = passport[4].trim().split(':')[1];
        this.iss = passport[5].trim().split(':')[1];
        this.exp = passport[6].trim().split(':')[1];
    }
}

class Inspector {
    receiveBulletin(bulletin) {

    }

    inspect(documents) {
        const person = new Person(documents);
    }
}

module.exports = Inspector;
