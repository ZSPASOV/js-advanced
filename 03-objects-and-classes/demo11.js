let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    height: 180,
};

/*object assign*/

let person2 = Object.assign({}, person); /*tova suzdava nov obekt koito zapisva celiq person v noviq prazen obekt*/

person.firstName = 'Joro';
console.log(person.firstName);
console.log(person2.firstName);

