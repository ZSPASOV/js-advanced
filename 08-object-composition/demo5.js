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


/*taka shte dade error, zashtoto nqma da ima context this.*/
// let { reportGrades }  = person;
// console.log(reportGrades()); /*Cannot read property 'join' of undefined*/

/*trqbva da mu podadem context*/

let { reportGrades } = person;
reportGrades.call({grades: [4, 4, 4]}); /*My grades are: 4, 4, 4*/


