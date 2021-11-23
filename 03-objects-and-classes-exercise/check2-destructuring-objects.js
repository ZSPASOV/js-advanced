let robotA = { name: "Bender" };
let robotB = { name: "Flexo" };

let { name: nameA } = robotA;
let { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"

// There is a helpful syntactical shortcut for when the property and variable names are the same:

let { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"

// And just like destructuring on arrays, you can nest and combine further destructuring:


let complicatedObj = {
  arrayProp: [
    "Zapp",
    { second: "Brannigan" }
  ]
};

let { arrayProp: [first, { second }] } = complicatedObj;

console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"

// When you destructure on properties that are not defined, you get undefined:

let { missing } = {};
console.log(missing);
// undefined

// One potential gotcha you should be aware of is when you are using destructuring on an object to assign variables, but not to declare them (when there is no let, const, or var):

// { blowUp } = { blowUp: 10 };
// Syntax error

// This happens because the JavaScript grammar tells the engine to parse any statement starting with { as a block statement (for example, { console } is a valid block statement). The solution is to either wrap the whole expression in parentheses:

({ safe } = {});
// No errors