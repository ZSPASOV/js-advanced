// Related functions may be grouped in an object
// The object serves as a function library
// Similar to built-in libraries like Math, Object, Number, etc.
// sorting helper
// This technique is often used to expose public API in a module
const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a,
  };
  
let numbers = [3, 2, 8, 4, 9, 15, 17, 0];

numbers.sort(compareNumbers.ascending);
console.log(numbers);
numbers.sort(compareNumbers.descending);
console.log(numbers);