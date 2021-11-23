let names = ['pesho', 'gosho', 'panyo', 'vanyo', 'kiro'];
names.sort();
console.log(names)

let numbers = [2, 5, 4, 6, 3, 10]
numbers.sort()
console.log(numbers) /*[10, 2, 3, 4, 5, 6] - sortira taka zashtoto sortira po ASCII*/

/*v1*/
function compareNumbers(a, b) {
    return a - b;
}

numbers.sort(compareNumbers);
console.log(numbers) /*[2, 3, 4, 5, 6, 10]*/

/*v2*/
let other = ['Mariyka', 'Gosho', 'Stamat', 'pesho'];

other.sort(function(a, b){
    return a.localeCompare(b);
});

console.log(other); /*['Gosho', 'Mariyka', 'pesho', 'Stamat']*/
