let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    talk: function () {
        console.log('speaking...')
    },
    height: 180,
    greet: () => console.log('Hello'),
    bye: name => console.log('Bye  ' + name),
    hi: (personOne, personTwo) => console.log(`Hi ${personOne} ${personTwo}`),
};



person.talk();
person.greet();
person.bye('Vanyo');
person.hi('Panyo', 'Joro');