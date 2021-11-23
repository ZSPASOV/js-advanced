let arr = ['Pesho', 'Kiro', 'Yasen', 'Panyo', 'Tosh'];

let [var1, var2, var3, var4, var5] = arr;
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);

let arrTwo = ['Nelly', 'Dori', 'Teri', 'Olya', 'Slavena'];

let [name1,,name2,,name3] = arrTwo;

console.log(name1, name2, name3); // Nelly Teri Slavena


let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3


let [,,third] = ["foo", "bar", "baz"];
console.log(third);
// "baz"


let [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]