/*tova se naricha function constructor*/
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    /*v1 - tova e greshno kato podhod, zashtoto pri vsqka instanciq tazi funkciq shte se sazdava v pametta otnovo*/
    // this.speak = function() {
    //     console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
    // }
}

/*v2 - tova e pravilniq podhod - tova znachi che s new keyword kato suzdadem nova instanciq
taka funckiqta speak shte sochi kum edno i sushto mqsto v pametta*/
Person.prototype.speak =function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
}

let person = new Person('Pesho', 'Georgiev');
let secondPerson = new Person('Panyo', 'Spasov');

person.speak();
secondPerson.speak();

console.log(person.speak == secondPerson.speak); /*true - s v2 e true, ako go ostavim kato v1 shte e false*/