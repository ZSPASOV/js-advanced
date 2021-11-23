function solve(arr) {
    let result = arr
    .slice(0)
    .sort((a, b) => a.localeCompare(b))
    .map((value, index, initialArray) => {
        let result = `${index + 1}.${value}`
        return result;
    })

    return result.join("\n");
}


console.log(solve(["John", "Bob", "Christina", "Ema"]));