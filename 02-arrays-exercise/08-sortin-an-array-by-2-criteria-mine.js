function solve(arr) {
    arr.sort(function (a, b) {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    })
    return arr.join('\n');
}


console.log(solve(['alpha', 
'beta', 
'gamma']
));

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));



