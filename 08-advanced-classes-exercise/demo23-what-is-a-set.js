// Store unique values of any type, whether primitive values or object references
// Set objects are collections of values
let set = new Set([1, 2, 2, 4, 5]);
// Set(4) { 1, 2, 4, 5 }
set.add(7); // Add value
console.log(set.has(1)); 
// Expected output: true
console.log(set);

// Can iterate through the elements of a set in insertion order
