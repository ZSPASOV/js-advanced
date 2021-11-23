const person = {
  name: 'Peter',
  age: 21,
  ['job-title']: 'Trainer'
}

console.log(person);

delete person.age;

console.log(person);