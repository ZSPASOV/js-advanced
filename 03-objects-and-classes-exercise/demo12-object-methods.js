// Objects can also have methods
// Methods are actions that can be performed on objects
// Methods are stored in properties as function definitions
let person = {
    firstName: "John",
    lastName: "Doe",
    age: function (myAge) {
        return `My age is ${myAge}!`
    }
};
console.log(person.age(21)); // My age is 21!
