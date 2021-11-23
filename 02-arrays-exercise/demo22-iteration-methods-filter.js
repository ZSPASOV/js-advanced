// Creates a new array with filtered elements only
// Calls a provided callback function once for each element in an array
// Does not mutate the array on which it is called
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']; // Filter array items based on search criteria (query)
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
};
console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']


function checkBigger (number) {
    if (number % 2 == 0) {
        return number;
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredNumbers = numbers.filter(checkBigger);
console.log(filteredNumbers); //[2, 4, 6, 8]