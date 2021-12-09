// Currying is a technique for function decomposition
function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(sum3(5)(6)(8)); // 19

// Supply arguments one at a time, instead of at once
// They may come from different sources
// Execution can be delayed until it's needed


// CURRYING USAGE

// Function Composition - Building new function from old function by passing arguments
// Memoization - Functions that are called repeatedly with the same set of inputs but whose result is relatively expensive toproduce
// Handle Errors - Throwing functions and exiting immediately after an error

// currying vs partial application 

// Currying always produces nested unary functions
// Partial application produces functions of arbitrary number of arguments
// Currying is NOT partial application
// It can be implemented using partial application

