// Fills all the elements of an array from a start index to an end index with a static value
let arr = [1, 2, 3, 4]; // fill with 0 from position 2 until position 4
console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0] // fill with 5 from position 1
console.log(arr.fill(5, 1)); // [1, 5, 5, 5] console.log(arr.fill(6)); // [6, 6, 6, 6]

let fruits = ['orange', 'banana', 'apple', 'tomato'];
fruits.fill('grapefruit');
console.log(fruits); //['grapefruit', 'grapefruit', 'grapefruit', 'grapefruit']

let vegetables = ['potato', 'cucumber', 'eggplant', 'pepper', 'mushroom', 'carrot'];
vegetables.fill('avocado', 1, 4);
console.log(vegetables); //['potato', 'avocado', 'avocado', 'avocado', 'mushroom', 'carrot']