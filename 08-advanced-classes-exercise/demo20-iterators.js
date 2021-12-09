// .entries() - returns Iterator - array of [key, value]
// .keys() - returns Iterator with all the keys
// .values() - returns Iterator with all the values

let map = new Map();
map.set(1, 'one');
map.set(2, 'two');

let entries = Array.from(map.entries()); // [ [1, 'one'], [2, 'two'] ]
let keys = Array.from(map.keys()); // [1, 2]
let values = Array.from(map.values()); // ['one', 'two']
