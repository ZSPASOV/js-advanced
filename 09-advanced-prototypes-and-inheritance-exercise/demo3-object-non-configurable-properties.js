// Once you have defined the property as non-configurable, there is only one behavior you can change
// If the property is writable, you can convert it to non-writable
// Any other try of definition update will fail throwing a TypeError
let ob = {};
Object.defineProperty(ob, 'a', { configurable: false, writable: true });
Object.defineProperty(ob, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(ob, 'a', { value: 12 }); // throws a TypeError
Object.defineProperty(ob, 'a', { writable: false }); // This is allowed!!
Object.defineProperty(ob, 'a', { writable: true }); // throws a TypeError
delete ob.a; // => false
