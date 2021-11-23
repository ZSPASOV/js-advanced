function extendPrototype(Parent) {
    Parent.prototype.species = 'Cat'
    Parent.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class Animal {
    isAnimal = true;

    toString() {
        return 'mrmrmrm'
    }
}


extendPrototype(Animal)

let animal = new Animal();

console.log(animal.toSpeciesString());