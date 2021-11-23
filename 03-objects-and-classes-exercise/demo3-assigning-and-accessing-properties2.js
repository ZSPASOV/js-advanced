// Properties can be added during run-time
const person = { name: 'Peter' };
person.age = 21; // { name: 'Peter', age: 21 } 
console.log(person.age); // 21
// Unassigned properties of an object are undefined
console.log(person.lastName); // undefined
