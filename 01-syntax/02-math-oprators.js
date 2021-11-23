function solve(firstNum, secondNum, operator) {
    if (operator === '+') {
        result = firstNum + secondNum
    }

    else if (operator === '-') {
        result = firstNum - secondNum
    }

    else if (operator === '*') {
        result = firstNum * secondNum
    }

    else if (operator === '/') {
        result = firstNum / secondNum
    }

    else if (operator === '%') {
        result = firstNum % secondNum
    }

    else if (operator === '**') {
        result = firstNum ** secondNum
    }

    console.log(result)

}

solve(5, 6, '+')