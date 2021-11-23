let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

if (person.hasOwnProperty('firstName')) {
    console.log('Yes he has!')
} else {
    console.log('no')
}

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}