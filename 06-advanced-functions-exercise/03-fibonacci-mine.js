function getFibonator() {
    let number = 0;
    let secondNumber = 1;
    function solve() {
        let currentNumber = number + secondNumber;
        number = secondNumber;
        secondNumber = currentNumber;
        return currentNumber;
    }
    return solve;
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
