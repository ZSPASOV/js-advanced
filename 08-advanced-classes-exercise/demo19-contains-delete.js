let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
// .has(key) - checks if the map has the given key
console.log(map.has(2)); // true
console.log(map.has(4)); // false

// .delete(key) - removes a key-value pair
map.delete(1);
console.log(map);

// .clear() - removes all key-value pairs
map.clear();