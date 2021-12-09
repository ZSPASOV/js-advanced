function solve(...values) {
    console.log(arguments); // tova se e polzvalo predi da ima spred operatora ...
    console.log(values);
}

solve('cat', 42, function () { console.log('Hello world!'); }, 'dog');

function asd(...args) {
    let a = arguments[0];
    console.log(a);
}

asd(2, 5, 10)