// Removes the last element from an array and returns that element
// This method changes the length of the array

let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.length); // 7
console.log(nums.pop());  // 70
console.log(nums.length); // 6
console.log(nums);     // [ 10, 20, 30, 40, 50, 60 ]

let value = nums.pop();
console.log(value);
console.log(nums);
