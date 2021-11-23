function solve(array, numberRotations) {
    while (numberRotations > 0) {
        let removedNum = array.pop();
        array.unshift(removedNum);
        numberRotations -= 1;
    }
    return array.join(' ');
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));