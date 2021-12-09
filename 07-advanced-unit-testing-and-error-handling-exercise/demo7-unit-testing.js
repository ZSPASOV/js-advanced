// A unit test is a piece of code that checks whether certain functionality works as expected 
// Allows developers to see where & why errors occur

function sortNums(arr) {
    arr.sort((a, b) => a - b);
}

let nums = [2, 15, -2, 4];
sortNums(nums);
if (JSON.stringify(nums) === "[-2,2,4,15]") {
    console.error("They are equal!");
}
