function solve (arr) {
    arr.sort((a, b) => a - b);
    let end = arr.length - 1;
    let resultArr = arr.reduce((acc, el) => {
        if(acc.length !== arr.length) {
            acc.push(el);
            if(acc.length !== arr.length) {
                acc.push(arr[end--]);
            }
        }
        return acc;
    }, []);
    return resultArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));