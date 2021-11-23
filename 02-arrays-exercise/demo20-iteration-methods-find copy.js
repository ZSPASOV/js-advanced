// The some() method tests whether at least one element in the array passes the test implemented by the provided function
// It returns a Boolean value
let array = [1, 2, 3, 4, 5];
let isEven = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};
console.log(array.some(isEven)); //true

let names = ['Kiro', 'Joro', 'Panyo'];

function checkFirstLetterEqualsD (letter) {
    return letter[0] === 'D'
}
console.log(names.some(checkFirstLetterEqualsD)); /*false*/
console.log(names.some(letter => letter[0] === 'P')); /*true*/
