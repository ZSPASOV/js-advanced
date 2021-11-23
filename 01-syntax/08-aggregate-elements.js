function solve(numbers) {
    let sum = numbers.reduce((accumulator, element) => {
        return accumulator + element;
    }, 0)
    let inverseSum = numbers.reduce((accumulator, element) => {
        return accumulator + 1 / element;
    }, 0)
    let concatSum = '';

    for (number of numbers) {
        concatSum += number.toString();
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatSum);
}

solve([1, 2, 3]);