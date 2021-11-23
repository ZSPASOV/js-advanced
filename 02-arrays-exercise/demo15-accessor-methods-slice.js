// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
// The original array will not be modified
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);
let fruitsCopy = fruits.slice();
fruits.push('Kiwi');
console.log(fruits); //['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Kiwi']
console.log(fruitsCopy); //['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
