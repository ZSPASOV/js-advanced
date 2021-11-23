// koga polzvame dot i koga bracket notation

let man = {}; /* empty object*/
let person = {
    firstName: 'Pesho',
    lastname: 'Petrov',
    age: 30,
    'full-name': 'Petar Petrov', /*poneje full-name ima - trqbva da e v kavichki*/
};

console.log(person['full-name']); /*shtom e v kavichki moje da se dostapi samo s bracket notation*/

let propname = 'firstName'

console.log(person[propname]); /*Pesho*/

/*usually dot notation is better one*/