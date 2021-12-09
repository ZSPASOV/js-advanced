function solve(arr, way) {
    let obj = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    }
    return arr.sort(obj[way]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));