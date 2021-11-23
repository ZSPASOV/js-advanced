// Functions in JavaScript have execution context
// Accessed with the keyword this
// When executed as an object method, the context is a reference to the parent object
const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
console.log(person.fullName()); // 'Peter Johnson'
  