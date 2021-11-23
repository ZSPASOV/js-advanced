class Person {
    constructor (name) {
        this.name = name;
    }
}

let personOne = new Person('Panyo');
console.log(personOne instanceof Person) /*true*/
console.log(typeof personOne) /*object*/