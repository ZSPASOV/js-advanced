function solve(matrix) {
    let pairs = 0;

    matrix.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === row[j + 1]) { /*tova nqma da grumne, prosto shte dade undefined */
                pairs++;
            }

            if (matrix[i + 1] && el === matrix[i + 1][j]) { /*matrix[i + 1]  go slagame zashtoto ne moje da se dostupva index na undefined*/
                pairs++;
            }
        });
    });
    console.log(pairs);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);