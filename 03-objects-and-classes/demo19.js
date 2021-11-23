let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

let personJson = JSON.stringify(person);

console.log(personJson);
console.log(typeof (personJson)); /*string*/


let objArray = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 30
    },
    {
        firstName: "Kiro",
        lastName: "Petrov",
        age: 40
    },
]

let result = JSON.stringify(objArray);
console.log(result);