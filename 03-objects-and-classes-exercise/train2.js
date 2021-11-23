const mult = (a, b) => a * b;
let add = (a, b) => a + b;
function sbtrkt (a, b) {
    return a - b
};

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    height: 180,
    mult, // tova e shortcut convention za dolnoto
    add: add,
    sbtrkt
};


console.log(person.add(2, 5));
console.log(person.mult(2, 5));
console.log(person.sbtrkt(2, 5));
