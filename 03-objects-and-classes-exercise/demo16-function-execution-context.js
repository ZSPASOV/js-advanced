// Execution context can be changed at run-time
// If a function is executed outside of its parent object, it will no longer have access to the object's content
const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

const getFullName = person.fullName;
console.log(getFullName()); // 'undefined undefined'


const anotherPerson = { firstName: 'Bob',
                        lastName: 'Smith' };
anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName()); // 'Bob Smith'
