let person = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 22,
    grades: [2, 3, 2, 6],
    school: {
        name: '51-SOU',
        maxGrade: 12,
        address: 'str...',
    },
    reportGrades: function () {
        console.log(`My grades are: ${this.grades.join(', ')}`)
    },
    toString: function() {
        return `My name is ${this.firstName} ${this.lastName} and I study in ${this.school.name} school.`
    }
}

person.location = {
    lat: 48.22,
    lng: 23.22,
}

console.log(`${person.firstName} - studies at ${person.school.name} school.`);
console.log(person);
person.reportGrades();
console.log(person.toString());

// poneje to string e inbuild funkciq koqto override-vame v obekta:
console.log('report: ' + person);
// report: My name is Pesho Ivanov and I study in 51-SOU school.
// tova e cohersion koito direktno shte convert-ne person obekta v string koito idva ot toString funkciqta v obekta
