// Variables holding reference data types contain the memory address (reference) of the data
// Copies of the reference point to the same data
let x = {name: 'John'};
let y = x;
y.name = 'Steve';
console.log(x.name); // Steve

x.age = 25;
console.log(x);
console.log(y);
