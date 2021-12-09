// Once its value is defined, it is not possible to change it using assignments
let ob = { a: 1 };
Object.defineProperty(ob, 'B', { value: 2, writable: false });
console.log(ob.B); // => 2
ob.B = 10;
console.log(ob.B); // => 2


// If the non-writable property contains an object, the reference to the object is what is not writable, but the object itself can be modified
