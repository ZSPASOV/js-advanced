let person = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 22,
    grades: [2, 3, 2, 6],
    school: {
        name: '51-SOU',
        maxGrade: 12,
        address: 'str...',
        printReport: function() {
            console.log(this.firstName);
            console.log(this.name);
        }
    },
    reportGrades: function () {
        console.log(`My grades are: ${this.grades.join(', ')}`)
    },
    toString: function() {
        return `My name is ${this.firstName} ${this.lastName} and I study in ${this.school.name} school.`
    }
}

/*tova vzima lastName i go preimenuva na familyname, s takav syntax:*/
let { lastName : familyName, school, ...halfPerson }  = person;
console.log(familyName);

