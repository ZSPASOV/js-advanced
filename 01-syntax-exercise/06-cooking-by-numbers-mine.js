function solve(num, opOne, opTwo, opThree, opFour, opFive) {
    let result = '';
    let numericNum = Number(num);
    let operations = {
        chop : (num) => num / 2,
        dice : (num) => Math.sqrt(num),
        spice : (num) => num += 1,
        bake : (num) => num * 3,
        fillet : (num) => num - num * 0.2,
    }
    function manipulate (operation) {
        selectedOperation = operations[operation];
        numericNum = selectedOperation(numericNum);
        result += `${numericNum}\n`;    
    }

    manipulate(opOne);
    manipulate(opTwo);
    manipulate(opThree);
    manipulate(opFour);
    manipulate(opFive);

    return result;
}

// console.log(solve('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));