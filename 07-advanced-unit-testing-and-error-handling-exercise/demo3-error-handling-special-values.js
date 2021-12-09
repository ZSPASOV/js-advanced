let sqrt = Math.sqrt(-1); // NaN (special value)
console.log(sqrt);

// let sub = "hello".substring(2, 1000); // llo
let sub = "hello".substring(-100, 100); // hello
console.log(sub);
// Soft error - substring still does its job: takes all available chars
let invalid = new Date("Christmas"); // Invalid Date
console.log(invalid);
let date = invalid.getDate(); // NaN
console.log(date);
