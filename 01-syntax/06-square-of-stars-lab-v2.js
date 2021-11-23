function solve(size=5) {
    for (let i = 0; i < size; i++) {
        let row = '*'.repeat(size).split('').join(' ');
        console.log(row);
    }
}

solve(6);