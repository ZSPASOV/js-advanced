function solve(firstOperand, secondOperand, operationSign) {
    let result = 0;

    switch (operationSign) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '**':
            result = firstOperand ** secondOperand;
            break;
    }

    console.log(result);
}

solve(3, 5.5, '*');