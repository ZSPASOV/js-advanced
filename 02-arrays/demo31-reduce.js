let numbers = [1, 4, 10, 11, 200];

let sum = numbers.reduce((accumulator, element) => {
    return accumulator + element;
}, 0)

console.log(sum);
