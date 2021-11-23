function solve(array) {
    let outputArray = [];
    outputArray.push(array[0]);
    for (i = 1; i < array.length; i++) {
        if (array[i] >= outputArray[outputArray.length - 1]) {
            outputArray.push(array[i])
        }
    }
    return outputArray;
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