// Returns the same result given same parameters 
// Execution is independent of the state of the system

// impure function:
let number = 1;
const increment = () => number += 1;
console.log(increment()); // 2
console.log(increment()); // 3

// // pure function:
const incrementTwo = n => n + 1;
console.log(incrementTwo(1)); // 2	  
console.log(incrementTwo(1)); // 2	  