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
    constructor(name, canFly=true) {
        super(name, canFly)
    }

    coding() {
        console.log(`Hello World! My name is ${this.name} and I ${this.canFly ? 'can' : 'can\'t'} fly!`)
    }
}


let peshoProgramista = new Programmer('Pesho');
peshoProgramista.coding();

let panyoProgramista = new Programmer('Panyo', false);
panyoProgramista.coding();