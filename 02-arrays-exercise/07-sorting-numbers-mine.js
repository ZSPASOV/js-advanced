function solve(array) {
    let ascendingArray = array.slice().sort((a, b) => a - b);
    let descendingArray = array.slice().sort((a, b) => b - a);
    let outputArray = []
    for (i = 0; i < array.length; i++) {
        let ascendingEl = ascendingArray.shift();
        let descendingEl = descendingArray.shift();
        outputArray.push(ascendingEl);
        outputArray.push(descendingEl);
    }

    return outputArray.slice(0, array.length);
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));