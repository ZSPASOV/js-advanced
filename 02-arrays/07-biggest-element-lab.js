function solve(matrix) {
    maxNumber = Number.MIN_SAFE_INTEGER
    for (const row of matrix) {
        for (const el of row){
            if (el > maxNumber) {
                maxNumber = el
            }
        }
    }

    console.log(maxNumber)
}

solve([[20, 50, 10],
    [8, 33, 145]]
   )