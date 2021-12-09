function solve(...args) {
    let objTypeAndVal = new Array;
    let objCount = {};

    args.forEach(e => {
        objTypeAndVal.push([typeof(e), e]);        
    })

    args.forEach(e => {
        if (objCount[typeof(e)]) {
            objCount[typeof(e)] += 1;
        } else {
            objCount[typeof(e)] = 0;
            objCount[typeof(e)] += 1;
        }

    });
    let nestedArray = Object.entries(objCount).sort((a, b) => b[1] - a[1]);
    let result = '';

    for (let i = 0; i < objTypeAndVal.length; i++) {
        result += `${objTypeAndVal[i][0]}: ${objTypeAndVal[i][1]}\n`;
    }

    for (let i = 0; i < nestedArray.length; i++) {
        result += `${nestedArray[i][0]} = ${nestedArray[i][1]}\n`;
    }
    return result;
}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }, 'dog'));