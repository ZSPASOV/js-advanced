function solve (array) {
    array.sort((a, b) => a.localeCompare(b))
    result = ''
    for (i = 0; i <= array.length - 1; i++) {
        result += `${i+1}.${array[i]}\n`
    }
    return result;
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));