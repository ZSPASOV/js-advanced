// Setting values via non-integers using bracket notation (or dot notation)
//  creates object properties instead of array elements
//   (will be discussed in later lesson)
let arr = [];
arr[3.4] = 'Oranges';
arr[-1] = 'Apples';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
console.log(arr[3.4]); // Oranges
console.log(arr); // [ '3.4': 'Oranges', '-1': 'Apples' ]
arr["1"] = 'Grapes';
console.log(arr.length);                // 2
console.log(arr); // [ <1 empty item>, 'Grapes', '3.4': 'Oranges', '-1': 'Apples' ]
