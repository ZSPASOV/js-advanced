// The unshift() method adds one or more elements to the
//  beginning of an array and returns the new length of the array

let nums = [40, 50, 60];
console.log(nums.length);       // 3
console.log(nums.unshift(30));  // 4 (nums.length)
console.log(nums.unshift(10,20)); // 6 (nums.length)
console.log(nums);  // [ 10, 20, 30, 40, 50, 60 ]
let check = nums.unshift(5);
console.log(check); // 7
console.log(nums); // [5, 10, 20, 30, 40, 50, 60]
