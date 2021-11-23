let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};


console.log(person.hasOwnProperty('age'));
console.log(person.hasOwnProperty('gender'));

console.log(Object.keys(person));



for (let key in person) {
    console.log(key);
    console.log(person[key]);
}

retunedKeys = Object.keys(person);

retunedKeys.forEach(el => console.log(el + '!!!!!'));