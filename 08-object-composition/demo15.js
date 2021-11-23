let cats = [
    {name: 'Navcho', age: 5},
    {name: 'Garry', age: 4},
    {name: 'Mishy', age: 3},
];

function printCatsName({name, ...otherProps}) {
    console.log(name);

    console.log(otherProps.age);
}

cats.forEach(printCatsName);
