function solve(sentence) {
    let regExpression = /,?\s/
    result = sentence
    .split(regExpression)
    .map(x => x.toLocaleUpperCase())
    .join(', ');

    return result;
}

console.log(solve('hi, how are you?'));
console.log(solve('HELLO'));

