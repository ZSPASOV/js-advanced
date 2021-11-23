// Two variables, two distinct objects with the same properties
const fruit = {name: 'apple'};
const fruitbear = {name: 'apple'};
console.log(fruit == fruitbear);  // false
console.log(fruit === fruitbear); // false

// Two variables, a single object
const fruitTwo = { name: 'apple' };
const fruitbearTwo = fruitTwo ;  
// Assign a copy of the fruit reference to fruitbear
console.log(fruitTwo == fruitbearTwo);  // true
console.log(fruitTwo === fruitbearTwo); // true