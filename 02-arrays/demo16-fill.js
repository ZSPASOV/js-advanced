let numbers = [];
numbers.length = 10
numbers.fill(5)
console.log(numbers) /*(10) [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]*/

let justArray = ['kiro', 'niki', 'yasen', 'panyo']
justArray.fill('pesho', 1, 3)
console.log(justArray) /*['kiro', 'pesho', 'pesho', 'panyo']*/