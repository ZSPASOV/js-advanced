function solve(arr) {
    return arr.reduce(function(accumulator, currentValue, index, initialArray) {
        if (currentValue >= accumulator[accumulator.length - 1] || accumulator.length === 0) {
            accumulator.push(currentValue)
        }
        return accumulator;
    }, [])
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(solve([20, 3, 2, 15, 6, 1]));