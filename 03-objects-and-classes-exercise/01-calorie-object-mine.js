function solve (arr) {
    let obj = {};
    let keys = [];
    let values = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            keys.push(arr[i]);
        } else {
            values.push(Number(arr[i]));
        }
    }

    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));