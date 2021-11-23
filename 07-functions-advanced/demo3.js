function getOperation() {
    let add = function(a, b) {
        return a + b;
    };

    return add;
}

let operation = getOperation();

console.log(operation(10, 5));