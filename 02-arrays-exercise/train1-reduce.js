// https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/ 
// Simulating Reduce With a For Loop

let foods = [800, 200, 100, 300, 700];
let total = 0;

for (let i = 0; i < foods.length; i++) {
    total += foods[i];
}

console.log(total);
//value of total will be 2100

// A Simple Example of Reduce

let foodsTwo = [800, 200, 100, 300, 700];

let totalTwo = foodsTwo.reduce(function (sum, item) {
    return sum + item;
}, 0);

console.log(totalTwo);

// Example 2- Using Objects
let foodsThree = [
    { name: 'steak', calories: 800 },
    { name: 'fruit', calories: 200 },
    { name: 'salad', calories: 100 },
    { name: 'chips', calories: 300 },
    { name: 'ice cream', calories: 700 },
];

let totalThree = foodsThree.reduce(function (sum, item) {
    return sum + item.calories;
}, 0)
console.log(totalThree);


//   Example 3- Using Mulitple Categories

let foodsFour = [
    { name: 'steak', calories: 800, carbs: 10, fat: 30 },
    { name: 'fruit', calories: 200, carbs: 20, fat: 0 },
    { name: 'salad', calories: 100, carbs: 0, fat: 5 },
    { name: 'chips', calories: 300, carbs: 10, fat: 10 },
    { name: 'ice cream', calories: 700, carbs: 20, fat: 20 },
];

let totalFour = foodsFour.reduce(function (buckets, item) {
    let calories = item.calories;
    let carbs = item.carbs;
    let fat = item.fat;

    buckets['calories'] += calories;
    buckets['carbs'] += carbs;
    buckets['fat'] += fat;

    return buckets;
},
    { calories: 0, carbs: 0, fat: 0 }
);

console.log(totalFour);