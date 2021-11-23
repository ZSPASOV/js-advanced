let names = ['superman', 'spiderman', 'batman']

/*v1*/
names.forEach(x => {
    console.log(x);
})
/*v2*/

names.forEach(x => console.log(x));

// v3
let numbers = [5, 10, 20]

numbers.forEach(function(x){
    result = x ** 2 + 2
    console.log(result)
})

// v4
// moje v funkciqta da se dobavqt 3 parametara - Element, index i array
names.forEach((x, i, arr) => {
    console.log(x);
    console.log(i);
    console.log(arr);
})