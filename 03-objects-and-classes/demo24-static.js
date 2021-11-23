class Person {
    constructor (firstName, lastName) {
        this.name = firstName;
        this.name = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get age() {
        return this.currentAge;
    }

    set age(value) {
        if (!(value < 0 || value > 120)) {
            this.currentAge = value;
        } 
    }

    static talk() {
        console.log('blablabla');
    }
    static type = 'homosapiens'
}

let personOne = new Person('Panyo', 'Spasov');
Person.talk(); /*blablabla - poneje e static moje da se izvika samo ot class-a, a ne ot instanciqta mu*/
console.log(Person.type); /*homosapiens - otnovo izvikvame property samo na class nivo*/
personOne.talk(); /*Uncaught TypeError: personOne.talk is not a function - dava tazi greshka zashtoto sme opitali da izvikame ot instanciqta*/

/*moje da ima static method i static property. dostapvat se samo ot samiq class, a ne ot instanciite*/
