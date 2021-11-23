let arr = [
    [4, 6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, 9, 12]
];

console.log(arr[0][2]);

// v1
for (const row of arr) {
    for (const el of row) {
        console.log(el)
    }
}

// v2
arr.forEach(row => {
    row.forEach(el => {
        console.log(el);
    })
})