// Any function that returns a bool based on evaluation of the truth of an assertion 
// Predicates are often found in the form of callbacks

let array1 = [2, 10, 15, 20, 25];

let found = array1.find(isFound); // isFound is predicate in that case

function isFound(element) {
    return element > 10;
}

console.log(found);
