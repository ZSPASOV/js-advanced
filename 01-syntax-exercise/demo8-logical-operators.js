// && (logical AND) -  returns the leftmost "false" value or the last truthy value, if all are true.
const val =  'yes' && null && false
console.log(val); // null
const val1 =   true && 5 && 'yes';
console.log(val1); // 'yes'

// || (logical OR) - returns the leftmost "true" value or the last falsy value, if all are false.

const val =   false || '' || 5;
console.log(val); // 5
const val1 = null || NaN || undefined;
console.log(val1); // undefined

// ! (logical NOT) - Returns false if its single operand can be converted to true; otherwise, returns true
const val = !true 
console.log(val); // false
const val = !false;
console.log(val); // true

