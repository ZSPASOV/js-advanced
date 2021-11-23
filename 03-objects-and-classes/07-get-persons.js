function solve() {
    arrayOfObjects = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let personOne = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let personTwo = new Person('SoftUni');
    let personThree = new Person('Stephan', 'Johnson', 25, 'anna@yahoo.com');
    let personFour = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    arrayOfObjects.push(personOne)
    arrayOfObjects.push(personTwo)
    arrayOfObjects.push(personThree)
    arrayOfObjects.push(personFour)
    return arrayOfObjects;
}

console.log(solve());