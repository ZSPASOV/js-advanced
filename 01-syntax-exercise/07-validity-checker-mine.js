function solve(x1, y1, x2, y2) {
    result = '';
    function compare(x1, y1, x2, y2) {
        distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        let status = 'invalid';
        if (Number.isInteger(distance)) {
            status = 'valid'
        }
        result += `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}\n`
    }
    compare(x1, y1, 0, 0);
    compare(x2, y2, 0, 0);
    compare(x1, y1, x2, y2);
    return result;
}

console.log(solve(3, 0, 0, 4));
console.log(solve(2, 1, 1, 1));