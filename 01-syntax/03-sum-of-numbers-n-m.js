function solve(n, m) {
    let sum = 0;
    firstNum = Number(n);
    secondNum = Number(m);
    for (i = firstNum; i <= secondNum; i++) {
        sum += i
    }
    console.log(sum);
}

solve(1, 5);