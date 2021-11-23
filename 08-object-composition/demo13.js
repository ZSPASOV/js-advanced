let cats = [
    {name: 'Navcho', age: 5},
    {name: 'Garry', age: 4},
    {name: 'Mishy', age: 3},
];

let newCats = [...cats];
console.log(newCats);


// da procheta za deep copy i shallow copy

newCats.forEach(x => {
    x.age++;
});

console.log(cats);