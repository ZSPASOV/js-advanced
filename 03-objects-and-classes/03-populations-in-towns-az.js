function solve(input) {
    result = {};
    while (input.length !== 0) {
        separatedString = input.shift()
        temporaryArray = separatedString.split(' <-> ')
        if (!result[temporaryArray[0]]) {
            result[temporaryArray[0]] = 0;
        }
        result[temporaryArray[0]] += Number(temporaryArray[1]);
    }
    Object.keys(result).forEach(key => {
        console.log(`${key} : ${result[key]}`)
    });
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)