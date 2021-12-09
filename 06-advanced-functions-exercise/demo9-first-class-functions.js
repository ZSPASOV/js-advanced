// Can be passed as an argument to another function
function sayHello() {
    return "Hello, ";
}

function greeting(helloMessage, name) {
    return helloMessage() + name;
}

console.log(greeting(sayHello, 'Panyo'));

// Can be returned by another function
// We can do that, because we treated functions in JavaScript as a value

function sayHelloTwo() {
    return function () {
        console.log('Hello');
    }
}

sayHelloTwo()(); // Hello
let a = sayHelloTwo();
a(); // Hello

// Can be assigned as a value to a variable
const write = function () {
    return "Hello, world!";
}
console.log(write());
// Hello, world!
