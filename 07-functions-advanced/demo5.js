/*predicate function*/
let isValidName = function(name) {
    if (name.split(' ').length == 2) {
        return true;
    }

    return false;
}


/*v2*/
// let isValidName = name => name.split(' ').length == 2; /*tova s takuv syntax e sushtoto kato gore, vrushta true ili false*/

console.log(isValidName('Ivan Ivanov')); /*true*/
console.log(isValidName('Ivan Ivanov Petrov')); /*false*/
