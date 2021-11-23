let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

let res = Object.entries(person);
console.log(res);


let samePerson = Object.fromEntries(res);
console.log(samePerson);