class Person {
    canFly = false;

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Hello! My name is ${this.name}`);
    }
}

class Programmer extends Person {
    constructor(name) {
        super(name)
    }

    coding() {
        console.log(`Hello World! My name is ${this.name}`)
    }
}


let firstPerson = new Person('Adam');
let peshoProgramista = new Programmer('Pesho');

peshoProgramista.coding();
peshoProgramista.speak();
console.log(peshoProgramista.canFly);