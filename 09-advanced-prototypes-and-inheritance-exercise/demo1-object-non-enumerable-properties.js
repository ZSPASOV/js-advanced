// They won't be in for…in iterations
// They won't appear using Object.keys function
// They are not serialized when using JSON.stringify
let ob = {a:1, b:2};
ob.c = 3;
Object.defineProperty(ob, 'd', { value: 4, enumerable: false });
ob.d; // => 4
for( let key in ob ) {
    console.log( ob[key] ); //1 2 3
}
console.log(Object.keys(ob));  // => ["a", "b", "c"]
ob; // => {a: 1, b: 2, c: 3, d: 4}
ob.d; // => 4
