// Determines whether an array contains a certain element, returning true or false as appropriate
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
let arr = ['a', 'b', 'c'];
arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false


let fruits = ['banana', 'kiwi'];
console.log(fruits.includes('banana')); //true
console.log(fruits.includes('banana', 1)); //false
console.log(fruits.includes('banana', 0)); //true