// The reduce() method executes a reducer function on each element of the array, resulting in a single output value
const array1 = [1, 2, 3, 4];
const reducer = 
(accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer)); // 10
console.log(array1.reduce(reducer, 5)); // 15 - tuk 5 e nachalnata stoinost na acumulatora v koito shte se naliva

console.log(array1.reduce((accumulator, element) => accumulator + element ** 2, 100)); /*130*/


// The reducer function takes four arguments:
// Accumulator 
// Current Value 
// Current Index (Optional)
// Source Array (Optional)
// Your reducer function's returned value is assigned to the accumulator
// Accumulator's value - the final, single resulting value


/*sum all values*/

let sum = [0, 1, 2, 3].reduce(function (acc, curr) {
         return acc + curr;
       }, 0);
console.log(sum); // 6
    
// Finding an average with reduce
const numbersArr= [30, 50, 40, 10, 70]; 
const average = 
  numbersArr.reduce((total, number, index, array) => { 
		total += number; 
		if( index === array.length-1) {
 		    return total/array.length; 
		} else {  return total; } 
	}); 
console.log(average) // 40
