const greet = name => console.log('Hello ' + name + '!');

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    talk: function () {
        greet('Joro')
    },
    height: 180,
    greet: greet
};



person.talk();
person.greet('Panyo');
