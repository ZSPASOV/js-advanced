let sum = function(a, b) {
    return a + b;
};

function calculate(operation, firstArgument, secondArgument) {
    let operationResult = operation(firstArgument, secondArgument);

    return operationResult
}

let result = calculate(sum, 5, 10);

console.log(result)


