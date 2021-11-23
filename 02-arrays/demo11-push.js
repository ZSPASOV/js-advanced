let names = ['pesho', 'gosho', 'panyo', 'vanyo', 'kiro'];

names.push('yasen');

console.log(names); /*(6) ['pesho', 'gosho', 'panyo', 'vanyo', 'kiro', 'yasen']*/

let result = names.push('stamat');
console.log(result);  /*7 - rezultatut ot push e novata daljina na masiva*/

console.log(names); /*(7) ['pesho', 'gosho', 'panyo', 'vanyo', 'kiro', 'yasen', 'stamat']*/