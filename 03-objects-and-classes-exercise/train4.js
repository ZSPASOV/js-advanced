let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

let res = Object.entries(person);
console.log(res);


let samePerson = Object.fromEntries(res);
console.log(samePerson);

let arrOfArrs = [
    ['name', 'Dori'],
    ['height', 165],
    ['weight', 50]
]

let girl = Object.fromEntries(arrOfArrs);
console.log(girl);