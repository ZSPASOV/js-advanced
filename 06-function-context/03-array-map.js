function arrayMap(arr, func) {
    return arr.reduce(function(acc, x) {
        acc.push(func(x));

        return acc;
    }, []); /*tova [] e parvonachalnata stoinost na accumulatora- toest prazen masiv*/
}

let mappedArray = arrayMap([1, 2, 3], x => x * 2);

console.log(mappedArray);