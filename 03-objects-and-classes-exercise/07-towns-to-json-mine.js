function solve(arr) {
    let helpArr = new Array;
    let helpArrTwo = new Array;
    arr.forEach((el) => helpArr
        .push(el
            // .replace(/\s+/g, '')
            .split('|').
            filter(checkNotEmpty)))

    function checkNotEmpty(element) {
        if (element !== '') {
            return element;
        }
    }

    let [titles, ...values] = helpArr;
    for (let i = 0; i < values.length; i++) {
        values[i][0] = values[i][0].trim();
        values[i][1] = Number(values[i][1]).toFixed(2);
        values[i][2] = Number(values[i][2]).toFixed(2);
    }
    // v1

    // values.forEach(function (el) {
    //     return helpArrTwo.push({
    //         Town : el[0],
    //         Latitude : Number(el[1]),
    //         Longitude : Number(el[2]),
    //     })
    // })

    // v2
    values.forEach(function (el) {
        let obj = new Object;
        obj[titles[0].trim()] = el[0];
        obj[titles[1].trim()] = Number(el[1]);
        obj[titles[2].trim()] = Number(el[2]);
        return helpArrTwo.push(obj)
    })

    return JSON.stringify(helpArrTwo);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));