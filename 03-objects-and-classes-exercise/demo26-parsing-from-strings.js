// A common use of JSON is to read data from a web server, and display the data on a web page 
// Use the JavaScript built-in function JSON.parse() to convert the JSON format into a JavaScript object:
let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }'; 
let obj = JSON.parse(data);
console.log(obj.manager.lastName) // Doe 
console.log(obj);
