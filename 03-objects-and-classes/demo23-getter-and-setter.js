class Person {
    constructor (firstName, lastName) {
        this.name = firstName;
        this.name = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get age() {
        return this.currentAge;
    }

    set age(value) {
        if (!(value < 0 || value > 120)) {
            this.currentAge = value;
        } 
    }
}

let personOne = new Person('Panyo', 'Spasov');
let personTwo = new Person('Dori', 'Veselinska');
personOne.age = 32;
console.log(personOne); /*Person {name: 'Spasov', currentAge: 32}*/


