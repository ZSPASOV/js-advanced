function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        // Every iteration of a loop has its own block scope so changing the value of a variable decalred with const works.
        const element = arr.pop();
        arr.unshift(element);
    }
    
    return arr.join(' ');
}

console.log(solve(['1',
    '2',
    '3',
    '4'],
    2
));