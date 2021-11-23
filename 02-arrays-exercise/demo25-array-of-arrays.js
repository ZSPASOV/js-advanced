// Nested Arrays in JS
let arr = [
        [4, 6, 3, 0],
        [2, 1, -2],
        [-5, 17],
        [7, 3, 9, 12]
    ];
    

// Looping Through a Nested Array
let arrTwo = [[4, 5, 6],
              [7, 8, 9],
              [10, 11, 12]];


arrTwo.forEach(printRow);
function printRow(row){
    row.forEach(printNumber);
}
function printNumber(num){
    console.log(num);
};
