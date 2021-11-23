// The push() method adds one or more elements to the end of an array and returns the new length of the array
let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.length);   // 7
console.log(nums.push(80)); // 8 (nums.length)
console.log(nums); // [ 10, 20, 30, 40, 50, 60, 70, 80 ]
let value = nums.push(100);
console.log(value); // 9
console.log(nums);