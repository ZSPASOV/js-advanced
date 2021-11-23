// The forEach() method executes a provided function once for each array element
// Converting a for loop to forEach
const items = ['item1', 'item2', 'item3'];
const copyOne = [];
const copyTwo = [];

for (let i = 0; i < items.length; i++) {
    copyOne.push(items[i]);
}

// ForEach
items.forEach(item => {copyTwo.push(item); });
console.log(copyOne); //['item1', 'item2', 'item3']
console.log(copyTwo); //['item1', 'item2', 'item3']

const numbers = [2, 3, 7, 9];
numbers.forEach(number => console.log(number ** 2));