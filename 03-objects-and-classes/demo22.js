class Person {
    constructor (name) {
        this.name = name;
    }

    greet() {
        console.log('Hello, my name is ' + this.name)
    }
}

let personOne = new Person('Panyo');
console.log(personOne)
personOne.greet(); /*Hello, my name is Panyo*/