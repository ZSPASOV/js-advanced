function solve(input) {
    let result = {};

    while (input.length != 0) {
        let town = input.shift();
        let income = Number(input.shift());

        if (!result[town]) {
            result[town] = 0;
        }

        result[town] += income;
    }
    console.log(JSON.stringify(result));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])