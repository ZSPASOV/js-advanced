function solve(arr, delimeter) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += i == arr.length - 1 ? arr[i] : (arr[i] + delimeter);
        // the same as 
        // if (i == arr.length - 1) {
        //     arr[i]
        // } else {
        //     (arr[i] + delimeter)
        // }
    }

    return result;
}

console.log(solve(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
))