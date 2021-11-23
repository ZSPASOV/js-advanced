let received = '{ "manager":{"firstName":"John","lastName":"Doe","age":"32"} }'; 

let data = JSON.parse(received);
console.log(data.manager.firstName); /*John*/
console.log(data);
console.log(data.manager);
console.log(typeof received);
console.log(typeof data);
console.log(typeof data.manager);
console.log(typeof data.manager.firstName);
console.log(typeof data.manager.firstName);
console.log(typeof data.manager.age);