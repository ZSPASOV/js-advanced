function solve(a, b) {
    let GCD = 0;
    let biggerNumber;
    if (a > b) {
        biggerNumber = a;
    } else {biggerNumber = b};
    for (let i = 0; i <= biggerNumber; i++) {
        if (a % i == 0 && b % i == 0) {
            GCD = i;
        }
    }
    return GCD;
}

console.log(solve(15, 5));
console.log(solve(2154, 458));