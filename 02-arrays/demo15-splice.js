let names = ['pesho', 'gosho', 'panyo', 'vanyo', 'kiro'];
names.splice(1, 2)
console.log(names) /*['pesho', 'vanyo', 'kiro'] - izrqzva 2 elementa ot index 1 na dqsno*/

let other_names = ['pesho', 'gosho', 'panyo', 'vanyo', 'kiro'];

other_names.splice(2, 0, 'batman', 'superman')
console.log(other_names) /*['pesho', 'gosho', 'batman', 'superman', 'panyo', 'vanyo', 'kiro']*/