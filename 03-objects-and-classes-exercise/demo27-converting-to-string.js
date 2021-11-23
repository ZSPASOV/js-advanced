// Use JSON.stringify() to convert objects into a string:
let obj = { name: "John", age: 30, city: "New York" };
let myJSON = JSON.stringify(obj);
console.log(myJSON);// {"name":"John","age":30,"city":"New York"}

// You can do the same for arrays
let arr = [ "John", "Peter", "Sally", "Jane" ];
let myJSONTwo = JSON.stringify(arr);
console.log(myJSONTwo); // ["John","Peter","Sally","Jane"]
console.log(typeof myJSON); // string
console.log(typeof myJSONTwo); // string

// Format the string with indentation for readability
let myJSON = JSON.stringify(arr, null, 2);
