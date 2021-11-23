function getOperation() {
    return function(a, b) {
        return a + b;
    }
}

let operation = getOperation();

console.log(operation(10, 5));