function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.speak =function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
}

function createNew(constructor, ...args) {
    // create new object
    let newObject = {};

    // set prototype
    Object.setPrototypeOf(newObject, constructor.prototype);

    // call constructor with context
    constructor.apply(newObject, args);

    // return new object
    return newObject;
}

let person = new Person('Pesho', 'Georgiev');
let person2 = createNew(Person, 'Pesho', 'Georgiev');

person.speak();
person2.speak();