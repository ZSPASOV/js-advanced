function solve(commandsArray) {
    let num = 1;
    let array = [];
    let result = ''
    while (commandsArray.length > 0) {
        command = commandsArray.shift();
        switch (command) {
            case 'add':
                array.push(num);
                num += 1;
                break;
            case 'remove':
                array.pop();
                num += 1;
                break;
        }
    }
    if (array.length == 0) {
        result = 'Empty';
    } else {
        result = array.join('\n')
    }
    return result;
}

console.log(solve(['add', 
'add', 
'add', 
'add']
))
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
))
console.log(solve(['remove', 
'remove', 
'remove']
))