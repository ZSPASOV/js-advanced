function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.speak =function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
}

function Student(firstName, lastName, course) {
    Person.call(this, firstName, lastName); // super(firstName, lastName)

    this.course = course;
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.getGrades = function() {
    console.log('my grade is 6');
}

