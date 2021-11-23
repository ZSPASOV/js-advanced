function solve(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    result = []
    for (let i = 0; i <= matrix.length - 1; i++) {
        firstDiagonalSum += matrix[i][i];
    }

    for (let i = 0; i <= matrix.length - 1; i++) {
        secondDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    result.push(firstDiagonalSum);
    result.push(secondDiagonalSum);
    console.log(result.join(' '));

}

solve([
    [20, 40],
    [10, 60]
]);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);