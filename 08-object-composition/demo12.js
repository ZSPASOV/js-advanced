let cats = [
    {name: 'Navcho', age: 5},
    {name: 'Garry', age: 4},
    {name: 'Mishy', age: 3},
];

let [ firstCat, secondCat, thirdCat] = cats;

console.log(firstCat, secondCat, thirdCat);
/*{name: 'Navcho', age: 5} {name: 'Garry', age: 4} {name: 'Mishy', age: 3}*/

console.log(...cats);

/*{name: 'Navcho', age: 5} {name: 'Garry', age: 4} {name: 'Mishy', age: 3}*/

