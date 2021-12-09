function test(...args) {
    console.log(args); // [2, 5, 10, 15]
    console.log(...args); // 2 5 10 15
    [a, b, ...c] = args;
    console.log(a)
    console.log(b)
    console.log(c)
}

test(2, 5, 10, 15);