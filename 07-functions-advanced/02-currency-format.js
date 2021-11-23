function result(currencyFormatter) {
    let separator = ',';
    let symbol = '$';
    let symbolFirst = true;

    /*v1 - taka shte vrushta nova funkciq s context null i podadeni stoinosti za parvite 3 parametara, shte ostane samo za value da se podava*/
    return currencyFormatter.bind(null, separator, symbol, symbolFirst); 
    /*v2*/
    // return value => currencyFormatter(separator, symbol, symbolFirst, value);
}


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
