// dot notation
let person = { name: 'Peter' };
person.age = 21; // { name: 'Peter', age: 21 } 
console.log(person.name); // Peter

// bracket notation
person['job-title'] = 'Trainer';
console.log(person['job-title']) // Trainer
console.log(person.job-title) // ReferenceError
