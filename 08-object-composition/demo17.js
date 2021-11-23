let props = [
    {name: 'Pesho'},
    {age: 22, name: 'Gosho'},
    {height: 190},
    {eyeColor: 'blue'},
];

let person = props.reduce((acc, x) => {
    return {...acc, ...x}
    // v2 - equivalent syntax
    // return Object.assign({}, acc, x);
}, {})

console.log(person);