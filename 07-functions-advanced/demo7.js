/*tova e pure function - zashtoto vinagi shte vrushta edin i susht rezultat pri ednakvi argumenti*/
let add = (a, b) => a + b;
console.log(add(2, 5)); /*7*/
console.log(add(2, 5)); /*7*/
/*tova e impure function*/

let impureFunction = function(text) {
    return Date() + text;
}

console.log(impureFunction('Panyo')); /*Fri Oct 29 2021 14:57:55 GMT+0300 (Източноевропейско лятно часово време)Panyo*/

console.log(impureFunction('Panyo')); /*Fri Oct 29 2021 14:58:11 GMT+0300 (Източноевропейско лятно часово време)Panyo
*/

/*vrushta razlichni neshta v zavisimost ot vremeto na izvikvane*/
