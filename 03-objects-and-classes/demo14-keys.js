let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

console.log(Object.keys(person)); /*['firstName', 'lastName', 'age']*/
console.log(Object.values(person)); /*['John', 'Doe', 30]*/

Object.keys(person).forEach(key => {
    console.log(`${key} --> ${person[key]}`)
});

// firstName --> John
// lastName --> Doe
// age --> 30


