/*it can be used for copying an array*/

let names = ['superman', 'spiderman', 'batman']
let heroes = names.slice()
heroes[0] = 'captain america'
console.log(names) /*['superman', 'spiderman', 'batman']*/
console.log(heroes) /*['captain america', 'spiderman', 'batman']*/

/*taka ne promenq originalniq massive. ako bqhme dali heroes = names , togava shteshe da promeni i na 2te mesta
kato .copy() v python*/