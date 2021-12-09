// The Object.create() method creates a new object, using an existing object as prototype

const dog = {
    name: 'Sparky',
    printInfo: function () { console.log(`My name is ${this.name}`) }
};

const myDog = Object.create(dog);
myDog.name = 'Max'; // inherited properties can be overwritten
myDog.breed = 'shepherd'; // breed is a property of myDog
myDog.printInfo(); // My name is Max 
