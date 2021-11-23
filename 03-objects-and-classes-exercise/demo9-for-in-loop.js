// for … in – iterates over all enumerable properties
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  console.log(`obj.${key} = ${obj[key]}`);
}
// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


// for of - there will be error
for (const key of obj) {
      console.log(`obj.${key} = ${obj[key]}`);
    } // Uncaught TypeError: obj is not iterable