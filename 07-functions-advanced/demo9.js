/*currying*/
let sum3 = (a, b, c) => {
    return a + b + c;
};

let sum3Curry = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(sum3(5, 8, 12)); /*25*/
console.log(sum3Curry(5)(8)(12)) /*25*/

let sum3b = sum3Curry(5)
let sum3c = sum3b(8);

console.log(sum3c(12)) /*25*/


/*the same with arrow functions*/

let sum3CurryArrow = (a) => (b) => (c) => {
    let result = a+b+c;
    return result;
}

console.log(sum3CurryArrow(5)(8)(12));