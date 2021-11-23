function solve(firstOperand, secondOperand, operationSign) {
    let operation;

    switch (operationSign) {
        case '+':
            operation = (a, b) => a + b;
            break;
        case '-':
            operation = (a, b) => a - b;
            break;
        case '/':
            operation = (a, b) => a / b;
            break;
        case '%':
            operation = (a, b) => a % b;
            break;
        case '*':
            operation = (a, b) => a * b;
            break;
        case '**':
            operation = (a, b) => a ** b;
            break;
    }

    let result = operation(firstOperand, secondOperand);
    console.log(result);
}

solve(3, 5.5, '*');