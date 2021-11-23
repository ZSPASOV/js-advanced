let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

let samePerson = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

console.log(person == samePerson); /*false - dava false zashtoto makar i ednakvi sa na razlichni mesta v RAM-ta*/

