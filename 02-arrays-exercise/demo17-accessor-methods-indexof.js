// The indexOf() method returns the first index at which a given element can be found in the array
// Output is -1 if element is not present
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
// start from index 2
console.log(beasts.indexOf('bison', 2)); // 4 
console.log(beasts.indexOf('giraffe')); // -1

let a  = beasts.indexOf('giraffe');
console.log(a)
