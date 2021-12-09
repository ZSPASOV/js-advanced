// Immediately-Invoked Function Expressions (IIFE)
// Define anonymous function expression
// Invoke it immediately after declaration

(function () {
    let name = "Peter";
})();
// Variable name is not accessible from the outside scope
// console.log(name); // ReferenceError

let result = (function () {
    let name = "Peter";
    return name;
})();
// Immediately creates the output: 
console.log(result); // Peter

