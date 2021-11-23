// The sort() method sorts the items of an array
// Depending on the provided compare function, sorting can be alphabetic or numeric, and either ascending (up) or descending (down)
// By default, the sort() function sorts the values as        strings in alphabetical and ascending order
// If you want to sort numbers or other values, you need to provide the correct compare function!

let names = ["Peter","George","Mary"];
names.sort(); // Default behaviour – alphabetical order
console.log(names); // ["George","Mary","Peter"]

let numbers = [20, 40, 10, 30, 100, 5];
numbers.sort(); // Unexpected result on arrays of numbers!
console.log(numbers); // [10,100,20,30,40,5]

// Compare Functions

// A function receiving two parameters, e.g. a and b
// Returns either a positive number, a negative number, or zero
// If result < 0, a is sorted before b
// If result > 0, a is sorted after b
// If result = 0, a and b are equal (no change)

let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a - b); // Compare elements as numbers
console.log(nums); // 5|10|20|30|40|100

// Sorting String Arrays

// The localeCompare() method is used to compare any two characters without regard for the case used
// It's a string method so it can't be used directly on an array
// Pass localeCompare() as the comparison function
let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));
console.log(words);
// ['bite', 'Eggs', 'Grip', 'jAw', 'nest']

console.log('Dori'.localeCompare('Panyo'));
console.log('Panyo'.localeCompare('Dori'));
