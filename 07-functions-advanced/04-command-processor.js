function solution() {
    let text = '';

    return {
        append: x => text += x,
        removeStart: n => text = text.substr(n),
        removeEnd: n => text = text.substr(0, text.length - n),
        print: () => console.log(text),
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.print();
firstZeroTest.append('again');
firstZeroTest.print();
firstZeroTest.removeStart(3);
firstZeroTest.print();
firstZeroTest.removeEnd(4);
firstZeroTest.print();
console.log(firstZeroTest);
console.log(typeof(firstZeroTest));
