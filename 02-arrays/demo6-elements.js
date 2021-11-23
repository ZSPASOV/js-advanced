let names = ['pesho', 'gosho', 'panyo'];

console.log(names[1]); /*gosho*/
console.log(names[names.length - 1]); /*panyo*/
console.log(names[5151251]) /*undefined*/


names[0] = 'Peter';
console.log(names); /*['Peter', 'gosho', 'panyo']*/
names[names.length] = 'Gerry'
console.log(names) /*['Peter', 'gosho', 'panyo', 'Gerry']*/

