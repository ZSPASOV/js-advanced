class Person {
    constructor(name, canFly) {
        this.name = name;
        this.canFly = canFly;
    }

    speak() {
        console.log(`Hello! My name is ${this.name}`);
    }
}

class Programmer extends Person {
    constructor(name) {
        super(name, true)
    }

    coding() {
        console.log(`Hello World! My name is ${this.name}`)
    }
}


let peshoProgramista = new Programmer('Pesho');
console.log(peshoProgramista.canFly);