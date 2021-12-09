// Occurs when call(), apply(), or bind() are used on a function
// Forces a function call to use a particular object for this binding

function greet() {
    console.log(this.name);
}

let person = { name: 'Alex' };
// greet.call(person, arg1, arg2, arg3, ...); // Alex
greet.call(person); // Alex
