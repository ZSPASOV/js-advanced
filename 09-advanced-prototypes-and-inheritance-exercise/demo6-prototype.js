// Objects inherit properties and methods from a prototype
// The prototype property allows you to add new properties to object constructors
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
Person.prototype.nationality = "Bulgarian";