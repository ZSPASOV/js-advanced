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
    constructor() {
        super('Pesho', true)
    }

    coding() {
        console.log(`Hello World! My name is ${this.name} and I ${this.canFly ? 'can' : 'can\'t'} fly!`)
    }
}


let peshoProgramista = new Programmer();
peshoProgramista.coding();

/*Hello World! My name is Pesho and I can fly!
*/