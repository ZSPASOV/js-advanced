let number = [1, 2, 3, 4];

let multiplyByTwo = x => x * 2;

newNumber = number.map(multiplyByTwo); /*v sluchaq map e higher order funkciq zashtoto priema druga funkciq kato argument*/
console.log(newNumber);