let person = {};

person.firstName = 'Peter';
person.lastName = 'Petrov';
person.age = 30;

console.log('The person is: ' + person['age']);

person['age'] = 31;
person['grade'] = 5;

console.log(person);