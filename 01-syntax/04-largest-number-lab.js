function findMaxNumber(...numbers) {
    let maxNumber = Math.max(...numbers)
    console.log(`The largest number is ${maxNumber}.`);
}

findMaxNumber(5, -3, 16);