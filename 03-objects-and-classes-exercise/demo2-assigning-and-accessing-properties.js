// Simple dot-notation
const person = { name: 'Peter' };
console.log(person.name); 

// Bracket-notation (indexing operator)
// Required if the key contains a special character
person['job-title'] = 'Trainer';
console.log(person['job-title']) // Trainer
// console.log(person.job-title)     ReferenceError

// Brackets can be used with keys as string variables
