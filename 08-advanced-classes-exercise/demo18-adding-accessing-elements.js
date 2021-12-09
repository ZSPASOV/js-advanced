// .set(key, value) – adds a new key-value pair
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map);

// .get(key) – returns the value of the given key 
console.log(map.get(2)); // two

// .size – property, holding the number of stored entries

console.log(map.size)  // 2