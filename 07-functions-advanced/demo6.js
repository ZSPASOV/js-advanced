let isValidName = name => name.split(' ').length == 2;

let names = [
    'Pesho',
    'Ivan Petrov',
    'Gosho Ivanov Petrovi',
    'Mariyka Peshova',
]

/*v1*/
let filteredNames = names.filter(isValidName);
/*v2 - sushtoto e kato v2*/
let filteredNamesV2 = names.filter(name => name.split(' ').length == 2);
console.log(filteredNames); /*['Ivan Petrov', 'Mariyka Peshova']*/
console.log(filteredNamesV2); /*['Ivan Petrov', 'Mariyka Peshova']*/