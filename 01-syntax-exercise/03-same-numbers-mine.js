function solve(num) {
    let stringNum = num.toString();
    let firstDigit = stringNum[0];
    let allDigitsEqual = true;
    let sumAllDigits = 0;

    for (digit of stringNum) {
        if (digit !== firstDigit) {
            allDigitsEqual = false;
        }
        sumAllDigits += parseInt(digit);
    }
    return `${allDigitsEqual}\n${sumAllDigits}`;
}

console.log(solve(1234));