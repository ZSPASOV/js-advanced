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
};



person.talk();
person.greet();
person.bye('Vanyo');