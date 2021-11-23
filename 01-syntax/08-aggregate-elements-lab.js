function solve(numbers) {
    const sum = function (arrayOfNumbers) {
        let result = 0;
        
        for (let number of arrayOfNumbers) {
            result += number;
        }
         
        return result;
    };

    const sumInverted = listOfNumbers => {
        let result = 0;

        for (const number of listOfNumbers) {
            result += 1 / number;
        }

        return result;
    };

    const concat = numbersForConcat => numbersForConcat.join('');

    console.log(sum(numbers));
    console.log(sumInverted(numbers));
    console.log(concat(numbers));
}