// An expression that can be replaced with its corresponding value without changing the program's behavior
// Expression is pure and its evaluation must have no side effects

function add(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

let x = add(2, mult(3, 4)); 
// mult(3, 4)) can be replaced with 12