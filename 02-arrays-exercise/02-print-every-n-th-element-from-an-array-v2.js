(arr, step) => {
    function predicate(el, i) {
        return i % step === 0;
    }
    let result = arr.filter(predicate);
    return result;
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));